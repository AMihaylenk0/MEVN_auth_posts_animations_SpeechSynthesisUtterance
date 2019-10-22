<template>
<body>
  <div class="wrapper">  
  <div class="timer-container" v-if="start === true" :style="{'width': timerWidth+'%'}"></div>
  
  <div class="container">
    
    <div class="start-container" v-if="start === false">
      <div @click="startGame()" class="start-button">
        Start
      </div>
      <div class="start-tutorial">
        Hit the Enter key to start
      </div>
    </div>
    
    <div class="result-container" v-if="done === true">
      <h3>You type <strong>{{ countWords }}</strong> words per minute!</h3>
      <div @click="resetGame()" class="reset-button">
        Reset
      </div>
    </div>
    
    <div class="word-container" v-if="done === false">
      <div class="word">
        <span v-for="(letter, index) in word" :key="index" :class="[{active: index == currentLetterIndex-1 }]">{{ letter }}</span>
      </div>
    </div>
    
  </div>
</div>
</body>
</template>

<script>
export default {
data() {
    return{
    start: false,
    done: false,
    word: [],
    timerWidth: 0,
    currentLetter: '',
    currentLetterIndex: 0,
    countWords: 0,
    words: {"data":[
              {"word":"zero"},
              {"word":"midnight"},
              {"word":"yard"},
              {"word":"volume"},
              {"word":"boat"},
              {"word":"belly"},
              {"word":"demand"},
              {"word":"intelligence"},
              {"word":"literacy"},
              {"word":"voice"},
              {"word":"miserable"},
              {"word":"free"},
              {"word":"growth"},
              {"word":"residence"},
              {"word":"apathy"},
              {"word":"majority"},
              {"word":"fast"},
              {"word":"outline"},
              {"word":"degree"},
              {"word":"emphasis"},
              {"word":"positive"},
              {"word":"achieve"},
]}
    }
   
  },
  created() {
    let self = this;
    window.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13 && self.start === false) {
        self.startGame();
      }
      
      if(self.start == true && self.word.length != 0){
        self.checkKeyCode(key);
      }
      
    });
    
  },
  methods: {
    startGame() {      
      this.start = true;
      this.word = this.fetchWord().split('');
      this.startTimer();
    },
    resetGame() {
      this.start = false;
      this.done = false;
      this.word = [];
      this.timerWidth = 0;
      this.currentLetter = '';
      this.currentLetterIndex = 0;
      this.countWords = 0;
    },
    startTimer() {
      let count = 0;
      
      setInterval(()=>{
        if(this.done === false && this.start == true){
          count++;
          this.timerWidth = Math.ceil((count/60)*100);
          
          if(count == 60){
            this.done = true;
          }  
        }                
      },1000);
    },
    checkKeyCode(key) {
      console.log(key);
      switch(key){
        case 97:
          this.currentLetter = 'a';
          break;
        case 98:
          this.currentLetter = 'b';
          break;
        case 99:
          this.currentLetter = 'c';
          break;
        case 100:
          this.currentLetter = 'd';
          break;
        case 101:
          this.currentLetter = 'e';
          break;
        case 102:
          this.currentLetter = 'f';
          break;
        case 103:
          this.currentLetter = 'g';
          break;
        case 104:
          this.currentLetter = 'h';
          break;
        case 105:
          this.currentLetter = 'i';
          break;
        case 106:
          this.currentLetter = 'j';
          break;
        case 107:
          this.currentLetter = 'k';
          break;
        case 108:
          this.currentLetter = 'l';
          break;
        case 109:
          this.currentLetter = 'm';
          break;
        case 110:
          this.currentLetter = 'n';
          break;
        case 111:
          this.currentLetter = 'o';
          break;
        case 112:
          this.currentLetter = 'p';
          break;
        case 113:
          this.currentLetter = 'q';
          break;
        case 114:
          this.currentLetter = 'r';
          break;
        case 115:
          this.currentLetter = 's';
          break;
        case 116:
          this.currentLetter = 't';
          break;
        case 117:
          this.currentLetter = 'u';
          break;
        case 118:
          this.currentLetter = 'v';
          break;
        case 119:
          this.currentLetter = 'w';
          break;
        case 120:
          this.currentLetter = 'x';
          break;
        case 121:
          this.currentLetter = 'y';
          break;
        case 122:
          this.currentLetter = 'z';
          break;
        default:
          this.currentLetter = '';
          break;
      }
      this.checkLetterInWord();
    },
    checkLetterInWord() {
      if(this.word[this.currentLetterIndex] === this.currentLetter){
        this.currentLetterIndex++;
        
        if(this.currentLetterIndex === this.word.length){
          this.word = this.fetchWord().split('');
          this.countWords++;
          this.currentLetterIndex = 0;
          this.currentLetter = '';
        }
      }else{
        console.log("NO");
      }
    },
    fetchWord() {
      let randomIndex = Math.floor(Math.random() * this.words.data.length);
      return this.words.data[randomIndex].word.toLowerCase();
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf) format('truetype');
}
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ac1350;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans";
  font-weight: 400;
}
.wrapper .result-container h3 {
  font-weight: 300;
  color: #ffffff;
  font-size: 30px;
}
.wrapper .result-container .reset-button {
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
}
.wrapper .timer-container {
  width: 0%;
  height: 50px;
  position: absolute;
  background-color: #e77aa8;
  top: 0px;
  transition: all 1s;
}
.wrapper .start-tutorial {
  text-align: center;
  color: #ffffff;
  font-size: 11px;
  margin-top: 10px;
  opacity: 0.6;
}
.wrapper .start-button {
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
}
.wrapper .word-container {
  color: #ffffff;
  font-size: 50px;
}
.wrapper .word-container span {
  opacity: 0.4;
  transition: all 0.2s;
}
.wrapper .word-container span.active {
  opacity: 1;
}

</style>