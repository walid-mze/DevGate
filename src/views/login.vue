<template>
    <div >
        <h2>Welcome Back!</h2>

        <p>login to continue</p>
    </div>
    <div id="formlogin">
        <form @submit.prevent="login">
            <input type="text" id="username" placeholder="Enter your username or gmail" v-model="username"><br>
            <input type="text" id="password" placeholder="Enter your Password " v-model="password">
            <button type="submit">login</button>
        </form>
    </div>
    <div>
        <p>Or login with:</p>
        <button type="button" @click="loginWithGoogle">Google</button>
      </div>
    <div>
        <div> Already have an account? <router-link to="/Register">Register here</router-link> </div> 
    </div>
</template>

<script>
    import {ref } from 'vue';
    import {auth, provider} from '@/firebase/index.js';
    import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
    import { app } from '@/firebase/index.js'; 
    import {useRouter } from 'vue-router';




    export default
    {
        setup()
            {
                const router=useRouter()

                const username =ref("")
                const password =ref ("")

                const login = ()=>{
                    console.log(app.options.projectId);
                    signInWithEmailAndPassword(auth,username.value,password.value)
                    .then(data => {console.log(data);
                    router.push('/')})
                    .catch(err => console.log(err.message));
                 }
                 const loginWithGoogle =()=>{
                    signInWithPopup(auth,provider)
                    .then(() => 
                    router.push('/'))
                    .catch((error)=>console.log(error.message))
                 };


                 return {
                    username,
                    password,
                    login,
                    loginWithGoogle
                 };
            }
    };


</script>

<style scoped>
/* Reset default margins and make full page */
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Center the whole content */
#app, div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Welcome text */
h2 {
  margin-top: 40px;
  font-size: 2rem;
  color: #333;
}

p {
  margin-bottom: 20px;
  color: #666;
}

/* Form container */
#formlogin {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 300px;
  margin: 20px 0;
}

/* Input fields */
input[type="text"] {
  width: 100%;
  padding: 12px 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

/* Normal Login Button */
button[type="submit"] {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

/* Google Login Button */
button[type="button"] {
  width: 300px;
  padding: 12px;
  margin-top: 10px;
  background-color: #DB4437; /* Google's Red */
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="button"]:hover {
  background-color: #c13c2f;
}

/* Register Link */
div > div {
  margin-top: 20px;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
}

/* Router link styling */
router-link {
  color: #007BFF;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
