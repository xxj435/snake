// 自调用函数, 开启一个新的局部作用域, 防止命名冲突

(function() {
  function Snake(options) {
    options = options || {};
    // 蛇节 的大小
    this.width = options.width || 20;
    this.height = options.height || 20;
    // 蛇移动的方向
    this.direction = options.direction || 'right';
    // 蛇的身体 (很多蛇节)  第一个元素是蛇头
    this.body = [
      {
        x: 3,
        y: 2,
        color: 'red'
      },
      {
        x: 2,
        y: 2,
        color: 'green'
      },
      {
        x: 1,
        y: 2,
        color: 'green'
      }
    ];
  }

  Snake.prototype.render = function(map) {
    // 把每一个蛇节渲染到地图上
    for(let i = 0, len = this.body.length; i < len; i++) {
      // 蛇节
      let object = this.body[i];
      
      let div = document.createElement('div');
      map.appendChild(div);
      // 设置样式
      div.style.position = 'absolute';
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = object.x * this.width + 'px';
      div.style.top = object.y * this.height + 'px';
      div.style.backgroundColor = object.color;
    }
  }
  // 暴露
  window.Snake = Snake;
})()

// let map = document.querySelector('#map');
let snake = new Snake();
snake.render(map);
