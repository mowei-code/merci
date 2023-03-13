// 获取所有需要用到的 HTML 元素
const quantityInput = document.querySelector('#quantity');
const colorSelect = document.querySelector('#color');
const addCartBtn = document.querySelector('#add-to-cart');
const totalSpan = document.querySelector('#total');

// 定义单价和颜色对应的价格
const price = {
  'red': 1200,
  'blue': 1300,
  'green': 1400,
  'yellow': 1500,
};

// 初始化数量和颜色
let quantity = 1;
let color = colorSelect.value;

// 计算总价
function calculateTotal() {
  const totalPrice = price[color] * quantity;
  totalSpan.textContent = `Total: ${totalPrice} NTD`;
}

// 更新数量
quantityInput.addEventListener('change', (event) => {
  quantity = event.target.value;
  calculateTotal();
});

// 更新颜色
colorSelect.addEventListener('change', (event) => {
  color = event.target.value;
  calculateTotal();
});

// 添加到购物车
addCartBtn.addEventListener('click', () => {
  alert(`Added ${quantity} ${color} Merci+ to cart.`);
});
