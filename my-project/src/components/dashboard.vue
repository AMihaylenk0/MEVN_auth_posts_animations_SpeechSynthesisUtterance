<template>
<div class="body">
    <div class="lul">    
        <h2>Dashboard</h2>    
        <p ref="p">Name: {{ user.name }}</p>    
        <p>Email: {{ user.email }}</p>   
        <button @click="logout">Logout</button> 
         <div ref="canvas" id="canvas"></div>
    </div>
    <canvas id="sandbox"></canvas>
</div>
</template>
<script>
    import axios from "axios"
    import Matter from "matter-js"    
    export default {    
        name: "Login",    
        data() {    
            return {    
                user: {    
                    name: "--UNKNOWN--"    
                } ,
               }    
        },    
        methods: {    
            getUserData() {    
                axios.get("http://localhost:5000/users/user",{ withCredentials: true } )    
                    .then((response) => {    
                        this.user = response.data.user 
                        console.log(response.data.user)  
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        this.$router.push("/")    
                    })    
            },
            logout(){
                 axios.get("http://localhost:5000/users/logout",{ withCredentials: true })
                 .then(() => {
                    this.$router.push("/")  
                    console.log('Logged out')
                })
                .catch((errors) => {    
                    console.log(errors)    
                    console.log('WTF')   
                })    
            }    
        },    
        mounted() {    
            this.getUserData()    
             const { canvas,p } = this.$refs
            // const timeline = new TimelineMax({
            // onComplete: () => timeline.restart()
            // }) 
           
            // Matter JS
            let Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;
            // create an engine
            let engine = Engine.create();
            // create a renderer    
            let render = Render.create({
                element: canvas,
                engine: engine,
              });
            // Css style
            document.querySelector('canvas').style.cssText= "position:absolute;top:0;left:0;width:100%;height:100vh"
            // create two boxes and a ground
            let boxA = Bodies.rectangle(400, 200, 80, 80);
            let boxB = Bodies.rectangle(450, 50, 80, 80);
            let ground = Bodies.rectangle(400, 610*0.8, 810, 60, { isStatic: true });
            // add all of the bodies to the world
            World.add(engine.world, [boxA, boxB, ground,p]);
            // run the engine
            Engine.run(engine);
            // run the renderer
            Render.run(render);

            // BALLS
            const canvas2 = document.getElementById('sandbox');
            canvas2.width = window.innerWidth;
            canvas2.height = window.innerHeight;

            const ctx = canvas2.getContext('2d');

            function Circle (x, y, r, c) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.c = c;
            
            this.dx = Math.floor(Math.random() * 100) + 1;
            this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            this.dy = Math.floor(Math.random() * 100) + 1;
            this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            
            this.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
            }
            
            this.animate = function () {
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x + this.r > canvas2.width || this.x - this.r < 0) {
            this.dx = -this.dx;
            }
            
            if (this.y + this.r > canvas2.height || this.y - this.r < 0) {
            this.dy = -this.dy;
            }
            
            this.draw();
            }
            }

            const balls = [];
            for (let i = 0; i < 20; i++) {
            let r = Math.floor(Math.random() * 30) + 10;
            let x = Math.random() * (canvas2.width - r * 2) + r;
            let y = Math.random() * (canvas2.height - r * 2) + r;
            let c = 'red';
            balls.push(new Circle(x, y, r, c));
            }
            /* Adding balls on click */
            canvas2.addEventListener('click', function (e) {
            let r = Math.floor(Math.random() * 30) + 15;
            balls.push(new Circle(e.clientX, e.clientY, r, 'blue'));
            });

            function Update () {
            ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            
            for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            ball.animate();
            }
            
            requestAnimationFrame(Update);
            }
            Update();

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
    font-family: 'Lato', Arial, sans-serif;
    color: white;
} 
h2{
    /* transform: rotate(25deg); */
    margin-bottom: 20px;
}
.box { 
  height: 60px; 
  width: 60px; 
  background: red; 
}
h2,p,button{
    z-index: 2;
    margin: 10px;
}
/* .canvas{
    width: 100%;
    height: 100vh;
} */
#sandbox{
    width: 100vw;
    height: 100vh;
}
.body{
    overflow: hidden;
}
</style>