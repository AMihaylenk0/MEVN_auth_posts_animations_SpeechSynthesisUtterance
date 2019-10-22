<template>
<body>
     <ul>  
	<li>
		Out on the wiley, windy moors
	</li>
	<li>
		We'd roll and fall in green.
	</li>
	<li>
		You had a temper like my jealousy:
	</li>
	<li>
		Too hot, too greedy.
	</li>
	<li>
		How could you leave me,
	</li>
	<li>
		When I needed to possess you?
	</li>
	<li>
		I hated you. I loved you, too.
	</li>
	<li>
		Bad dreams in the night.
	</li>
	<li>
		They told me I was going to lose the fight,
	</li>
	<li>
		Leave behind my wuthering, wuthering
	</li>
	<li>
		Wuthering Heights.
	</li>
	<li>
		Heathcliff, it's me--Cathy.
	</li>
	<li>
		Come home. I'm so cold!
	</li>
	<li>
		Let me in-a-your window.
	</li>
	<li>
		Heathcliff, it's me--Cathy.
	</li>
	<li>
		Come home. I'm so cold!
	</li>
</ul> 
</body>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$lines: 16; // no of <li> elements, has to be an even number. Still learning how sass works, I'm getting a warning when an odd number is used.

$delayandduration: 3; // use this number to divide both animation duration for <ul> and animation delay for <li>. Controls the speed of the animation. Greater = faster.

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	}
body {
	background-color: hsl(0,67%,50%);
	color: hsl(60,80,60);
	// overflow: hidden;
    height: 100vh;
    overflow: hidden;
	}
ul {
	overflow: hidden;
	perspective: 900px;
	list-style: none;
	height: 100%;
	max-height: 100vh;
	min-height: 400px;
	text-align: center;

	animation: 5s width-sway ease-in-out infinite;
	}
@keyframes width-sway {
	0%{
		width: 600px;
		transform: rotate(10deg);
		}
	50% {
		width: 4200px;
		transform: rotate(-10deg);
		}
    100%{
        width: 600px;
        transform: rotate(10deg);
    }
	}
li {
	position: absolute;
	top: 0;
	width: 100%;
	
	transform: translateY(100vh);
	
	font-size: 1.5rem;
	font-family: sans-serif;
	font-weight: bold;

	animation: #{$lines/$delayandduration}s spiral-staircase linear infinite;
	}

@for $i from 1 through $lines {
	li:nth-child(#{$i}) {
		animation-delay: #{$i/$delayandduration}s;
		}
	}

@for $r from 1 through $lines/2 {
	li:nth-child(#{$r}) {
		right: #{$r}rem;
		}
	li:nth-last-child(#{$r}) {
		right: #{$r}rem;
		}
	}

@keyframes spiral-staircase {
	0% {
		transform: rotateY(90deg) translateY(105vh) rotate(0deg);
		}
	0%, 100% {
		// opacity: 0;
		}
	50% {
		transform: rotateY(0deg) translateY(50vh) rotate(0deg);
		// opacity: 1;
		}
	100% {
		transform: rotateY(-90deg) translateY(-5vh) rotate(0deg);
		}
	}
</style>
