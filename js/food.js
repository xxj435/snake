// 自执行函数
(function(){
  // 局部作用域
  // 记录上一次创建的食物  为删除做准备
let elements = [];

// 食物构造函数
function Food(options){
  options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.color = options.color || 'red';
}


// 注册渲染实例方法
Food.prototype.render = function(map) {
  // 删除之前创建的好吃的
  remove();

  //随机设置x和y的值
  this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width; // x轴的偏移
  this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height; // y轴的偏移
  // 创建动态食物
  let div = document.createElement('div');
  // 插入地图中
  map.appendChild(div);

  elements.push(div);

  div.style.position = 'absolute';
  div.style.left = this.x + 'px';
  div.style.top = this.y + 'px';
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.color;
}

// 删除食物
function remove() {
  for(let i = elements.length - 1; i >= 0; i--) {
    // 删除div
    elements[i].parentNode.removeChild(elements[i]);
    // 删除数组中的元素
    // 删除数组元素
    // 第一个参数, 从那个元素开始删除
    // 第二个参数, 删几个
    elements.splice(i, 1);
  }
}
// Food构造函数, 让外部可以访问
window.Food = Food;
})()


// 获取地图
let map = document.querySelector('#map');
// console.log(map);
let food = new Food();
food.render(map);
