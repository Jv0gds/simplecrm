// src/components/Sidebar.js

export function renderSidebar(currentUserRole) {
  // 可以在这里根据 role 动态隐藏某些菜单，但“Public Catalog”对所有人开放
  return `
    <div class="sidebar">
      <div class="logo">Simple CRM</div>
      <nav>
        <ul id="navLinks">
          <li><a href="#" data-page="home">🏠 Dashboard (工作台)</a></li>
          
          <li><a href="#" data-page="catalog">🌏 Public Catalog (公共目录)</a></li>
          
          <li><a href="#" data-page="leads">🎯 Leads (线索)</a></li>
          <li><a href="#" data-page="pipeline">🚀 Pipeline (商机)</a></li>
          <li><a href="#" data-page="contacts">👥 Contacts (客户)</a></li>
          
          <li><a href="#" data-page="admin">⚙️ Admin (管理)</a></li>
        </ul>
      </nav>
      <div class="user-info">
        <div style="font-size:0.8rem; opacity:0.7;">Logged in as:</div>
        <div style="font-weight:bold; margin-bottom:5px;">${currentUserRole || 'User'}</div>
        <button id="logoutBtn" style="background:#c0392b; width:100%; font-size:0.8rem;">Logout</button>
      </div>
    </div>
  `;
}