// src/api/auth.js

// 这是一个纯模拟的登录函数，不再发送任何请求给 estia.fr
export async function loginUser(login, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟登录成功
      if (login && password) {
        console.log(`User ${login} logged in successfully (Simulation).`);
        resolve({ 
          success: true, 
          user: { login, role: 'sales_rep' } // 默认模拟为销售代表
        });
      } else {
        resolve({ success: false, error: 'Username and password are required' });
      }
    }, 800); // 假装加载了 0.8 秒
  });
}