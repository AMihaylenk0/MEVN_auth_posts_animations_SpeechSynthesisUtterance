<template>
    <div class="lul">    
        <h2>Register</h2>    
        <form @submit.prevent="register">    
            <input type="text" name="email" v-model="email" placeholder="Email" /><br>    
            <input type="password" name="password" v-model="password" placeholder="Password"/><br>    
            <input type="password" name="password2" v-model="password2" placeholder="Password2"/><br>    
            <input type="text" name="name" v-model="name" placeholder="Name"/><br>    
            <input type="submit" value="Sign Up" />    
        </form>    
    </div>
</template>

<script>
import axios from 'axios';
export default {
 data(){
        return{
            email: '',
            password: '',
            password2: '',
            name: '' 
        }
    },
    methods: {    
        register() {  
            let email = this.email
            let password = this.password 
            let password2 = this.password2  
            let name = this.name 
            let register = () => {  
                // this.$router.push('/')
                let data = {    
                    email: email,    
                    password: password, 
                    password2: password2,
                    name: name    
                }   
                console.log(data) 
                axios.post("http://localhost:5000/users/register",data,{ withCredentials: true })    
                    .then((response) => {    
                        console.log(response)    
                        console.log("You r registered")
                        this.$router.push("/")    
                    })    
                    .catch((errors) => {    
                        console.log("Cannot register")    
                    })    
            }    
            register()    
        }  
    }    
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
    background-color: #B2AA8E;
    font-family: 'Lato', Arial, sans-serif;
    color: black;
}
input{
    border: 2px solid red;
    border-radius: 4px;
    margin: 10px;
    text-align: center;
    outline: none;
    background: #B2AA8E;
}

::placeholder{
    color: black;
}
input[type=submit]{
    padding: 10px 600px;
}
  /* Удаление бэкграунда после автозаполнения */
  @-webkit-keyframes autofill {
  to {
    color: inherit;
    background: transparent;
  }
}

input:-webkit-autofill {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}
</style>