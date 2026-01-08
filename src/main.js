// src/main.js
import './styles/main.css';
import { renderLogin } from './pages/Login.js';

// 获取页面上的主容器
const app = document.querySelector('#app');

// 初始化：默认显示登录页
renderLogin(app);