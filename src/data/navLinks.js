/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'Studying',
    name: '个人其他站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //开源      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
      shortDesc: '全球最大代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      },
      
      // pages      
      {
      id: 'github-pages',
      title: 'GitHub Pages',
      description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
      shortDesc: 'Git 驱动的静态网站托管。',
      url: 'https://pages.github.com/',
      category: 'pages',
      icon: '/icons/github-pages.webp',
      },
      {
      id: 'cloudflare-pages',
      title: 'Cloudflare Pages',
      description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
      shortDesc: 'CDN 优化的前端部署平台。',
      url: 'https://pages.cloudflare.com/',
      category: 'pages',
      icon: '/icons/cloudflare-pages.webp',
      },
      {
      id: 'vercel',
      title: 'Vercel',
      description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
      shortDesc: 'Next.js 团队出品的部署平台。',
      url: 'https://vercel.com/',
      category: 'pages',
      icon: '/icons/vercel.webp',
      },
      
// 个人其他站点
      {
        id: 'emby_aks',
        title: 'Emby_aks',
        description: '个人媒体服务器，提供电影、电视剧、音乐等多媒体内容的流媒体播放服务，支持跨平台访问和远程观看体验。',
        shortDesc: '媒体流服务器。',
        url: 'https://ikuyo.de/',
        category: 'media',
      },
      {
        id: 'kikoeru',
        title: 'Kikoeru',
        description: '专业的ASMR音频播放平台，提供高质量的音频流媒体服务，支持分类浏览和个性化推荐功能。',
        shortDesc: 'ASMR音频平台。',
        url: 'http://10.0.1.231:8888',
        category: 'media',
      },
      {
        id: 'komga',
        title: 'Komga',
        description: '开源漫画服务器，专为数字漫画和书籍设计，支持多种格式，提供现代化的阅读体验和图书管理功能。',
        shortDesc: '漫画阅读服务器。',
        url: 'http://kawaii-bak.akaye.de:25600',
        category: 'media',
      },
      {
        id: 'komga_internal',
        title: 'Komga_内网',
        description: '内网版漫画服务器，提供局域网内的高速漫画阅读服务，支持离线访问和本地存储优化。',
        shortDesc: '内网漫画服务器。',
        url: 'http://10.0.1.231:25600',
        category: 'media',
      },
      {
        id: 'kawaii_internal',
        title: 'Kawaii_内网',
        description: '群晖NAS管理系统，提供文件存储、备份同步、应用管理等综合网络存储解决方案，支持多用户协作。',
        shortDesc: '群晖NAS内网。',
        url: 'http://10.0.1.230:5000',
        category: 'media',
      },
      {
        id: 'kawaii_external',
        title: 'Kawaii_外网',
        description: '群晖NAS外网访问接口，提供远程文件访问、数据同步和媒体流传输服务，确保随时随地的数据访问。',
        shortDesc: '群晖NAS外网。',
        url: 'http://kawaii.akaye.de:5000',
        category: 'media',
      },
      {
        id: 'kawaii_bak_internal',
        title: 'Kawaii-bak_内网',
        description: '备份群晖NAS系统，提供数据冗余保护和灾难恢复功能，确保重要数据的安全性和可用性。',
        shortDesc: '备份NAS内网。',
        url: 'http://10.0.1.231:5000/',
        category: 'media',
      },
      {
        id: 'kawaii_bak_external',
        title: 'Kawaii-bak_外网',
        description: '备份群晖NAS外网访问，提供异地备份和远程数据恢复服务，双重保障数据安全。',
        shortDesc: '备份NAS外网。',
        url: 'http://kawaii-bak.akaye.de:5000/',
        category: 'media',
      },
      {
        id: 'pve_external',
        title: 'PVE_外网',
        description: 'Proxmox虚拟化管理平台，提供虚拟机和容器的统一管理，支持高可用集群和企业级虚拟化解决方案。',
        shortDesc: '虚拟化管理平台。',
        url: 'https://pve.akaye.de:8006',
        category: 'media',
      },
      {
        id: 'pve_bak_internal',
        title: 'PVE_bak内网',
        description: '备份Proxmox虚拟化平台，提供虚拟机备份和灾难恢复功能，确保虚拟化环境的稳定性。',
        shortDesc: '备份虚拟化平台。',
        url: 'https://10.0.1.131:8006/',
        category: 'media',
      },
      {
        id: 'wallos_subscription',
        title: 'Wallos订阅监控',
        description: '订阅服务监控工具，帮助跟踪和管理各种订阅服务的费用和到期时间，避免不必要的支出。',
        shortDesc: '订阅监控工具。',
        url: 'http://46.38.253.48:8282/',
        category: 'media',
      },
      
      // 下载器分类
      {
        id: 'qbittorrent_anime',
        title: 'qBittorrent-Anime',
        description: '专用于动漫资源的BT下载器，提供高效的种子下载和管理功能，支持RSS订阅和自动化下载。',
        shortDesc: '动漫下载器。',
        url: 'http://kawaii-bak.akaye.de:8084',
        category: 'downloader',
      },
      {
        id: 'qbittorrent_azusa',
        title: 'qBittorrent-Azusa',
        description: '梓喵专用下载器，针对特定资源类型优化的BT客户端，提供智能分类和自动化管理功能。',
        shortDesc: '梓喵下载器。',
        url: 'http://kawaii-bak.akaye.de:8989',
        category: 'downloader',
      },
      {
        id: 'qbittorrent_doujin',
        title: 'qBittorrent-Doujin',
        description: '同人作品专用下载器，集成Nyaa种子站点，提供ACG同人内容的专业下载和分类管理。',
        shortDesc: '同人作品下载器。',
        url: 'http://kawaii-bak.akaye.de:8089',
        category: 'downloader',
      },
      {
        id: 'qbittorrent_general',
        title: 'qBittorrent-General',
        description: '通用BT下载器，支持多种资源类型的下载，提供完整的种子管理和带宽控制功能。',
        shortDesc: '通用BT下载器。',
        url: 'http://kawaii-bak.akaye.de:8080',
        category: 'downloader',
      },
      {
        id: 'netcup_vps_mnz',
        title: 'Netcup_VPS MNZ-1st',
        description: 'Netcup VPS服务器上的BT下载服务，提供海外高速下载节点，优化国际资源获取速度。',
        shortDesc: 'VPS下载节点。',
        url: 'http://152.53.194.166:2909',
        category: 'downloader',
      },
      {
        id: 'aria2',
        title: 'Aria2',
        description: '轻量级多协议下载器，支持HTTP、FTP、BitTorrent等多种协议，提供命令行和Web界面管理。',
        shortDesc: '多协议下载器。',
        url: 'http://10.0.1.231:6880',
        category: 'downloader',
      },
      {
        id: 'vertex',
        title: 'Vertex',
        description: '现代化的下载管理工具，提供直观的用户界面和高效的下载调度功能。',
        shortDesc: '下载管理工具。',
        url: 'http://46.38.253.48:3077/',
        category: 'downloader',
      },
      {
        id: 'iyuu',
        title: 'IYUU',
        description: 'PT站点辅助工具，提供种子信息查询、数据统计和自动化管理功能，提升PT使用效率。',
        shortDesc: 'PT辅助工具。',
        url: 'http://46.38.253.48:8787',
        category: 'downloader',
      },
      {
        id: 'home_vertex',
        title: 'Home_Vertex',
        description: '本地部署的Vertex下载管理器，提供内网高速下载和本地存储优化功能。',
        shortDesc: '本地下载管理器。',
        url: 'http://10.0.1.231:3077',
        category: 'downloader',
      },
      
      // 主机系统分类
      {
        id: 'router',
        title: 'Router',
        description: '网络路由器管理界面，提供网络配置、设备管理、流量监控和安全设置等核心网络管理功能。',
        shortDesc: '路由器管理。',
        url: 'http://10.0.1.1/',
        category: 'system',
      },
      {
        id: 'cloudflare',
        title: 'Cloudflare',
        description: '全球领先的CDN和网络安全服务提供商，提供域名解析、DDoS防护、网站加速等企业级网络服务。',
        shortDesc: 'CDN服务平台。',
        url: 'https://dash.cloudflare.com/',
        category: 'system',
      },
      {
        id: 'blog',
        title: 'Blog',
        description: '个人博客网站，分享技术文章、生活感悟和项目经验，提供RSS订阅和评论互动功能。',
        shortDesc: '个人博客。',
        url: 'https://akaye.de',
        category: 'system',
      },
      {
        id: 'image_hosting',
        title: '图床',
        description: '个人图片存储服务，提供图片上传、链接生成和批量管理功能，支持多种图片格式和CDN加速。',
        shortDesc: '图片存储服务。',
        url: 'https://file.akaye.de/',
        category: 'system',
      },
      {
        id: 'picx',
        title: 'PICX',
        description: '基于GitHub的免费图床服务，利用GitHub仓库存储图片，提供稳定可靠的图片外链服务。',
        shortDesc: 'GitHub图床。',
        url: 'https://picx.xpoet.cn/#/upload',
        category: 'system',
      },
      {
        id: 'istoreos',
        title: 'iStoreOS',
        description: '基于OpenWrt的路由器操作系统，提供现代化的Web界面和丰富的插件生态，简化路由器管理。',
        shortDesc: '路由器系统。',
        url: 'http://10.0.1.17',
        category: 'system',
      },
      {
        id: 'maa_config',
        title: 'MAA修改配置',
        description: '明日方舟助手配置工具，提供游戏自动化脚本的配置和管理功能，优化游戏体验。',
        shortDesc: '游戏助手配置。',
        url: 'https://ark.003456.xyz/',
        category: 'system',
      },
      
      // 面板管理分类
      {
        id: 'lxc_taskdebian',
        title: 'LXC_TaskDebian',
        description: '1Panel服务器管理面板，运行在LXC容器中，提供Web应用部署、数据库管理和系统监控功能。',
        shortDesc: 'LXC容器管理面板。',
        url: 'http://10.0.1.75:7717/iii',
        category: 'panel',
      },
      {
        id: 'nezha_console',
        title: 'Nezha_Console',
        description: '哪吒监控面板，提供多服务器状态监控、性能分析和告警通知功能，实现统一的服务器管理。',
        shortDesc: '服务器监控面板。',
        url: 'https://status.peakr.de/',
        category: 'panel',
      },
      {
        id: 'netcup_vps_piko',
        title: 'Netcup_VPS Piko G11s',
        description: 'Netcup VPS服务器的1Panel管理界面，提供容器化应用部署和服务器资源管理功能。',
        shortDesc: 'VPS管理面板。',
        url: 'http://46.38.253.48:7717/iii',
        category: 'panel',
      },
      {
        id: 'netcup_vps_200s',
        title: 'Netcup_VPS 200s',
        description: 'Netcup 200s VPS的1Panel管理系统，提供高性能服务器的Web应用和数据库管理功能。',
        shortDesc: 'VPS 200s管理面板。',
        url: 'http://152.89.105.4:7717/iii',
        category: 'panel',
      },
      {
        id: 'netcup_vps_mnz_panel',
        title: 'Netcup_VPS MNZ',
        description: 'Netcup MNZ VPS的1Panel控制面板，提供服务器应用部署和系统资源监控管理。',
        shortDesc: 'VPS MNZ管理面板。',
        url: 'http://152.53.194.166:7717/iii',
        category: 'panel',
      },
      {
        id: 'racknerd_flashsale',
        title: 'Racknerd Flashsale 4',
        description: 'Racknerd特价VPS的1Panel管理界面，提供高性价比服务器的应用部署和管理功能。',
        shortDesc: 'Racknerd VPS面板。',
        url: 'http://74.48.31.84:7717/iii',
        category: 'panel',
      },
      {
        id: 'ssh_web',
        title: 'SSH_Web',
        description: '基于Web的SSH终端工具，提供浏览器内的服务器命令行访问，支持多会话管理和文件传输。',
        shortDesc: 'Web SSH终端。',
        url: 'http://46.38.253.48:8083/',
        category: 'panel',
      },
      {
        id: 'sublinkx',
        title: 'SubLinkX',
        description: '订阅链接管理工具，提供VPN和代理服务的订阅链接转换、节点管理和连接优化功能。',
        shortDesc: '订阅链接管理。',
        url: 'https://sub.003456.xyz/#/dashboard',
        category: 'panel',
      },
      {
        id: 'wallos_panel',
        title: 'Wallos',
        description: '订阅提醒管理系统，帮助跟踪和管理各种订阅服务，提供到期提醒和费用统计功能。',
        shortDesc: '订阅提醒系统。',
        url: 'https://subrmnd.akaye.de',
        category: 'panel',
      },
      
      // 自动化工具分类
      {
        id: 'moviepilot_anime',
        title: '动画转移MP-v2',
        description: 'MoviePilot动画版本，专门用于动画资源的自动化下载、重命名和媒体库整理，支持多平台同步。',
        shortDesc: '动画自动化工具。',
        url: 'https://ikuyo.de/mp-v2',
        category: 'automation',
      },
      {
        id: 'moviepilot_seeding',
        title: '刷流MP',
        description: '专用于PT站点刷流的MoviePilot实例，提供自动化种子管理和上传数据优化功能。',
        shortDesc: 'PT刷流工具。',
        url: 'http://46.38.253.48:3100/',
        category: 'automation',
      },
      {
        id: 'home_moviepilot',
        title: 'HOME_MoviePilot',
        description: '本地部署的MoviePilot媒体自动化平台，提供电影电视剧的自动下载、整理和媒体库管理功能。',
        shortDesc: '媒体自动化平台。',
        url: 'http://kawaii-bak.akaye.de:3100',
        category: 'automation',
      },
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

