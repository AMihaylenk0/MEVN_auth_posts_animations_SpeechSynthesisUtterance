<template>
<body>
    <div class="words words-1">
        <span>S</span>
        <span>H</span>
        <span>O</span>
        <span>W</span>
        </div>
        <div class="words words-1">
        <span>A</span>
        <span>N</span>
        <span>D</span>
        </div>
        <div class="words words-1">
        <span>T</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        </div>
       
</body>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'https://fonts.googleapis.com/css?family=Rubik+Mono+One';

body {
    display: flex;
  background: #444;
  font-family: 'Rubik Mono One', sans-serif;
  padding: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.words {
  color: #444;
  font-size: 0;
  line-height: 1;
  span {
    font-size: 120px;
    display: inline-block;
    animation: move 2s ease-in-out infinite;
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1.0s; }
    &:nth-child(4) { animation-delay: 1.5s; }
  }
}

@keyframes move {
  0% {
    transform: translate(-33%, 0);
  }
  50% {
    text-shadow: 0 15px 40px rgba(black, 0.6);
  }
  100% {
    transform: translate(33%, 0);
  }
}

* {
  box-sizing: border-box;
}

</style>
