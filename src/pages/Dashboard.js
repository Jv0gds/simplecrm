// src/pages/Dashboard.js
import { renderSidebar } from '../components/Sidebar.js';
import { renderCatalog } from './Catalog.js'; // 复用目录页

export function renderDashboard(container, currentUser) {
  // 1. 渲染整体布局 (Sidebar + Empty Main Content)
  container.innerHTML = `
    <div class="dashboard-layout">
      ${renderSidebar(currentUser.role)}
      <main class="main-content" id="mainContent">
        </main>
    </div>
  `;

  const mainContent = document.getElementById('mainContent');

  // 2. 定义页面加载逻辑
  function loadPage(pageName) {
    mainContent.innerHTML = ''; // 清空当前内容

    switch (pageName) {
      case 'home':
        renderHome(mainContent, currentUser);
        break;
      case 'catalog':
        // 复用 Catalog 组件，但传入 currentUser，这样它就知道隐藏登录按钮
        renderCatalog(mainContent, null, currentUser);
        break;
      case 'leads':
        mainContent.innerHTML = '<h2>🎯 Leads Management</h2><p>Coming soon...</p>';
        break;
      case 'pipeline':
        mainContent.innerHTML = '<h2>🚀 Sales Pipeline</h2><p>Coming soon...</p>';
        break;
      case 'admin':
        if (currentUser.role === 'admin') {
           mainContent.innerHTML = '<h2>⚙️ Admin Panel</h2><p>User management goes here.</p>';
        } else {
           mainContent.innerHTML = '<h2 style="color:red">⛔ Access Denied</h2><p>You do not have permission to view this page.</p>';
        }
        break;
      default:
        renderHome(mainContent, currentUser);
    }
  }

  // 3. 绑定侧边栏点击事件
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 阻止链接默认跳转
      const page = e.target.dataset.page;
      loadPage(page);
    });
  });

  // 4. 绑定注销事件
  document.getElementById('logoutBtn').addEventListener('click', () => {
    // 简单刷新页面来注销 (或者调用回调清理状态)
    window.location.reload();
  });

  // 5. 默认加载 Home
  loadPage('home');
}

// 内部小组件：Dashboard 首页
function renderHome(container, user) {
  container.innerHTML = `
    <header>
      <h1>Welcome back, ${user.login}!</h1>
      <p style="color:#666;">Role: <span class="tag">${user.role}</span></p>
    </header>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
      <div class="card">
        <h3>My Leads</h3>
        <p style="font-size: 2rem; font-weight: bold; color: #007bff;">12</p>
      </div>
      <div class="card">
        <h3>Open Tasks</h3>
        <p style="font-size: 2rem; font-weight: bold; color: #28a745;">5</p>
      </div>
      <div class="card">
        <h3>Pipeline Value</h3>
        <p style="font-size: 2rem; font-weight: bold; color: #ffc107;">$45k</p>
      </div>
    </div>

    <div class="card">
      <h3>Recent Activity</h3>
      <ul style="padding-left: 20px; color: #555;">
        <li>Logged in successfully.</li>
        <li>Checked public catalog.</li>
      </ul>
    </div>
  `;
}