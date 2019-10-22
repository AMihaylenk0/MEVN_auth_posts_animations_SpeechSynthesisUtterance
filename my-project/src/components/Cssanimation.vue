<template>
<body>
  <!-- SIDEBAR -->
  <div class="sidebar-container">
    <div id="sidebar" :style="[showSideBar ? {'width': '70%'}: {'width': '0px'}]">
      <input v-model="query" id="input" 
        placeholder="Search..."
        autocomplete="off"
        >
      <ul>
        <li v-for="(item,index) in computedList" :key="index">
          <router-link :to="item.link" class="Links" >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <button @click="showSideBar=!showSideBar" title="Toggle sidebar"><span>CSS</span></button>
  </div>

<!-- CONTAINER WITH CONTAINERS -->
<div class="container">
    <TextAnimation class="x"/>
    <TextAnimation2 class="x"/>
    <TextAnimation3 class="y"/>
    <Mikey class="mikey"/>
    <SVGTextAnimation5 class="x"/>
    <HoverText class="x"/>
    <paperBird class="x"/>
    <TextAnimation6 class="x"/>
    <PopmotionJS class="x" />
    <div class="x"><h1 class=" h1">shake effect!</h1></div>  
    <CanvasDraw class="x"/>
    <!-- <SpiralText class="x"/> -->
    <div class="x">
    </div>
    <div class="x">
    </div>
</div>
</body>
</template>

<script>
import TextAnimation from './CssContainers/TextAnimation'
import TextAnimation2 from './CssContainers/TextAnimation2'
import TextAnimation3 from './CssContainers/TextAnimation3'
import Cards from './CssContainers/Cards'
import Mikey from './CssContainers/Mikey'
import anim1 from './CssContainers/anim1'
import TextAnimation4 from './CssContainers/TextAnimation4'
import SVGTextAnimation5 from './CssContainers/SVGTextAnimation5'
import HoverText from './CssContainers/HoverText'
import Three from './CssContainers/Three'
import cube3d from './CssContainers/cube3d'
import paperBird from './CssContainers/paperBird'
import rotation from './CssContainers/rotation'
import TextAnimation6 from './CssContainers/TextAnimation6'
import PopmotionJS from './CssContainers/PopmotionJS'
import Cards3D from './CssContainers/Cards3D'
import CanvasDraw from './CssContainers/CanvasDraw'
import WPM from './CssContainers/WPM'
import CanvasColor from './CssContainers/CanvasColor'
import SpiralText from './CssContainers/SpiralText'
import TextAnimation5 from './CssContainers/TextAnimation5'

export default {
    components: {
      TextAnimation,TextAnimation2,TextAnimation3,TextAnimation5,Cards,Mikey,TextAnimation4,SVGTextAnimation5,HoverText,Three,cube3d,paperBird,rotation,TextAnimation6,PopmotionJS,Cards3D,CanvasDraw,WPM,CanvasColor,SpiralText
      },
    data() {
        return {
        query: '',
        items: [
          { title: 'Cards', link: '/Cards' },
          { title: 'anim1', link: '/anim1' },
          { title: 'TextAnimation2', link: '/TextAnimation2' },
          { title: 'TextAnimation3', link: '/TextAnimation3' },
          { title: 'TextAnimation4', link: '/TextAnimation4' },
          { title: 'TextAnimation5', link: '/TextAnimation5' },
          { title: 'Three', link: '/Three' },
          { title: 'cube3d', link: '/cube3d' },
          { title: 'rotation', link: '/rotation' },
          { title: 'Cards3D', link: '/Cards3D' },
          { title: 'WPM', link: '/WPM' },
          { title: 'CanvasColor', link: '/CanvasColor' },
          { title: 'SpiralText', link: '/SpiralText' }
        ],
        showSideBar: false,
        }
    },
    computed: {
       computedList() {    /* Автокомплит */
      // var vm = this 
      return this.items.filter( (item) =>{
        return item.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      })
    }
    }
}
</script>

<style scoped lang="scss">
  body{
    display: flex;
    align-content: flex-start;
    // justify-content: space-around;
    background-image: linear-gradient(to right top, #e5e528, #e3e827, #e2ea25, #e0ed24, #def023);
    //  width: 100%;
     
  }

.container {
display: flex;
justify-content:space-around;
flex-flow: row wrap;
align-items: center;
margin-top: 10px;
width:75%;
}
.y{
  margin-bottom: 40px;
  height: 500px;
  width: 600px; 
  border: 1px solid #C1C1C1; 
  align-items: center;
  /* margin-top: 40px; */
}

/* mikey container */
.mikey{
margin-bottom: 40px;
height: 500px;
width: 600px; 
border: 1px solid #C1C1C1; 
align-items: center;
justify-content: center;
transition:  1s ease;
/* animation: rotation 2s infinite linear; */
overflow: hidden;
}

.mikey:hover{
  transform: rotate(360deg) scale(1.2);
}


#title{
  display: flex;
  /* align-content: flex-start; */
  justify-content: space-around;
  font-size: 1.1em;
}
#lul{
    color: red;
}

.x {
margin-bottom: 40px;
height: 400px ;
width: 600px; 
border: 1px solid #C1C1C1; 
}

/* .lul:nth-child(1) {
background: url(../assets/1.jpg);
background-size: cover;
background-repeat: no-repeat;
} */
.h1{
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 7vw;
  font-weight: 900;
  text-decoration: none;
  background-size: 120% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
  background-image: linear-gradient(45deg, 
                    #7794ff, 
                    #44107A,
                    #FF1361,
                    #FFF800);
  animation: .8s shake infinite alternate;
  font-family: 'Source Code Pro', monospace;
  text-align:center;
}
@keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}
// SIDEBAR

.sidebar-container{
  display: flex;
  width: 20%;
}

#sidebar {
  overflow:hidden;
  transition: width .35s;
  background-color:#2d2d2d;
  border-bottom-right-radius: 150px; 
  box-shadow: 2px 0 4px rgba(0,0,0,0.5);
  height: 500px;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;

}

button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border:none;
  outline:none;
  background: black;
  margin: 20px;
  cursor:pointer;
  }

span{
  color: red;
  display: flex;
  justify-content: center;
}
ul{
  margin-top: 5%;
}

li{
  margin-top: 15px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  list-style: none;
  text-decoration: none;
  margin-left: 15%;
}
li .Links{
  list-style: none;
  text-decoration: none;
  color:white;

}
#input{
  display: flex;
  justify-content: center;
 background-color: #fff;
//  margin-left: 18px;
//  margin-bottom: 20px;
 /* width: 150px; */
 border-radius: 10px;
 text-align: center;
 height: 20px;
}
</style>
