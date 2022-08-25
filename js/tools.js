let Tools = {
  getRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }
}

// Math.floor的意思 向下取整   1.9 -> 1
// Math.random的意思 随机生成 0 ~ 1的随机数
