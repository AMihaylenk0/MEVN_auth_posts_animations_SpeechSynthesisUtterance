<template>

<router-link to="/">
<div class="Iam">
<p>This is</p>
<b>
  <div class="innerIam">
    leggera<br /> 
    a theme in progress<br />
    built on bootstrap<br />
    how I learn stuff<br />
    how we do it
    </div>
</b>
</div>
</router-link>

</template>

<script>
export default {
  
}
</script>

<style scoped>
div {
  background: #2d2d2d;
}
 a {
    text-decoration: none;
}
.Iam {
padding-top: 4em;
display: flex;
justify-content: center;
font: normal 40px/50px Montserrat, sans-serif;
color: #999;
height: 240px;
}
.Iam p {
  height: 50px;
  float: left;
  margin-right: 0.3em;
  align-items: center;
	align-content: center;
}
.Iam b {
  float: left;
  overflow: hidden;
  position: relative;
  height: 50px;
}
.Iam .innerIam {
  display: inline-block;
  color: #e74c3c;
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;
animation:move 5s;
animation-iteration-count:infinite;
animation-delay:1s;
}
@keyframes move{
0%  { top: 0px; }
20% { top: -50px; }
40% { top: -100px; }
60% { top: -150px; }
80% { top: -200px; }
}


</style>
