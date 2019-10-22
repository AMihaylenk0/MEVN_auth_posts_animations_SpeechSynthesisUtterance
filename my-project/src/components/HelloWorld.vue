<template>
<body>
	
  <div class="main">
	<div class="main-overlay"></div>
	<div class="header">
		<div class="logo" >
			<router-link to="/cssanimations">
				<img class="logoo" src="../assets/logo.jpg"  width="100" height="100" alt="logo">
			</router-link>
		</div>
		<div class="menu">
			<ul>
				<router-link to="/" class="menu-link "><li>Home</li></router-link>
				<router-link to="/cssanimations" class="menu-link shake shake-rotate"><li>Css animations</li></router-link>
				<router-link to="/Posts" class="menu-link"><li>Posts</li></router-link>
				 <!-- Dropdown Menu -->
				<div class="dropdown menu-link">
  					<span>Mouse over me</span>
					<div class="dropdown-content">
						<router-link to="/cssanimations" class="menu-link">lul</router-link>
						<router-link to="/cssanimations" class="menu-link">lul</router-link>
						<router-link to="/cssanimations" class="menu-link">lul</router-link>
						<router-link to="/cssanimations" class="menu-link">lul</router-link>
						<router-link to="/cssanimations" class="menu-link">lul</router-link>
					</div>
				</div>
				<!-- LOGIN Icon -->
				<i class="material-icons login">account_circle
				<div class="dropdown-account">
					<router-link to="/login" class="menu-link account">Login</router-link>
					<router-link to="/register" class="menu-link account">Sigh up</router-link>
					<router-link to="/dashboard" class="menu-link account">Dashboard</router-link>
				</div>
				</i>
				<i class="material-icons" @click="logout">exit_to_app</i>
			</ul>
		</div>
	</div>
	
	<div class="main-text">
		<span>Lorem, ipsum & dolor.</span>
		<h1 >Lorem, ipsum.</h1><!-- class="font-effect-fire-animation" анимация шрифта -->
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi, inventore</p>
		<h1 class="marquee"><span class="ticker">This is a marquee. Text, text, text...</span></h1>
	</div>
	
	<router-link to="/cssanimations" class="main-arrow">
			<img src="../assets/Black_Circle-Arrow.png" alt="down">
	</router-link>
</div>

<div class="table">
	<div class="table-header">
		<span>LUL</span>
		<h2>Select a Plan</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</div>
</div>
<div class="price-tags">
	<div class="price-tag">
		<img src="../assets/png1.png" alt="">
		<span>lul</span>
		<h4><sup>$</sup>0/<sub>month</sub></h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima tempore autem laudantium ratione sunt impedit, corporis, illum praesentium ex maiores ab quaerat recusandae natus! Libero deserunt, incidunt voluptatibus consectetur!</p>
		<button class="price-btn">choose plan</button>
	</div>
	<div class="price-tag">
		<img src="../assets/png2.png" alt="">
		<span>lul</span>
		<h4><sup>$</sup>29/<sub>month</sub></h4>
		<p>Inventore consectetur ab, dolores, incidunt consequatur architecto nulla? Rem a nihil cum maiores, quod consequuntur minima quasi cumque itaque cupiditate fugit veritatis reprehenderit, nulla ratione praesentium eveniet magnam optio, hic.</p>
		<button class="price-btn">choose plan</button>
	</div>
	<div class="price-tag">
		<img src="../assets/png3.png" alt="">
		<span>lul</span>
		<h4><sup>$</sup>49/<sub>month</sub></h4>
		<p>Pariatur et odio sequi ex! Ipsum nemo sequi eum quia reprehenderit nulla nisi debitis illo dolor, provident, animi veritatis inventore aspernatur, voluptates harum quos quasi consequatur amet minus. Sint, at.</p>
		<button class="price-btn ">choose plan</button>
	</div>
</div>
<div class="call-to-action">
		<span>Lorem, ipsum & dolor.</span>
		<h4>Just click here 👇</h4>
		<a class="btn shake shake-crazy" href="">Button</a>
		<a class="btn" href="">Button</a>
</div>
</body>
</template>

<script>
import axios from "axios"    
export default {
  name: 'HelloWorld',
  data () {
    return {
   
    }
  },
  methods: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* logo effect */

.logo{
	position: relative;
	display: flex;
	top:20px;
	left:-50px;
}
.logo:hover{
animation: shake 0.5s; 
animation-iteration-count: infinite; 
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
/* Dropdown account menu */
.login{
	color: red;
	position: relative;
	display: flex;
	justify-content: center;
	}
.dropdown-account {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
  /* z-index: 1; */
	text-align: center;
	}	
.login:hover .dropdown-account{
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	max-height: 260px;
	max-width: 50px;
	flex-direction: column;
	/* background: rgb(14, 1, 1); */
	margin-top: 20px;
	/* padding-right: 20px; */
	
}	
.account{
	/* margin-top: 10px; */
}

/* Dropdown menu */
.dropdown-content {
  display: none;
  position: absolute;
  /* background-color: #fa325a	; */
  min-width: 105px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
  /* z-index: 1; */
	text-align: center;
	}

.dropdown:hover .dropdown-content {
	display: flex;
	flex-direction: column;
}

.main {
	color: red;
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: center;
	min-height: 600px;
	background: url(../assets/1.jpg) no-repeat center;
	background-size: cover;
	position: relative;
	overflow-x: hidden;
}

.main-overlay {
	position: absolute;
	left: 0; top: 0;
	width: 100%;
	height: 100%;
	opacity: .5;
	z-index: 0;
	background: rgb(161, 157, 233);
	background: -moz-linear-gradient(90deg, rgba(22,16,124,1) 0%, rgba(112,9,121,1) 45%, rgba(0,86,255,0.8127626050420168) 100%);
	background: -webkit-linear-gradient(90deg, rgba(22,16,124,1) 0%, rgba(112,9,121,1) 45%, rgba(0,86,255,0.8127626050420168) 100%);
	background: linear-gradient(90deg, rgba(22,16,124,1) 0%, rgba(112,9,121,1) 45%, rgba(0,86,255,0.8127626050420168) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#16107c",endColorstr="#0056ff",GradientType=1);
}	
.header {
	align-items: center;
	display: flex;	
	position: relative;
	width: 90%;
	/* z-index: 2; */
	justify-content: space-between;
}

.menu {
	max-width: 50%;
	min-width: 35%;
}
.menu ul{
	display: flex;
	justify-content: space-around;
	/* margin-top: -70px; */
	list-style: none;
	cursor: pointer;
}
.menu-link {
	color: #FFF;
	text-decoration: none;
	font-family: 'VT323', monospace; /* Пиксельный шрифт */
	font-size: 15pt;
}
.main-text	{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 2;
	text-align: center;
	font-size: 1.2rem;
	height: 100%;
}
.main-text h1 {
	font-size: 45px;
	color: #fa325a;
	margin: 0.8rem;
}
.main-text span {
	display: inline-block;
}
.main-text span::after{
content: '';
width: 20px;
height: 1px;
background-color: red;
display: inline-block;
vertical-align: middle;
margin: 10px;
}
.main-text span::before{
content: '';
width: 20px;
height: 1px;
background-color: red;
display: inline-block;
vertical-align: middle;
margin: 10px;
}

/* Бегущая строка */
@keyframes scroll {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0)
    }
}
 
.marquee {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
}
 
.marquee .ticker {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 5s infinite linear;
}

.main-arrow {
height: 14vh;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
}
.table {
	text-align: center;
}
.table-header {
	line-height: 2.5rem;
	margin-top: -30px;
}
.table-header h2{
	color: #4f4f6f;
}
.table-header span {
	text-transform: uppercase;
	font-style: 1.4rem;
	color: #4f4f6f;
}

.table-header span::after {
	content: '';
	width: 20px;
	height: 1px;
	background-color: #6e45e2;
	display: inline-block;
	vertical-align: middle;
	margin: 10px;
}
.table-header span::before {
	content: '';
	width: 20px;
	height: 1px;
	background-color: #6e45e2;
	display: inline-block;
	vertical-align: middle;
	margin: 10px;
}
.table-header {
	padding-top: 7rem;
}
.price-tags {
	justify-content: space-around;
	display: flex;
	align-items: center;
	margin-top: 100px;
	/* min-height: 600px; */
	padding-bottom: 80px;
    height: 80vh;
}
.price-tag {
	flex-direction: column;
	display: flex;
	text-align: center;
	align-items: center;
	padding: 2rem;
	border: 1px solid red;
	width: 300px;
	height: 580px;
	border-right-width: 100px;
	border-radius: 20px;
	background-color: #d2d1e8;
}
.price-tag:hover {
	cursor: pointer;
	box-shadow: 5px 5px;
	transition: 0.2s;
}

.price-tag h4 {
	color: #4f4f6f;
	font-size: 2.7rem;
	margin: 25px;
}
.price-tag h4 sub {
	font-size: 1.2rem;
}
.price-btn {
	background-color: #fff;
	border: red 1px solid;
	color: #9fa5af;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 270;
	padding: 20px;
	border-radius: 100px;
	margin-top: 30px;
	width: 200px;
}
.price-btn:hover {
	background-color: #6e45e2;
	transition: 0.2s;
}
.call-to-action {
	text-align: center;
	position: relative;
	background: rgb(89,84,184);
	background: linear-gradient(90deg, rgba(89,84,184,1) 2%, rgba(97,6,154,0.9500175070028011) 46%, rgba(20,68,162,0.9220063025210083) 100%);
	color: #fff;
	padding: 13rem;
	line-height: 2rem;
	min-height: 520px;
}
.call-to-action span {
	font-size: 1.3rem;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 3px;
}
.call-to-action h4 {
	font-weight: 200;
	font-size: 1.2rem;
	margin: 2rem ;
	letter-spacing: 1.8px;
}
.btn {
	background-color: #fff;
	border: red 1px solid;
	color: white;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 270;
	padding: 20px;
	border-radius: 100px;
	width: 200px;
	display: inline-block;
	margin: 1rem;
	box-shadow: 0 0 40px 40px #ed74b5 inset, 0 0 0 0 #ed74b5;
	text-decoration: none;
}
.btn:hover {
	box-shadow: 0 0 10px 0 #ed74b5 inset, 0 0 10px 4px #ed74b5;
  	color: #ed74b5;
  	transition: 0.8s;
	background-color: white;
}
</style>
