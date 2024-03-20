<template>
    <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Card</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
  <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>SIGN UP</h2>
        <div class="underline-title"></div>
      </div>
      <form  class="form" @submit.prevent>
        <label for="user-first-name" style="padding-top:22px; color: rgb(8, 196, 253);">
            &nbsp;First Name
          </label>
        <input id="user-first-name" class="form-content" type="text" name="email" autocomplete="on" v-model="firstName" required />
        <div class="form-border"></div>
        <label for="user-last-name" style="padding-top:22px; color: rgb(8, 196, 253);">&nbsp;Last Name
          </label>
        <input id="user-last-name" class="form-content" type="text" name="password" v-model="lastName" required />
        <div class="form-border"></div>
        <label for="user-email" style="padding-top:22px; color: rgb(8, 196, 253);">&nbsp;Email Address
          </label>
        <input id="user-email" class="form-content" type="text" name="password" v-model="emailAdd" required />
        <div class="form-border"></div>
        <label for="user-password" style="padding-top:22px; color: rgb(8, 196, 253);">&nbsp;Password
          </label>
        <input id="user-password" class="form-content" type="password" name="password" v-model="userPass" required />
        <div class="form-border"></div>
        <input id="submit-btn" type="submit" name="submit" @click="addUser()" value="SIGNUP"/>
        <router-link to="/login" id="signup">Already have an account? Login here.</router-link>
      </form>
    </div>
  </div>
</body>
</template>
<script>
export default {
  data(){
    return{
     firstName:"",
     lastName:"",
     emailAdd:"",
     userRole:"user",
     userPass:""
    }
  },
  methods:{
    addUser(){
        this.$store.dispatch('addUser',this.$data)
    }
  }
    
}
</script>
<style scoped>
a {
  text-decoration: none;
}
h2{
  color: rgb(8, 196, 253);
}
body {
  background: -webkit-linear-gradient(bottom, rgb(8, 196, 253), black);
  background-repeat: no-repeat;
 height: 100vh;
 padding-top: 2px;
}
label {
  font-family: "Raleway", sans-serif; 
  font-size: 11pt;
}
#forgot-pass {
  color: rgb(8, 196, 253);
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 3px;
  text-align: right;
}
#card {
  background: black;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgb(8, 196, 253);
  height: 520px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
}
#card-content {
  padding: 12px 44px;
}
#card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#signup {
  color: black;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}
#submit-btn {
  background: -webkit-linear-gradient(rgb(8, 196, 253), black);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px rgb(8, 196, 253);
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px rgb(8, 196, 253);
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
.underline-title {
  background: -webkit-linear-gradient(right, black, black);
  height: 2px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
} 
</style>