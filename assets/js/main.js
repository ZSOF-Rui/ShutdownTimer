/* ==========================================================================
   到点下班 / ShutdownTimer — 官网交互
   纯原生 JS，零依赖，零第三方请求。
   全部为「渐进增强」：脚本不执行时页面依然完整可读、下载可用。
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;

  var KEY = { theme: 'st.theme', accent: 'st.accent', lang: 'st.lang' };
  var dict = window.ST_I18N || {};

  /* ------------------------------------------------------------------ 工具 */
  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* 隐私模式下忽略 */ }
  }
  function all(selector, scope) {
    return Array.prototype.slice.call((scope || doc).querySelectorAll(selector));
  }
  function normalizeLang(value) {
    return String(value || '').toLowerCase().indexOf('en') === 0 ? 'en' : 'zh-CN';
  }
  function text(key) {
    var table = dict[lang] || {};
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    var fallback = dict['zh-CN'] || {};
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : null;
  }

  /* 让「变颜色」有过渡，日常悬停仍然保持 150ms 的干脆手感 */
  var themingTimer = 0;
  function withTransition(mutate) {
    root.classList.add('is-theming');
    void root.offsetWidth; /* 强制回流，确保过渡生效 */
    mutate();
    window.clearTimeout(themingTimer);
    themingTimer = window.setTimeout(function () {
      root.classList.remove('is-theming');
    }, 620);
  }

  var lang = normalizeLang(read(KEY.lang) || root.getAttribute('lang'));

  /* ============================================================ 0. 滚动进入动画 */
  /* 也用它作为兜底：任何一处脚本报错时立刻取消「先隐藏、再淡入」的初始状态，
     保证最坏情况下页面内容依然全部可见。 */
  function initReveal() {
    /* 同组元素依次错开，最多 280ms */
    all('[data-stagger]').forEach(function (group) {
      Array.prototype.slice.call(group.children).forEach(function (child, index) {
        if (child.classList && child.classList.contains('reveal')) {
          child.style.setProperty('--delay', Math.min(index * 70, 280) + 'ms');
        }
      });
    });

    if (!('IntersectionObserver' in window)) {
      root.classList.add('no-io');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    all('.reveal').forEach(function (el) { observer.observe(el); });
  }

  function revealEverything() {
    root.classList.remove('js');
    root.classList.add('no-io');
  }

  window.addEventListener('error', revealEverything);
  initReveal();

  /* ============================================================ 1. 深色 / 浅色 */
  var mqLight = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;

  function resolveTheme() {
    var saved = read(KEY.theme);
    if (saved === 'light' || saved === 'dark') return saved;
    return mqLight && mqLight.matches ? 'light' : 'dark';
  }

  function syncThemeButtons() {
    var key = root.getAttribute('data-theme') === 'light' ? 'nav.toDark' : 'nav.toLight';
    var label = text(key);
    if (label === null) return;
    all('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });
  }

  function applyTheme(next, animate) {
    var commit = function () { root.setAttribute('data-theme', next); };
    if (animate) withTransition(commit); else commit();
    syncThemeButtons();
  }

  all('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      write(KEY.theme, next);
      applyTheme(next, true);
    });
  });

  if (mqLight) {
    var onSchemeChange = function () { if (!read(KEY.theme)) applyTheme(resolveTheme(), true); };
    if (mqLight.addEventListener) mqLight.addEventListener('change', onSchemeChange);
    else if (mqLight.addListener) mqLight.addListener(onSchemeChange);
  }

  /* ============================================================ 2. 四种主题色 */
  function setAccent(value, animate) {
    if (!value) return;
    var commit = function () { root.setAttribute('data-accent', value); };
    if (animate) withTransition(commit); else commit();
    write(KEY.accent, value);
    syncAccentButtons();
  }

  function syncAccentButtons() {
    var current = root.getAttribute('data-accent') || 'blue';
    all('[data-accent-value]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-accent-value') === current));
    });
  }

  all('[data-accent-value]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setAccent(btn.getAttribute('data-accent-value'), true);
    });
  });

  /* ============================================================ 3. 中 / 英双语 */
  function applyLang(next) {
    lang = normalizeLang(next);
    root.setAttribute('lang', lang);
    write(KEY.lang, lang);

    all('[data-i18n]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n'));
      if (value !== null) el.textContent = value;
    });
    all('[data-i18n-html]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n-html'));
      if (value !== null) el.innerHTML = value;
    });
    all('[data-i18n-content]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n-content'));
      if (value !== null) el.setAttribute('content', value);
    });
    all('[data-i18n-aria]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n-aria'));
      if (value !== null) el.setAttribute('aria-label', value);
    });
    all('[data-lang-btn]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-btn') === lang));
    });

    syncThemeButtons();
    renderRelease();
    renderDemo();
  }

  all('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang-btn'));
    });
  });

  /* ============================================================ 4. 平台 / 架构检测 */
  var ua = navigator.userAgent || '';
  var platform = 'other';
  if (/Windows|Win32|Win64|WOW64/i.test(ua)) platform = 'windows';
  else if (/Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua)) platform = 'macos';
  else if (/Linux/i.test(ua) && !/Android/i.test(ua)) platform = 'linux';

  /* 32 位 / Windows 7 要选 x86 版：
     · UA 里的「Windows NT 6.1」就是 Win7（6.0 是 Vista）
     · Chromium 系还能问出 bitness，问到之后再用它校正一次
     注意：不要用 UA 里的 WOW64 判断架构 —— 那是「32 位浏览器跑在 64 位系统上」，
     系统本身仍是 64 位。 */
  var nt = (ua.match(/Windows NT (\d+\.\d+)/) || [])[1] || '';
  var needX86 = (platform === 'windows' && (nt === '6.1' || nt === '6.0'));

  /* 换掉某个下载按钮的地址与文案（文案改动后仍走 data-i18n，切语言不会丢） */
  function relink(el, href, key) {
    if (!el) return;
    el.setAttribute('href', href);
    var span = el.querySelector('span');
    if (!span) return;
    span.setAttribute('data-i18n', key);
    var value = text(key);
    if (value !== null) span.textContent = value;
  }

  function applyArch(arch) {
    root.setAttribute('data-arch', arch);
    all('[data-build]').forEach(function (el) {
      el.classList.toggle('is-current',
        el.getAttribute('data-build') === arch);
    });
    var x86 = (arch === 'x86');
    /* 首屏小字里的体积也跟着架构走 */
    all('[data-hero-size]').forEach(function (el) {
      el.hidden = (el.getAttribute('data-hero-size') !== arch);
    });
    /* 首屏主按钮：Win7 / 32 位访客直接拿到 x86 版 */
    relink(doc.querySelector('[data-download]'),
      x86 ? './ShutdownTimer_x86.exe' : './ShutdownTimer.exe',
      x86 ? 'hero.cta.download.x86' : 'hero.cta.download');
    /* 主按钮下面那行小链接：永远指向「另一个」架构 */
    relink(doc.querySelector('[data-alt-download]'),
      x86 ? './ShutdownTimer.exe' : './ShutdownTimer_x86.exe',
      x86 ? 'hero.alt.x64' : 'hero.alt.x86');
  }

  root.setAttribute('data-platform', platform);

  (function highlightPlatform() {
    var card = doc.querySelector('[data-os="' + platform + '"]');
    if (card) {
      card.classList.add('is-current');
      var badge = card.querySelector('[data-current-badge]');
      if (badge) badge.removeAttribute('hidden');
    }
    /* 非 Windows 访客：首页明确说明只有 Windows 版可选 */
    if (platform !== 'windows') {
      all('[data-platform-note]').forEach(function (el) { el.classList.add('is-visible'); });
    }
    /* 只有 Windows 访客才需要区分 x64 / x86 —— 其他系统的下载按钮
       本来就是「下载 Windows 版」，不该被改成 x86 版 */
    if (platform === 'windows') applyArch(needX86 ? 'x86' : 'x64');
  })();

  /* 能问出 CPU 位数就用它再校正一次（比 UA 准） */
  try {
    if (platform === 'windows' && navigator.userAgentData
        && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(['bitness']).then(function (d) {
        if (d && d.bitness === '32') applyArch('x86');
      }).catch(function () { /* 问不到就算了 */ });
    }
  } catch (e) { /* 老浏览器没有 userAgentData */ }

  /* ============================================================ 5. 读取 version.json */
  var siteRoot = (root.getAttribute('data-root') || '.').replace(/\/+$/, '');
  var release = { version: '', date: '', size: '', notesZh: [], notesEn: [] };

  function splitNotes(value) {
    return String(value || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function currentNotes() {
    return lang === 'en' && release.notesEn.length ? release.notesEn : release.notesZh;
  }

  function renderRelease() {
    all('[data-release-version]').forEach(function (el) {
      if (release.version) el.textContent = 'v' + release.version;
    });
    all('[data-release-date]').forEach(function (el) {
      if (release.date) el.textContent = release.date;
    });
    var notes = currentNotes();
    var list = doc.querySelector('[data-release-notes]');
    if (!list || !notes.length) return; /* 没读到 version.json 时保留 HTML 里的兜底文案 */
    list.innerHTML = '';
    notes.slice(0, 3).forEach(function (line) {
      var li = doc.createElement('li');
      li.textContent = line;
      list.appendChild(li);
    });
  }

  function renderVersion() {
    if (!release.version) return;
    all('[data-version]').forEach(function (el) { el.textContent = 'v' + release.version; });
    if (release.size) {
      all('[data-version-size]').forEach(function (el) { el.textContent = release.size; });
    }
    renderRelease();
  }

  function loadVersion() {
    if (!('fetch' in window)) return;
    var url = siteRoot + '/version.json?t=' + Date.now(); /* 时间戳绕过 CDN 缓存 */
    window.fetch(url, { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.version) return;
        release.version = String(data.version);
        release.date = data.release_date ? String(data.release_date) : '';
        release.size = data.download_size ? String(data.download_size) : '';
        release.notesZh = splitNotes(data.notes);
        release.notesEn = splitNotes(data.notes_en);
        renderVersion();
      })
      .catch(function () {
        /* 离线 / file:// 打开 / 网络异常：保留 HTML 中的静态兜底文案 */
      });
  }

  /* ============================================================ 6. 倒计时圆环演示 */
  var demo = { bar: null, time: null, hint: null, state: null, wrap: null, circumference: 0, static: false };
  var DEMO_TOTAL = 30; /* 演示一轮 30 秒；真实产品由用户输入决定 */
  var demoDeadline = Date.now() + DEMO_TOTAL * 1000;
  var demoDoneAt = 0;
  var demoDone = false;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function formatClock(seconds) {
    var s = Math.max(0, Math.ceil(seconds));
    var m = Math.floor(s / 60);
    return String(m).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  function paintRing(remaining) {
    if (!demo.bar) return;
    var fraction = Math.max(0, Math.min(1, remaining / DEMO_TOTAL));
    demo.bar.style.strokeDasharray = String(demo.circumference);
    demo.bar.style.strokeDashoffset = String(demo.circumference * (1 - fraction));
  }

  function renderDemo() {
    if (!demo.wrap) return;
    if (demo.static) {
      /* 「减少动态效果」模式：只跟随语言更新文字，数字保持静止 */
      if (demo.hint) demo.hint.textContent = text('hero.demo.remaining') || '';
      if (demo.state) demo.state.textContent = text('hero.demo.state.running') || '';
      return;
    }
    if (!demoDone) {
      var remaining = (demoDeadline - Date.now()) / 1000;
      if (demo.time) demo.time.textContent = formatClock(remaining);
      if (demo.hint) demo.hint.textContent = text('hero.demo.remaining') || '';
      if (demo.state) demo.state.textContent = text('hero.demo.state.running') || '';
      paintRing(Math.max(0, remaining));
      /* 最后 10 秒：变红 + 脉冲（与产品行为一致） */
      demo.wrap.classList.toggle('is-danger', remaining <= 10 && remaining > 0);
      demo.wrap.classList.remove('is-done');
    } else {
      if (demo.time) demo.time.textContent = '00:00';
      if (demo.hint) demo.hint.textContent = text('hero.demo.done') || '';
      if (demo.state) demo.state.textContent = text('hero.demo.state.done') || '';
      paintRing(0);
      demo.wrap.classList.remove('is-danger');
      demo.wrap.classList.add('is-done');
    }
  }

  function tickDemo() {
    if (doc.hidden) return; /* 后台标签页不刷新界面，返回时按 wall clock 直接对齐 */
    var now = Date.now();
    if (!demoDone && now >= demoDeadline) {
      demoDone = true;
      demoDoneAt = now;
    } else if (demoDone && now - demoDoneAt > 4000) {
      demoDone = false;
      demoDeadline = now + DEMO_TOTAL * 1000;
    }
    renderDemo();
  }

  (function initDemo() {
    demo.wrap = doc.querySelector('[data-demo]');
    if (!demo.wrap) return;
    demo.bar = demo.wrap.querySelector('.ring__bar');
    demo.time = demo.wrap.querySelector('[data-demo-time]');
    demo.hint = demo.wrap.querySelector('.ring__hint');
    demo.state = demo.wrap.querySelector('[data-demo-state]');
    demo.circumference = 2 * Math.PI * 84; /* r=84，与 SVG 中一致 */

    if (reduceMotion) {
      /* 尊重「减少动态效果」：只画一帧静止状态 */
      demo.static = true;
      var still = 0.62;
      if (demo.bar) {
        demo.bar.style.strokeDasharray = String(demo.circumference);
        demo.bar.style.strokeDashoffset = String(demo.circumference * (1 - still));
      }
      if (demo.time) demo.time.textContent = '18:24';
      if (demo.hint) demo.hint.textContent = text('hero.demo.remaining') || '';
      if (demo.state) demo.state.textContent = text('hero.demo.state.running') || '';
      return;
    }

    renderDemo();
    window.setInterval(tickDemo, 200);
    doc.addEventListener('visibilitychange', function () { if (!doc.hidden) tickDemo(); });
  })();

  /* ============================================================ 8. 吸顶导航 */
  (function initSticky() {
    var header = doc.querySelector('.site-header');
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    update();
  })();

  /* ============================================================ 9. 更新日志筛选 */
  (function initFilters() {
    var buttons = all('[data-filter]');
    if (!buttons.length) return;
    var entries = all('[data-entry]');
    var empty = doc.querySelector('[data-empty]');

    function apply(filter) {
      var visible = 0;
      entries.forEach(function (entry) {
        var shown = 0;
        all('[data-group]', entry).forEach(function (group) {
          var match = filter === 'all' || group.getAttribute('data-group') === filter;
          group.hidden = !match;
          if (match) shown++;
        });
        entry.classList.toggle('is-hidden', shown === 0);
        if (shown > 0) visible++;
      });
      if (empty) empty.classList.toggle('is-visible', visible === 0);
      buttons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-filter') === filter));
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-filter')); });
    });
  })();

  /* ============================================================ 启动 */
  /* 主色 / 主题由 <head> 里的内联脚本先行写入，避免闪屏；这里只同步按钮状态 */
  syncAccentButtons();
  syncThemeButtons();
  applyLang(lang);
  loadVersion();
})();
