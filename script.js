// 儲存使用者帳號和密碼的物件
const users = {};

// 註冊表單提交時的處理函式
function handleRegister(event) {
  event.preventDefault(); // 防止表單提交導致網頁重新載入

  // 獲取表單欄位的值
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 檢查使用者名稱是否已被註冊
  if (username in users) {
    alert("使用者名稱已被註冊");
    return;
  }

  // 將新使用者添加到 users 物件中
  users[username] = password;

  // 重設表單
  event.target.reset();
}

// 登入表單提交時的處理函式
function handleLogin(event) {
  event.preventDefault(); // 防止表單提交導致網頁重新載入

  // 獲取表單欄位的值
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 檢查使用者名稱和密碼是否正確
  if (!(username in users) || users[username] !== password) {
    alert("使用者名稱或密碼錯誤");
    return;
  }

  // 登入成功，可以進行購物操作，這裡可以添加其他功能

  // 重設表單
  event.target.reset();
}

// 購買按鈕點擊時的處理函式
function handleBuy(event) {
  event.preventDefault(); // 防止表單提交導致網頁重新載入

  // 獲取表單欄位的值，可以根據需要添加更多欄位
  const quantity = document.getElementById("quantity").value;

  // 處理購買操作，這裡可以添加其他功能

  // 重設表單
  event.target.reset();
}

// 獲取註冊表單和登入表單
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

// 註冊表單和登入表單的 submit 事件綁定對應的處理函式
registerForm.addEventListener("submit", handleRegister);
loginForm.addEventListener("submit", handleLogin);

// 獲取購買按鈕
const buyButton = document.getElementById("buy-button");

// 購買按鈕的 click 事件綁定對應的處理函式
buyButton.addEventListener("click", handleBuy);
