<template>
<div class="body">
    <canvas id="sandbox"></canvas>
    <div class="lul">    
        <h2>Dashboard</h2>    
        <p>Name: {{ user.name }}</p>    
        <p>Email: {{ user.email }}</p>   
        <button @click="logout">Logout</button> 
    </div>
</div>
</template>
<script>
    import axios from "axios"
    // import Matter from "matter-js"    
    // import * as matterDom from "matter-dom-plugin"    
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
            // Matter.use('matter-dom-plugin');    
            this.getUserData()    
            //  const { canvas} = this.$refs
                   
            // Matter JS

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
            
            this.dx = Math.floor(Math.random() * 10) + 1;
            this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            this.dy = Math.floor(Math.random() * 10) + 1;
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
            const body = document.querySelector('body');
            body.addEventListener('click', function (e) {
            let r = Math.floor(Math.random() * 30) + 15;
            let rndColor = '#'+Math.floor(Math.random()*16777215).toString(16)
            balls.push(new Circle(e.clientX, e.clientY, r, rndColor));
            console.log('lul')
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
    color: black;
    position: absolute;
    left: 0; 
    top: 0;
    width: 100%;
    /* z-index: -1; */
    user-select: none;  /* Обведение текста */
} 
h2{
    margin-bottom: 20px;
}
h2,p,button{
    /* z-index: 2; */
    margin: 10px;
}
.body{
    /* overflow: hidden; */
    height: 100vh;
    background-color: yellow;
}
</style>