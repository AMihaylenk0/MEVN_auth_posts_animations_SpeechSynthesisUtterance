<template>
   <body>
    <div class="perspective-text">
        <div class="perspective-line">
            <p></p>
            <p>Pure CSS</p>
        </div>
        <div class="perspective-line">
            <p>Pure CSS</p>
            <p>Perspective</p>
        </div>
        <div class="perspective-line">
            <p>Perspective</p>
            <p>Text Effect</p>
        </div>
        <div class="perspective-line">
            <p>Text Effect</p>
            <p>Tutorial</p>
        </div>
        <div class="perspective-line">
            <p>Tutorial</p>
            <p></p>
        </div>
    </div>
  </body>
</template>

<script>
export default {

}
</script>

<style scoped>
body{
    display: flex;
    justify-content: center;
  align-items: center;
  
}
.perspective-text {
    
  color: red;
  font-family: 'Bangers', cursive;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 20px;
  text-transform: uppercase;
  margin-bottom: 50px;
}
.perspective-line {
  height: 50px;
  overflow: hidden;
  position: relative;
  margin: 5px;
}
p {
  margin: 0;
  height: 50px;
  line-height: 50px;
  transition: all 0.5s ease-in-out;
}
.perspective-line:nth-child(odd) {
  transform: skew(60deg, -30deg) scaleY(0.667);
}
.perspective-line:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.333);
}
.perspective-line {
  position: relative;
}
.perspective-text:hover p{
  transform: translate(0, -50px);
}
.perspective-line:nth-child(1) {
  left: 10px;
}
.perspective-line:nth-child(2) {
  left: 20px;
}
.perspective-line:nth-child(3) {
  left: 30px;
}
.perspective-line:nth-child(4) {
  left: 50px;
}
.perspective-line:nth-child(5) {
  left: 80px;
}

</style>
