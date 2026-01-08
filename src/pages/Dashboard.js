// src/pages/Dashboard.js 
// src/pages/Dashboard.js
import { renderSidebar } from '../components/Sidebar.js';
import { renderCatalog } from './Catalog.js';

export function renderDashboard(container, currentUser, onLoginRequest) {
  // 1) 渲染侧边栏（返回的是 HTML 字符串），并创建主内容区
  const sidebarHtml = renderSidebar(currentUser ? currentUser.role : null);

  container.innerHTML = `
    <div class="dashboard-layout">
      ${sidebarHtml}
      <main id="mainContent" class="main-content"></main>
    </div>
  `;

  // 2) 导航链接绑定（使用容器范围内的查询，保证元素已存在）
  const navLinks = container.querySelectorAll('#navLinks a[data-page]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
    });
  });

  // 3) 安全地绑定注销事件：优先在容器范围查找，避免 null.addEventListener 抛错
  const logoutBtn = container.querySelector('#logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      // 刷新页面以触发 init 流程（会回到登录或游客视图）
      window.location.reload();
    });
  } else {
    console.warn('[renderDashboard] logoutBtn 未找到，无法绑定注销事件。');
  }

  // 4) 页面加载器（可扩展更多页面）
  function loadPage(page) {
    const main = container.querySelector('#mainContent');
    switch (page) {
      case 'home':
        main.innerHTML = renderHome(currentUser);
        break;
      case 'catalog':
        // 渲染现有的 Catalog 模块，传入 onLoginRequest 和 currentUser
        renderCatalog(main, onLoginRequest || (() => {}), currentUser);
        break;
      default:
        main.innerHTML = `<h2>${page}</h2><p>尚未实现的页面。</p>`;
    }
  }

  // 5) 默认打开 Home
  loadPage('home');
}

function renderHome(user) {
  return `
    <div class="dashboard-home" style="padding:1.5rem;">
      <h1>Welcome ${user ? user.login : 'Guest'}</h1>
      <p style="color:#666;">Use the sidebar to navigate the app.</p>
    </div>
  `;
}