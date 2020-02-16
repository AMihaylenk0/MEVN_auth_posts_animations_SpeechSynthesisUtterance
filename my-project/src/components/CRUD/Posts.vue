<template>
<body>
  <!-- INputs -->
  <div class="feedback-card">
      <div class="feedback-header">
            SEND POST
      </div>
      <form class="feedback-body">
        <input type="text" class="feedback-body__name" v-model="name" placeholder="Name" />
        <input type="text" class="feedback-body__title" v-model="title" placeholder="Title" />
        <textarea type="text" class="feedback-body__message" v-model="post" placeholder="Post"></textarea>
        <button class="feedback-body__submit" @click.prevent="sendPost">SEND</button>
      </form>
  </div>
  <h1>posts</h1>
  <br>
  <!-- POSTS -->
  <div class="container" v-for="(post,index) in posts" :key="index">
    <div class="name">{{post.name}}</div>
    <p class="title">{{post.title}}</p>
    <p>{{post.post}}</p>
    <br>
    <i class="material-icons listen" @click="listen(post.post)">volume_up</i>
  </div>
    <!-- reload btn -->
  <i class="material-icons reload" @click="reload">cached</i>

</body>

</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: false,

    post: '',
    name: '',
    title: '',
    posts: []
  }),
  methods: {
    sendPost () {
      let data = {
        name: this.name,
        title: this.title,
        post: this.post
      }
      if (!data.name || !data.title || !data.post) {
        console.log('Fill all fields')
      }
      axios.post('http://localhost:5000/posts/create', data, { withCredentials: true })
        .then((response) => {
          // console.log(response.data.post)
          // console.log('its ok')
          // this.$router.push("/")
          this.posts = [response.data.post, ...this.posts]
          this.clear()
          console.log(response.data)
        })
        .catch((errors) => {
          console.log('damn')
        })
      // console.log(this.posts)
    },
    clear () {
      this.name = ''
      this.post = ''
      this.title = ''
    },
    getPosts () {
      axios.get(`http://localhost:5000/posts/list`).then(response => {
        this.posts = response.data.posts
        // console.log(this.posts)
        console.log(response.data)
      })
    },
    reload () {
      this.$router.go()
    },
    listen (text) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(text))
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style scoped>
body {
  /* margin: 0;
  padding: 0; */
  background-color: #a2a2a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
}
h1{
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 150px;
  text-align: center;
}

* {
  font-family: "Roboto", sans-serif;
}
input,
button,
textarea {
  border: 2px solid rgba(0, 0, 0, 0.6);
  background-image: none;
  background-color: #dadad3;
  box-shadow: none;
  padding: 5px;
  margin-top: 10px;
}
input:focus,
button:focus,
textarea:focus {
  outline: none;
}

textarea {
  min-height: 50px;
  resize: vertical;
}

button {
  cursor: pointer;
  font-weight: 500;
}

.feedback-card {
  margin-top: 20px !important;
  border: 1px solid black;
  width: 50em;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: -0.6rem 0.6rem 0 rgba(29, 30, 28, 0.26);
}
.feedback-header {
  text-align: center;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid black;
}
.feedback-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.feedback-body__message {
  margin-top: 10px;
}
.feedback-body button {
  margin-top: 10px;
  align-self: flex-end;
}
.container{
  position: relative;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.6);
  width: 35%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 15px; */
  word-break: break-all;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 10px;
}
.name{
  position: absolute;
  top:0;
  left: 0;
  width: 70px;
  height: 40px;
  border-radius: 50%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
p{
  margin-top: 10px;
  white-space: pre-wrap;
  max-width: 50%;
}
.title{
  font-weight: bold;
}
.reload{
  position: absolute;
  top:0;
  right:0;
  cursor: pointer;
  margin: 15px 15px 0 0;
}

/* Подключение Material Icons (потому что линк из html не подключается) */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.listen{
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
</style>
