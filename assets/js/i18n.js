/* ==========================================================================
   到点下班 / ShutdownTimer — 官网文案表（中 / 英）
   --------------------------------------------------------------------------
   · 页面用 data-i18n="key"           替换文本
   · 页面用 data-i18n-html="key"      替换内容（文案里含 <b> / <br> 等标签时用）
   · 页面用 data-i18n-content="key"   替换元素的 content 属性（用于 <meta>）
   · 页面用 data-i18n-aria="key"      替换元素的 aria-label
   · 缺少键时保留页面里的中文原文，不会出现空白
   ========================================================================== */
window.ST_I18N = {
  'zh-CN': {
    /* —— 站点元信息 —— */
    'meta.title': '到点下班 · 跨平台定时关机工具',
    'meta.description':
      '到点下班（ShutdownTimer）是一款跨平台的定时关机工具。设定时间后到点自动关闭计算机，锁屏与休眠唤醒后依然准时触发。免安装、不收集任何数据。',

    /* —— 品牌 —— */
    'brand.name': '到点下班',

    /* —— 导航 —— */
    'nav.home': '返回首页',
    'nav.main': '主导航',
    'nav.skip': '跳到下载',
    'nav.features': '功能',
    'nav.download': '下载',
    'nav.changelog': '更新日志',
    'nav.github': '在 GitHub 上查看源码',
    'nav.lang': '切换语言',
    'nav.toLight': '切换到浅色模式',
    'nav.toDark': '切换到深色模式',

    /* —— 首屏 —— */
    'hero.badge': '已发布',
    'hero.title': '到点下班，<br><span class="accent">电脑也是</span>',
    'hero.subtitle':
      '一款跨平台的定时关机工具。设好时间，到点自动关闭，锁屏也能可靠触发。',
    'hero.cta.download': '下载 Windows 版',
    'hero.cta.download.x86': '下载 Windows 7 版（x86）',
    'hero.cta.changelog': '查看更新日志',
    'hero.alt.x86': 'Windows 7 或 32 位系统？下载 x86 版',
    'hero.alt.x64': '是 64 位系统？下载 x64 版',
    'hero.note.platform': '当前提供 Windows 版，macOS / Linux 版敬请期待。',
    'hero.meta.os': 'Windows 7 / 10 / 11',
    'hero.meta.portable': '免安装',
    'hero.demo.tag': '演示',
    'hero.demo.window': '到点下班',
    'hero.demo.remaining': '剩余时间',
    'hero.demo.done': '已下班',
    'hero.demo.state.running': '运行中',
    'hero.demo.state.done': '关机指令已发出',
    'hero.demo.preview': '今天 <b>23:00</b> 下班',

    /* —— 下载 —— */
    'download.eyebrow': '下载',
    'download.title': '选择你的平台',
    'download.lead': '单文件、免安装，下载后双击即可运行。无需管理员权限即可完成常规定时关机。',
    'download.current': '当前系统',
    'download.win.meta': 'Windows 7 ~ 11 · 免安装',
    'download.win.btn': '下载 Windows 版',
    'download.x64.os': 'Windows 10 / 11（64 位）',
    'download.x64.btn': '下载 x64',
    'download.x86.os': 'Windows 7 SP1 及以上（32 位）',
    'download.x86.btn': '下载 x86',
    'download.arch.hint': '不确定选哪个？Windows 7 或 32 位系统请选 x86 版，其余选 x64 版。',
    'download.mac.meta': 'macOS 12+ · Apple 芯片 / Intel',
    'download.mac.btn': '敬请期待',
    'download.linux.meta': 'Linux x86_64',
    'download.linux.btn': '敬请期待',
    'download.note.req': '系统要求：Windows 7 SP1 及以上（x86 版）/ Windows 10 及以上（x64 版）',
    'download.note.tip': '下载由本站直接提供，和自动更新用的是同一份文件。',

    /* —— 特性 —— */
    'features.eyebrow': '功能',
    'features.title': '为「准点下班」而生',
    'features.lead': '从倒计时到自动更新，所有设计都围绕一件事：到点就走。',
    'features.f1.title': '精确倒计时',
    'features.f1.desc': '后台线程 + wall clock 计时，锁屏或休眠唤醒后依然准时触发。',
    'features.f2.title': '四种主题',
    'features.f2.desc': '午夜蓝 / 暗夜紫 / 森林绿 / 落日橙，切换时颜色平滑渐变。',
    'features.f3.title': '自定义壁纸',
    'features.f3.desc': '本地图片、图片直链、随机图源，自动缩放裁剪为圆角卡片。',
    'features.f4.title': '中英双语',
    'features.f4.desc': '一键切换，主窗口、设置窗口与提示全部同步。',
    'features.f5.title': '开机自启',
    'features.f5.desc': 'Windows 走注册表，macOS 走 LaunchAgents，一次设置永久生效。',
    'features.f6.title': '自动更新',
    'features.f6.desc': '检测新版本，后台下载显示百分比进度，一键重启替换。',

    /* —— 主题色板 —— */
    'themes.eyebrow': '主题',
    'themes.title': '四种主题，总有一款适合你的桌面。',
    'themes.lead': '点击色块即可即时预览，这里的配色与产品内置主题完全一致。',
    'themes.group': '主题配色预览',
    'themes.blue': '午夜蓝',
    'themes.violet': '暗夜紫',
    'themes.green': '森林绿',
    'themes.amber': '落日橙',

    /* —— 更新公告 —— */
    'release.eyebrow': '更新',
    'release.title': '最新版本',
    'release.notes': '更新说明',
    'release.published': '发布于',
    'release.more': '查看完整更新日志',
    'release.fallback.0': '检查更新：启动 3 秒后自动检查，支持后台下载与重启替换',
    'release.fallback.1': '修复主题切换卡顿，降低倒计时渲染占用',
    'release.fallback.2': '设置页新增版本信息行',

    /* —— 常见问题 —— */
    'faq.eyebrow': '常见问题',
    'faq.title': '你可能想问的',
    'faq.q1': '关机会不会丢数据？',
    'faq.a1':
      '工具发出的是系统标准关机指令，与手动点「关机」完全一致。未保存的文档仍可能丢失，建议开始计时前先保存工作。',
    'faq.q2': '支持锁屏后触发吗？',
    'faq.a2':
      '支持。倒计时在后台线程中基于 wall clock 计算，锁屏、休眠唤醒后都会按原定时间触发，不会因为界面不刷新而漂移。',
    'faq.q3': '需要管理员权限吗？',
    'faq.a3':
      '常规定时关机不需要。如果系统策略限制或需要强制结束未响应程序，关机可能失败，此时主界面会直接显示错误原因。',
    'faq.q4': '会上传我的数据吗？',
    'faq.a4':
      '不会。除了检查更新时请求一次 version.json，工具不发起任何网络请求，也不包含设备标识；配置只保存在你自己的电脑上。',

    /* —— 页脚 —— */
    'footer.tagline': '设好时间，到点下班。',
    'footer.product': '产品',
    'footer.project': '项目',
    'footer.source': '源码仓库',
    'footer.releases': '发布版本',
    'footer.issues': '问题反馈',
    'footer.made': '用 Python + tkinter 写成，仅依赖 Pillow。',
    'footer.version': '版本',

    /* —— 更新日志页 —— */
    'cl.meta.title': '更新日志 · 到点下班',
    'cl.meta.description': '到点下班（ShutdownTimer）的完整更新日志：每个版本的新增、修复与优化。',
    'cl.title': '更新日志',
    'cl.lead': '每一次改动都记在这里。',
    'cl.filter.all': '全部',
    'cl.filter.new': '新增',
    'cl.filter.fix': '修复',
    'cl.filter.improve': '优化',
    'cl.tag.new': '新增',
    'cl.tag.fix': '修复',
    'cl.tag.improve': '优化',
    'cl.empty': '该分类下暂无条目。',
    'cl.back': '返回首页',
    'cl.skip': '跳到更新日志',
    'cl.filter.group': '按类型筛选',

    'cl.v110.new.0': '检查更新：启动 3 秒后自动检查，也可在设置页手动检查',
    'cl.v110.new.1': '后台线程下载更新，显示百分比进度，可随时取消并清理临时文件',
    'cl.v110.new.2': '设置页新增版本信息行，可直接跳转 GitHub',
    'cl.v110.fix.0': '修复主题切换时的卡顿',
    'cl.v110.fix.1': '修复设置窗口与主窗口 DPI 缩放不一致',
    'cl.v110.fix.2': '修复切换语言后设置窗口标题栏未同步',
    'cl.v110.improve.0': '倒计时渲染缓存，降低 CPU 占用',
    'cl.v110.improve.1': '主题刷新不再遍历全部画布元素',

    'cl.v101.fix.0': '修复锁屏唤醒后倒计时不刷新的问题',
    'cl.v101.fix.1': '修复自定义壁纸在高分屏下被拉伸',
    'cl.v101.improve.0': '缩短冷启动时间，界面更快出现',

    'cl.v100.new.0': '倒计时圆环主界面，最后 10 秒变红脉冲',
    'cl.v100.new.1': '秒 / 小时双单位切换，支持小数输入',
    'cl.v100.new.2': '四种主题与深色 / 浅色模式',
    'cl.v100.new.3': '中英双语一键切换，全局同步',
    'cl.v100.new.4': '开机自启与本地配置持久化',
    'cl.v100.new.5': '自定义壁纸：本地图片、图片直链、随机图源',

    /* —— 404 —— */
    'nf.meta.title': '页面不存在 · 到点下班',
    'nf.title': '这个页面已经下班了',
    'nf.lead': '你要找的地址不存在，可能链接已经过期。',
    'nf.back': '回到首页'
  },

  en: {
    /* —— Site meta —— */
    'meta.title': 'ShutdownTimer · Cross-platform shutdown timer',
    'meta.description':
      'ShutdownTimer is a cross-platform shutdown timer. Set a time and your computer closes on schedule — reliably, even after locking or sleeping. Portable, and it collects no data.',

    /* —— Brand —— */
    'brand.name': 'ShutdownTimer',

    /* —— Navigation —— */
    'nav.home': 'Back to home',
    'nav.main': 'Main navigation',
    'nav.skip': 'Skip to download',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.changelog': 'Changelog',
    'nav.github': 'View source on GitHub',
    'nav.lang': 'Switch language',
    'nav.toLight': 'Switch to light mode',
    'nav.toDark': 'Switch to dark mode',

    /* —— Hero —— */
    'hero.badge': 'Released',
    'hero.title': 'Clock out.<br><span class="accent">So can your PC.</span>',
    'hero.subtitle':
      'A cross-platform shutdown timer. Set a time and your computer closes on schedule — reliably, even when locked.',
    'hero.cta.download': 'Download for Windows',
    'hero.cta.download.x86': 'Download for Windows 7 (x86)',
    'hero.cta.changelog': 'View changelog',
    'hero.alt.x86': 'On Windows 7 or 32-bit? Get the x86 build',
    'hero.alt.x64': 'On a 64-bit system? Get the x64 build',
    'hero.note.platform': 'The Windows build is available now. macOS and Linux are coming soon.',
    'hero.meta.os': 'Windows 7 / 10 / 11',
    'hero.meta.portable': 'Portable',
    'hero.demo.tag': 'Demo',
    'hero.demo.window': 'ShutdownTimer',
    'hero.demo.remaining': 'Remaining',
    'hero.demo.done': 'Done',
    'hero.demo.state.running': 'Running',
    'hero.demo.state.done': 'Shutdown issued',
    'hero.demo.preview': 'Today <b>23:00</b>',

    /* —— Download —— */
    'download.eyebrow': 'Download',
    'download.title': 'Pick your platform',
    'download.lead':
      'One single file, no installer. Double-click to run. No administrator rights needed for a normal timed shutdown.',
    'download.current': 'Your system',
    'download.win.meta': 'Windows 7 ~ 11 · Portable',
    'download.win.btn': 'Download for Windows',
    'download.x64.os': 'Windows 10 / 11 (64-bit)',
    'download.x64.btn': 'Download x64',
    'download.x86.os': 'Windows 7 SP1 or later (32-bit)',
    'download.x86.btn': 'Download x86',
    'download.arch.hint': 'Not sure which one? Pick x86 for Windows 7 or 32-bit systems — otherwise x64.',
    'download.mac.meta': 'macOS 12+ · Apple silicon / Intel',
    'download.mac.btn': 'Coming soon',
    'download.linux.meta': 'Linux x86_64',
    'download.linux.btn': 'Coming soon',
    'download.note.req': 'Requirements: Windows 7 SP1 or later (x86 build) / Windows 10 or later (x64 build)',
    'download.note.tip': 'Downloads come straight from this site — the same file the built-in updater uses.',

    /* —— Features —— */
    'features.eyebrow': 'Features',
    'features.title': 'Built to clock out on time',
    'features.lead': 'From the countdown to auto-update, everything serves one goal: leave when the clock says so.',
    'features.f1.title': 'Accurate countdown',
    'features.f1.desc': 'A background thread on wall-clock time, so it still fires on schedule after a lock or sleep.',
    'features.f2.title': 'Four themes',
    'features.f2.desc': 'Midnight blue / night purple / forest green / sunset orange, with smooth colour transitions.',
    'features.f3.title': 'Custom wallpaper',
    'features.f3.desc': 'A local image, a direct URL, or a random source — scaled and cropped into a rounded card.',
    'features.f4.title': 'Bilingual UI',
    'features.f4.desc': 'One click to switch; the main window, settings window and every toast stay in sync.',
    'features.f5.title': 'Launch at startup',
    'features.f5.desc': 'Registry on Windows, LaunchAgents on macOS. Set it once and it stays on.',
    'features.f6.title': 'Auto update',
    'features.f6.desc': 'Checks for new builds, downloads in the background with a progress bar, then swaps and restarts.',

    /* —— Themes —— */
    'themes.eyebrow': 'Themes',
    'themes.title': 'Four themes, one of them fits your desktop.',
    'themes.lead': 'Click a swatch to preview it instantly — these are the exact colours shipped in the app.',
    'themes.group': 'Theme colour preview',
    'themes.blue': 'Midnight Blue',
    'themes.violet': 'Night Purple',
    'themes.green': 'Forest Green',
    'themes.amber': 'Sunset Orange',

    /* —— Release —— */
    'release.eyebrow': 'Updates',
    'release.title': 'Latest release',
    'release.notes': 'Release notes',
    'release.published': 'Released',
    'release.more': 'Read the full changelog',
    'release.fallback.0': 'Update check: runs automatically 3 seconds after launch, with background download and restart-to-swap',
    'release.fallback.1': 'Fixed theme switching stutter and lowered countdown rendering cost',
    'release.fallback.2': 'New version row in the settings page',

    /* —— FAQ —— */
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions you might have',
    'faq.q1': 'Will I lose unsaved work?',
    'faq.a1':
      'The app issues the standard system shutdown request — exactly what the Start menu does. Unsaved documents can still be lost, so save your work before starting the timer.',
    'faq.q2': 'Does it work when the screen is locked?',
    'faq.a2':
      'Yes. The countdown runs in a background thread on wall-clock time, so locking or sleeping never shifts the deadline, even while the UI is not redrawing.',
    'faq.q3': 'Do I need administrator rights?',
    'faq.a3':
      'Not for a normal timed shutdown. If a system policy blocks it, or an unresponsive app must be forced closed, the shutdown can fail — the main window then shows the exact error.',
    'faq.q4': 'Do you collect any data?',
    'faq.a4':
      'No. Apart from a single version.json request when checking for updates, the app makes no network calls and sends no device identifiers. Your settings stay on your machine.',

    /* —— Footer —— */
    'footer.tagline': 'Set the time and clock out.',
    'footer.product': 'Product',
    'footer.project': 'Project',
    'footer.source': 'Source code',
    'footer.releases': 'Releases',
    'footer.issues': 'Report an issue',
    'footer.made': 'Built with Python + tkinter, with Pillow as the only dependency.',
    'footer.version': 'Version',

    /* —— Changelog page —— */
    'cl.meta.title': 'Changelog · ShutdownTimer',
    'cl.meta.description': 'The full changelog of ShutdownTimer: what was added, fixed and improved in every release.',
    'cl.title': 'Changelog',
    'cl.lead': 'Every change, in one place.',
    'cl.filter.all': 'All',
    'cl.filter.new': 'Added',
    'cl.filter.fix': 'Fixed',
    'cl.filter.improve': 'Improved',
    'cl.tag.new': 'Added',
    'cl.tag.fix': 'Fixed',
    'cl.tag.improve': 'Improved',
    'cl.empty': 'Nothing in this category yet.',
    'cl.back': 'Back to home',
    'cl.skip': 'Skip to changelog',
    'cl.filter.group': 'Filter by type',

    'cl.v110.new.0': 'Update check: runs automatically 3 seconds after launch, plus a manual check in settings',
    'cl.v110.new.1': 'Background download with a percentage progress bar, cancellable at any time with temp files cleaned up',
    'cl.v110.new.2': 'New version row in settings, linking straight to GitHub',
    'cl.v110.fix.0': 'Fixed stutter when switching themes',
    'cl.v110.fix.1': 'Fixed mismatched DPI scaling between the settings window and the main window',
    'cl.v110.fix.2': 'Fixed the settings window title not following a language switch',
    'cl.v110.improve.0': 'Cached countdown rendering to lower CPU usage',
    'cl.v110.improve.1': 'Theme refresh no longer walks every canvas element',

    'cl.v101.fix.0': 'Fixed the countdown not refreshing after waking from a locked screen',
    'cl.v101.fix.1': 'Fixed custom wallpapers being stretched on high-DPI displays',
    'cl.v101.improve.0': 'Faster cold start — the window appears sooner',

    'cl.v100.new.0': 'Countdown ring UI, turning red and pulsing for the final 10 seconds',
    'cl.v100.new.1': 'Seconds / hours units with decimal input',
    'cl.v100.new.2': 'Four themes plus dark / light mode',
    'cl.v100.new.3': 'One-click Chinese / English switch, synced everywhere',
    'cl.v100.new.4': 'Launch at startup and persistent local settings',
    'cl.v100.new.5': 'Custom wallpaper: local image, direct URL or random source',

    /* —— 404 —— */
    'nf.meta.title': 'Page not found · ShutdownTimer',
    'nf.title': 'This page has clocked out',
    'nf.lead': 'The address you asked for does not exist — the link may be out of date.',
    'nf.back': 'Back to home'
  }
};
