


const birdRadius = 10
const birdStartX = canvas.width - 90;
const birdStartY = 200;
const birdGoingX = -2;
const birdGoingY = 0;

const Birdy = {
  draw(){
    ctx.beginPath();
    ctx.arc(birdStartX, birdStartY, birdRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.closePath();
  }
}

module.exports = Birdy;
