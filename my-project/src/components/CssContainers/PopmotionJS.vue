<template>
<body>
  <div class="pen">
    <Box class="box">
      <h1 id="elem"></h1>
      <!-- <div id="elem">0 : 0</div> -->
      <h3>hold</h3>
    </Box>
  </div>
</body>
</template>

<script>
import posed from "vue-pose";
export default {
  components: {
    Box: posed.div({
      draggable: true,
      init: { scale: 1 },
      drag: { scale: 1.2 },
      dragEnd: {
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300 }
      }
    })
  },
  // координаты мыши
  mounted() {
    var elem = document.getElementById("elem");
    document.addEventListener("mousemove", function(event) {
      elem.innerHTML = event.clientX + " : " + event.clientY;
    });
  }
};
</script>

<style scoped>
body {
  --pink: #ff1c68;
  --green: #14d790;
  --blue: #198fe3;
  --black: #21282d;
  color: #222;
  font-family: "PT Sans", sans-serif;
  height: 100vh;
  /* padding: 0;
  margin: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  flex-direction: column;
}
#elem {
  font-size: 20px;
}
</style>
