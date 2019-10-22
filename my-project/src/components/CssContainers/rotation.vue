<template>
<body>
    <div  @mousemove="mouseMoved">
        <div class="container center" :style="rotation">
            <img class="image" src="https://www.dropbox.com/s/b0h57o6sxznnowy/drone-00.webp?raw=1">
            <h1 class="title">Dr.one</h1>
            <div class="card">
            <p>
                Chupa chups lollipop jelly cake icing wafer chocolate lollipop candy canes. Marzipan dragée biscuit cotton candy sweet roll sugar plum. Toffee sweet jelly beans cake gummies gummies jujubes cotton candy sugar plum.</p>
            </div>
        </div>
    </div>
</body>
</template>

<script>
export default {
data(){
    return{
        rotX: 0,
        rotY: 0
    }
},
 methods: {
    mouseMoved (e) {
       // This gives us a number between -1 and 1
       const mousePercX = (e.pageX / document.body.clientWidth) * 2 - 1
       const mousePercY = (e.pageY / document.body.clientHeight) * 2 - 1
      
      TweenLite.to(this, 0.5, {
        rotX: mousePercX * 500,
        rotY: mousePercY * -500
      })
    }
  },
  computed: {
    rotation () {
      return {
        transform: `perspective(1000px) rotateY(${this.rotX}deg) rotateX(${this.rotY}deg)`
      }
    }
  }
   
}
</script>

<style scoped>
body {
  height: 100vh;     
  background-color: #36B5B2;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  margin-top: 40px;
  transform-origin: 50%;
  transform-style: preserve-3d;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  transform: translateZ(-100px);
}

.title {
  position: absolute;
  top: 150px;
  text-align: center;
  color: white;
  font-size: 80px;
  font-family: Helvetica, Arial, Sans-Serif;
  transform: translateZ(20px);
}

.card {
  position: absolute;
  background-color: white;
  bottom: -20px;
  padding: 20px;
  width: 400px;
  height: 100px;
  transform: translateZ(100px);
}

</style>
