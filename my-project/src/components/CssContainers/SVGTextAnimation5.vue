<template>
<body>
      <svg width="100%" height="100%" viewBox="30 -140 600 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
 <path id="path">
		<animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite"/>
	</path>
	<text font-size="26" font-family="Montserrat" fill='hsla(36, 95%, 85%, 1)'>
		<textPath xlink:href="#path">I'm An Animated Typing Example && I'm All SVG.
    </textPath>
	</text>
</svg>
</body>
  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);
body{
     /* display: flex;
align-items: center; */
  /* margin:0; */
  width:100%; 
  height:100vh;
  background:hsla(0, 5%, 5%, 1);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(to right top, hsla(0, 5%,15%, 0.5), hsla(0, 5%, 5%,1));
  
}
svg{
  width:100%;
 /* margin-top: 70px; */ 
 /* Координаты задаются в теге svg */
}
</style>
