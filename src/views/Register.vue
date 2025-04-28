<template>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="button" @click="register">Register</button>
      <div>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
      </div>
      <div>
        <p>Or register with:</p>
        <button type="button" @click="registerWithGoogle">Google</button>
      </div>
    </form>
  </template>
  
  <script>
    import { app } from '@/firebase/index.js'; // import app

  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router';
  import { auth, provider } from '@/firebase/index.js'; // Correctly import auth and provider
  import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const router = useRouter();
      const route = useRoute();
  
      // Register user with email and password
      const register = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((data) => {
            console.log('User registered:', data.user);
            router.push('/');
          })
          .catch((error) => {
            console.error('Registration error:', error.message);
          });
      };
  
      // Register user with Google
      const registerWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log('Google user:', result.user);
            router.push('/');
          })
          .catch((error) => {
            console.error('Google registration error:', error.message);
          });
      };
  
      // expose these to the template
      return {
        name,
        email,
        password,
        register,
        registerWithGoogle
      };
    }
  };
  </script>
  
  <style scoped>
/* Full height and centering */
body, html {
  height: 100%;
  margin: 0;
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  margin: auto;
  margin-top: 50px;
}

/* Form fields */
form div {
  width: 100%;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: 600;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

/* Main register button */
button[type="button"] {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="button"]:hover {
  background-color: #45a049;
}

/* Google button */
div:last-child button {
  margin-top: 10px;
  background-color: #DB4437;
}

div:last-child button:hover {
  background-color: #c13c2f;
}

/* Register and login links */
p {
  text-align: center;
  color: #555;
}

router-link {
  color: #007BFF;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
