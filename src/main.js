// src/main.js
import './styles/main.css';
import { renderLoginModal } from './pages/Login.js';
import { renderCatalog } from './pages/Catalog.js';
import { renderDashboard } from './pages/Dashboard.js';

const app = document.querySelector('#app');
let currentUser = null;

// 初始化流程
function init() {
  // 1. 核心修改：先检查 LocalStorage 是否有缓存的用户信息
  const savedUser = localStorage.getItem('currentUser');

  if (savedUser) {
    // A. 如果有存档，直接恢复身份，跳过登录页，进入 Dashboard
    currentUser = JSON.parse(savedUser);
    console.log('Restored session for:', currentUser.login);
    navigateToDashboard();
  } else {
    // B. 如果没存档（游客模式或首次访问），走正常流程
    renderCatalog(app, showLoginModal, null);
    showLoginModal();
  }
}

function showLoginModal() {
  // 如果已经登录（防止重复弹窗），直接返回
  if (currentUser) return;

  renderLoginModal(
    document.body,
    (user) => {
      // --- 登录成功回调 ---
      currentUser = user;
      // 核心修改：将用户信息存入浏览器永久存储
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigateToDashboard();
    },
    () => {
      // --- 关闭/游客模式回调 ---
      console.log('User chose Visitor mode');
      // 游客模式不存 LocalStorage，这样刷新后依然会重新弹窗
    }
  );
}

function navigateToDashboard() {
  app.innerHTML = '';
  // 渲染仪表盘
  renderDashboard(app, currentUser, showLoginModal);
}

// 启动应用
init();