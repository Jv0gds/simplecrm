// src/pages/Login.js
import { loginUser } from '../api/auth.js'; // 引入之前写的API函数

export function renderLogin(container) {
  // 1. 渲染 HTML 模板
  container.innerHTML = `
    <div class="login-container">
      <h2>CRM Login</h2>
      <form id="loginForm">
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <div id="message"></div>
    </div>
  `;

  // 2. 绑定事件
  const form = container.querySelector('#loginForm');
  const messageDiv = container.querySelector('#message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // 阻止表单默认刷新行为
    
    const username = form.username.value;
    const password = form.password.value;
    
    messageDiv.innerHTML = 'Logging in...';
    messageDiv.className = '';

    // 调用 API
    const result = await loginUser(username, password);

    if (result.success) {
      messageDiv.innerHTML = 'Login Successful! Redirecting...';
      messageDiv.style.color = 'green';
      
      // TODO: 这里以后会跳转到 Dashboard
      setTimeout(() => {
        alert("登录成功！下一步我们将制作 Dashboard 页面。");
      }, 500);
    } else {
      messageDiv.innerHTML = `Error: ${result.error}`;
      messageDiv.className = 'error';
    }
  });
}