<template>
<body>
    <canvas id="draw" width="800" height="800"></canvas>
  <!-- <h1>lul</h1> -->
</body>
  
</template>

<script>
export default {
mounted(){
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#f07';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'overlay';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

   let draw = e => {
      if (!isDrawing) return;

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

      hue++;
      if (hue > 360) hue = 0;

      if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      if (direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    canvas.addEventListener('mousedown', e => {
      [lastX, lastY] = [e.offsetX, e.offsetY];
      isDrawing = true;
      console.log("lul")
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100');
    body {
      background: linear-gradient(to bottom, #222, #111);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    body:before {
      z-index: 2;
      pointer-events: none;
      mix-blend-mode: multiply;
      opacity: .5;
      font-family: 'Roboto Mono', monospace;
      content: "canvas";
      color: #000;
      font-size: 20vw;
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
    }
</style>