const buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('click', () => {
  const username = prompt('請輸入使用者名稱');
  const password = prompt('請輸入密碼');

  if (username && password) {
    alert(`感謝您購買 Merci+ 折疊式自行車拖車，${username}！`);
  } else {
    alert('請輸入有效的使用者名稱和密碼。');
  }
});

// 註冊表單和登入表單的 submit 事件綁定對應的處理函式
registerForm.addEventListener("submit", handleRegister);
loginForm.addEventListener("submit", handleLogin);

// 獲取購買按鈕
const buyButton = document.getElementById("buy-button");

// 購買按鈕的 click 事件綁定對應的處理函式
buyButton.addEventListener("click", handleBuy);
