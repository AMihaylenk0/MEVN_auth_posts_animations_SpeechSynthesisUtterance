<template>
   <body>
    <div id="table">
        <div id="centeralign">
          <h1 id="h1">Sample typing effect.</h1>
          <p id="lul">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante arcu, dignissim non risus id, posuere efficitur felis. Vestibulum arcu diam, semper non ipsum quis, dictum ultricies diam. Suspendisse vel luctus sapien. Mauris tristique condimentum velit tincidunt pharetra. Curabitur ut lectus eleifend, malesuada lorem eget, consectetur augue. Nunc scelerisque nisi in lacus eleifend eleifend. Praesent blandit ex at nunc maximus, ut sodales ante auctor. Nunc elementum eros sit amet malesuada facilisis. Morbi eget elit consequat, sodales urna in, lobortis nisi. Morbi dapibus velit eu mattis bibendum. Nulla et nisi eget turpis vulputate suscipit eu nec nunc. Pellentesque ut pulvinar quam.</p>
        </div>
    </div>
   </body>
   
</template>

<script >
export default {
mounted() {
   function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
          } 
           else {
            clearInterval(timer);
            // typeEffect(element,speed)
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 55;
  var delay = $('h1#h1').text().length * speed + speed;
  
  typeEffect($('h1#h1'), speed);
  // $('p#lul').css('display', 'inline-block');
  //   typeEffect($('p#lul'), speed);
  setTimeout(function(){
    $('p#lul').css('display', 'inline-block');
    typeEffect($('p#lul'), speed);
  
  }, delay);
  });
},
}
</script>

<style scoped>
body {
  margin: 0;
  height: 100vh;
  text-align: center;
  font-family: 'Oxygen Mono', monospace;
  color: #999;
}

h1 {
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-size: 30pt;
  margin-bottom: 15px;
}

p {
  text-align: left;
  margin: 0;
  text-transform: lowercase;
  font-size: 10pt;
  font-weight: 900;
  width: 50%;
  display: none;
}

#table {
	display: table;
	width: 100%;
	height: 100%;
  background-color: #e5e5e5;
}

#centeralign {
	display: table-cell;
	vertical-align: middle;
}
</style>
