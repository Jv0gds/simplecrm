// src/main.js
import './styles/main.css';
import { renderLoginModal } from './pages/Login.js';
import { renderCatalog } from './pages/Catalog.js';
import { renderDashboard } from './pages/Dashboard.js';

const app = document.querySelector('#app');
let currentUser = null;

function init() {
  // 默认游客视图 (不传 currentUser)
  renderCatalog(app, showLoginModal, null);
  showLoginModal();
}

function showLoginModal() {
  if (currentUser) return;

  renderLoginModal(
    document.body,
    (user) => {
      currentUser = user;
      navigateToDashboard();
    },
    () => {
      console.log('User chose Visitor mode');
    }
  );
}

function navigateToDashboard() {
  app.innerHTML = '';
  // 关键修改：把 currentUser 传给 Dashboard
  renderDashboard(app, currentUser);
}

init();