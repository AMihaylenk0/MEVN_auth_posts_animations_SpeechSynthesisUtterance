<template>
  <div id="container"></div>
</template>
<script>

export default {
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
    }
  },
  methods: {
    init() {
      this.scene = new THREE.Scene()

      {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      this.scene.add(light);
      }
      
      this.camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000)

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      let container = document.getElementById("container")/* !!! */
      container.appendChild(this.renderer.domElement)/* !!! */

      
      window.addEventListener('resize', ()=> {
        let width = window.innerWidth
        let height = window.innerHeight
        this.renderer.setSize(width, height)
        this.camera.aspect = width/height
        this.camera.updateProjectionMatrix()
      })
  
      const geometry = new THREE.BoxGeometry(4, 1, 1)
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
      this.cube = new THREE.Mesh(geometry, material)
      this.scene.add(this.cube)

      this.camera.position.z = 5
      
    
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.cube.rotation.x += 0.2
      this.cube.rotation.y += 0.2

      this.renderer.render(this.scene, this.camera)
    },
    
  },
  mounted() {
    this.init()
    this.animate()

    setTimeout(() => {
    let canvas = document.getElementsByTagName("canvas")
    console.log(canvas)
    canvas.parentNode.removeChild(canvas)
    },10000)
  },
  updated() {
   
  },
  
}
</script>