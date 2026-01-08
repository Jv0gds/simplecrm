// src/pages/Catalog.js
import { PUBLIC_ITEMS } from '../api/mockData.js';

// 新增参数: currentUser (如果是 null，说明是游客)
export function renderCatalog(container, onLoginRequest, currentUser = null) {
  let items = [...PUBLIC_ITEMS];

  function renderList(data) {
    const listHtml = data.map(item => `
      <div class="item-card" data-id="${item.id}">
        <h3>${item.title}</h3>
        <div>
          <span class="tag">${item.category}</span>
          <span class="tag" style="background:#eee; color:#666;">${item.status}</span>
        </div>
      </div>
    `).join('');

    // 判断是否显示登录按钮
    const loginBtnStyle = currentUser ? 'display:none' : 'display:block';
    // 头部标题根据身份变化
    const headerTitle = currentUser 
      ? `Internal View <small>(${currentUser.role})</small>` 
      : `Public Catalog`;

    container.innerHTML = `
      <header class="catalog-header">
        <h2 style="margin:0; font-size:1.5rem; color:#2c3e50;">Simple CRM <small style="font-size:0.9rem; color:#777; font-weight:normal;">${headerTitle}</small></h2>
        <button id="loginBtn" style="${loginBtnStyle}">Login / Sign up</button>
      </header>

      <div class="catalog-container">
        ${currentUser ? '<div style="margin-bottom:10px; color:#27ae60;">✅ You have full access to view details.</div>' : ''}
        
        <input type="text" class="search-bar" placeholder="🔍 Search public records..." id="searchInput" />
        <div id="listContent">${listHtml}</div>
      </div>
      
      <div id="detailContainer"></div>
    `;

    // 只有游客模式才绑定登录按钮事件
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn && !currentUser) {
      loginBtn.addEventListener('click', onLoginRequest);
    }

    // 搜索逻辑
    document.getElementById('searchInput').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = PUBLIC_ITEMS.filter(i => 
        i.title.toLowerCase().includes(term) || 
        i.description.toLowerCase().includes(term)
      );
      // 重新渲染列表部分 (简化版，实际开发建议拆分 renderItems 函数以避免全量重绘)
      document.getElementById('listContent').innerHTML = filtered.map(item => `
        <div class="item-card" data-id="${item.id}">
          <h3>${item.title}</h3>
          <div><span class="tag">${item.category}</span></div>
        </div>
      `).join('');
      attachClickEvents();
    });

    attachClickEvents();
  }

  function attachClickEvents() {
    container.querySelectorAll('.item-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        const item = PUBLIC_ITEMS.find(i => i.id === id);
        showDetail(item);
      });
    });
  }

  function showDetail(item) {
    // 详情页逻辑：如果是登录用户，可以看到更多操作按钮
    const extraActions = currentUser 
      ? `<button class="action-btn" style="background:#28a745;">✏️ Edit Record</button> <button class="action-btn" style="background:#17a2b8;">💬 Internal Note</button>`
      : `<button class="action-btn" onclick="alert('Report submitted.')">🚩 Report Content</button> <button class="action-btn" style="background:#007bff; margin-left:10px;" onclick="alert('Request sent.')">🔒 Request Access</button>`;

    const notice = currentUser 
      ? `<div style="margin-top:30px; padding:15px; background:#d4edda; border:1px solid #c3e6cb; border-radius:4px; color:#155724;"><strong>Internal Access:</strong> You are viewing this record as <b>${currentUser.role}</b>.</div>`
      : `<div style="margin-top:30px; padding:15px; background:#fff3cd; border:1px solid #ffeeba; border-radius:4px; color:#856404;"><strong>Visitor Notice:</strong> You are viewing this as a guest.</div>`;

    container.innerHTML = `
      <div class="catalog-container" style="padding-top: 1rem;">
        <button id="backBtn" style="margin-bottom:20px; padding: 8px 16px; cursor:pointer;">&larr; Back to List</button>
        <div style="background:white; padding:2rem; border-radius:8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <h1 style="margin-top:0;">${item.title}</h1>
          <p><strong>Category:</strong> <span class="tag">${item.category}</span></p>
          <p><strong>Status:</strong> ${item.status}</p>
          <hr style="border:0; border-top:1px solid #eee; margin: 20px 0;"/>
          <p style="line-height: 1.6; color: #555;">${item.description}</p>
          
          ${notice}
          
          <div style="margin-top: 15px;">
            ${extraActions}
          </div>
        </div>
      </div>
    `;
    // 保持 logged-in 状态传递回去
    document.getElementById('backBtn').addEventListener('click', () => renderCatalog(container, onLoginRequest, currentUser));
  }

  renderList(items);
}