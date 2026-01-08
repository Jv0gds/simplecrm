// src/pages/Login.js
import { loginUser } from '../api/auth.js';

// 新增 onClose 参数，用于处理点击 X 号
export function renderLoginModal(container, onLoginSuccess, onClose) {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  overlay.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" title="Close & Browse as Visitor">&times;</span>
      <h2>Welcome</h2>
      <p style="margin-bottom: 15px; color: #666; font-size: 0.9em;">Please log in or close to browse as visitor.</p>
      
      <form id="loginForm">
        <input type="text" id="username" placeholder="Username" value="admin" required />
        <input type="password" id="password" placeholder="Password" value="123456" required />
        <button type="submit">Log In</button>
      </form>
      <div id="message"></div>
    </div>
  `;

  // 绑定关闭事件 (游客模式)
  overlay.querySelector('.close-btn').addEventListener('click', () => {
    container.removeChild(overlay); // 移除弹窗
    if (onClose) onClose(); // 触发回调
  });

  // 绑定登录事件
  const form = overlay.querySelector('#loginForm');
  const messageDiv = overlay.querySelector('#message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageDiv.innerHTML = 'Verifying...';
    
    const result = await loginUser(form.username.value, form.password.value);

    if (result.success) {
      messageDiv.innerHTML = 'Success!';
      messageDiv.style.color = 'green';
      setTimeout(() => {
        container.removeChild(overlay); // 移除弹窗
        if (onLoginSuccess) onLoginSuccess(result.user);
      }, 500);
    } else {
      messageDiv.innerHTML = result.error;
      messageDiv.className = 'error';
    }
  });

  container.appendChild(overlay);
}