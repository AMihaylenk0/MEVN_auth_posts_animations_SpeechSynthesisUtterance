<template>
<div>
   <div class="lul">    
        <h2>Login</h2>    
        <form v-on:submit="login">    
            <input type="text" name="email" v-model="email" placeholder="Email" /><br>    
            <input type="password" name="password" v-model="password" placeholder="Password"/><br>    
            <input type="submit" value="Login" />    
        </form>
        <div class="auth-buttons">
            <a href="http://localhost:5000/users/auth/twitch" class="btns"  target="_blank">TWITCH</a>
            <a href="http://localhost:5000/users/auth/google" class="btns" target="_blank">GOOGLE</a>
        </div> 
   </div>
   <div id="container"></div>
</div>
</template>

<script>
import axios from "axios"    
export default {
    data(){
        return{
           email: null,
           password: null
        }
    },
     methods: {    
        login(e) {    
            e.preventDefault()    
            let email = this.email
            let password = this.password
            // console.log(email,password)
            let login = () => {    
                let data = {    
                    email: email,    
                    password: password    
                }    
                axios.post("http://localhost:5000/users/login", data, {withCredentials: true})    
                    .then((response) => {    
                        console.log("Logged in")    
                        this.$router.push("/dashboard")  
                    })    
                    .catch((errors) => {    
                        console.log("Cannot log in")    
                    })    
            }    
            login()    
        }    
    },
    mounted() {
        // Scene
        let scene = new THREE.Scene()
        // Camera
        let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.z = 2;
        // Renderer
        let renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor("#e5e5e5");
        renderer.setSize(window.innerWidth,window.innerHeight);

        let container = document.getElementById("container")/* !!! */
        container.appendChild(renderer.domElement)/* !!! */

        // console.log(container)
        // document.body.append(renderer.domElement); /* !!! *//* !!! */

        // CSS styles
        document.querySelector('canvas').style.cssText= "position: absolute;top:0;left:0;width:100%"
        // Resize
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        })

         let raycaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();


        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});

        // let mesh
        // let  meshX = -10;
        for(let i = 0; i<20;i++) {
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 10;
            mesh.position.y = (Math.random() - 0.5) * 10;
            mesh.position.z = (Math.random() - 0.5) * 10;
            scene.add(mesh);
            // meshX+=1;
             let tl = new TimelineMax();
            tl.to(mesh.scale, 1, {x: 2, ease: Expo.easeOut})
            tl.to(mesh.scale, .5, {x: .5, ease: Expo.easeOut})
            tl.to(mesh.position, .5, {x: 2, ease: Expo.easeOut})
            tl.to(mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
        
        // Light
        let light = new THREE.PointLight(0xFFFFFF, 1, 500)
        light.position.set(10,20,25);
        scene.add(light);
      
        render()
        }   
        function render() {
        requestAnimationFrame(render);

        // mesh.rotation.x += 0.05
        renderer.render(scene, camera);
        }

         function onMouseMove(event) {
            event.preventDefault();

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            var intersects = raycaster.intersectObjects(scene.children, true);
            for (let i = 0; i < intersects.length; i++) {
                this.tl = new TimelineMax();
                this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.position, .5, {x: (Math.random() - 0.5) * 10, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.position, .5, {y: (Math.random() - 0.5) * 10, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
            }
        }
        
        window.addEventListener('mousemove', onMouseMove);

    },    
}
</script>

<style scoped>

.lul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-color: #B2AA8E;
    font-family: 'Lato', Arial, sans-serif;
    color: black;
}
input{
    border: 2px solid red;
    border-radius: 4px;
    margin: 10px;
    text-align: center;
    outline: none;
    background: white;
}
::placeholder{
    color: black;
}
input[type=submit]{
    padding: 10px 600px;
    cursor: pointer;
}

.auth-buttons,h2,form{
   /* display: flex; */
   /* align-self: center; */
   z-index: 20;
}
.btns{
    text-decoration: none;
    color: black;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    margin: 10px;
    z-index: 21;
}



  /* Удаление бэкграунда после автозаполнения */
  @-webkit-keyframes autofill {
  to {
    color: inherit;
    background: transparent;
  }
}

input:-webkit-autofill {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}

</style>