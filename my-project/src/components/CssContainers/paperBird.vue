<template lang="pug">
   body
    #sky
        .bird
            - for (var i = 0; i < 10; i++)
                .wind
            .bird_body
                .bird_head
                .bird_wing_left
                    .bird_wing_left_top
                .bird_wing_right
                    .bird_wing_right_top
            .bird_tail_left
            .bird_tail_right
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@function randomColor() {
  @return rgba(random(100) + 100, random(100) + 100, random(55) + 200, 1);
}

body {
//   background: #eef;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
#sky {
  margin-top: -60px;
  perspective: 400px;
  filter: drop-shadow(0px 150px 10px rgba(0, 0, 0, 0.2));

  div {
    transform-style: preserve-3d;
  }
  .bird {
    animation: fly 10000ms linear infinite;

    .wind {
      position: absolute;
      left: 50%;
      width: 4px;
      height: 200px;
      margin-left: -2px;
      border-radius: 999px;
      overflow: hidden;

      @for $i from 1 through 11 {
        &:nth-child(#{$i}) {
          transform: translate3d(
              #{random(400) - 200}px,
              #{random(300) - 150}px,
              #{random(200) - 100}px
            )
            rotateY(90deg);

          &::before {
            content: "";
            position: absolute;
            width: 4px;
            height: 300px;
            background: rgba(100, 200, random(255), 0.3);
            border-radius: 999px;
            transform: translateY(-300px);
            animation: wind #{random(2000) + 1000}ms #{random(4000) + 1000}ms
              linear infinite;
          }
        }
      }
    }

    &_body {
      position: relative;
      width: 30px;
      height: 40px;
      background: randomColor();
    }
    &_head {
      position: absolute;
      top: -30px;
      border-right: 15px solid transparent;
      border-bottom: 30px solid randomColor();
      border-left: 15px solid transparent;
      transform-origin: 50% 100%;
      transform: rotateX(-20deg);
    }
    &_wing_left {
      position: absolute;
      left: -30px;
      height: 30px;
      border-right: 30px solid randomColor();
      border-bottom: 10px solid transparent;
      transform-origin: 100% 0;
      animation: wingLeft 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite
        alternate;

      &_top {
        position: absolute;
        left: -30px;
        border-right: 30px solid randomColor();
        border-bottom: 30px solid transparent;
        transform-origin: 100% 0;
        animation: wingLeft 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975)
          infinite alternate;
      }
    }
    &_wing_right {
      position: absolute;
      left: 30px;
      height: 30px;
      border-left: 30px solid randomColor();
      border-bottom: 10px solid transparent;
      transform-origin: 0 0;
      animation: wingRight 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite
        alternate;

      &_top {
        position: absolute;
        border-left: 30px solid randomColor();
        border-bottom: 30px solid transparent;
        transform-origin: 0 0;
        animation: wingRight 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975)
          infinite alternate;
      }
    }
    &_tail_left {
      position: absolute;
      top: 40px;
      border-right: 30px solid transparent;
      border-top: 40px solid randomColor();
      transform-origin: 50% 0;
      transform: rotateX(-20deg);
    }
    &_tail_right {
      position: absolute;
      top: 40px;
      border-left: 30px solid transparent;
      border-top: 40px solid randomColor();
      transform-origin: 50% 0;
      transform: rotateX(-20deg);
    }
  }
}

@keyframes fly {
  0% {
    transform: rotateX(-120deg) rotateZ(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateX(-120deg) rotateZ(360deg) rotateX(10deg);
  }
}
@keyframes wingLeft {
  0% {
    transform: rotateY(-40deg);
  }
  100% {
    transform: rotateY(40deg);
  }
}
@keyframes wingRight {
  0% {
    transform: rotateY(40deg);
  }
  100% {
    transform: rotateY(-40deg);
  }
}
@keyframes wind {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(200px);
  }
}

</style>
