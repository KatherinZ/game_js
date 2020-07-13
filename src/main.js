

import Paddle from 'src/paddle'

let canvas = document.getElementById('field')
let ctx = canvas.getContext('2d')

const fieldWidth = 800
const fieldHeight = 600


ctx.clearRect(0, 0, fieldWidth, fieldHeight)

let paddle = new Paddle(fieldWidth, fieldHeight)


paddle.draw(ctx)
let lastTime = 0

function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime
  lastTime = timestamp


  ctx.clearRect(0, 0, 800, 600)
paddle.update(deltaTime)
paddle.draw(ctx)

requestAnimationFrame(gameLoop)
}
