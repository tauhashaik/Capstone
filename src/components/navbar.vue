<template>
    <nav id="box" class="navbar navbar-expand-lg">
  <div class="container-fluid">
<a class="navbar-brand" href="/"><img id="Logo" src="https://i.ibb.co/WzbXx0k/LOGO.png"></a>
    <button id="dropButt" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">

      <ul id="navDiv" class="navbar-nav">

        <li class="nav-item">
            <router-link v-if="$cookies.get('jwt')" id="navI"  class="nav-link active" aria-current="page" to="/profile"><button id="btn-message" class="button-message">
	<div class="content-avatar">
		<div class="status-user"></div>
		<div class="avatar">
			<svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path></svg>
		</div>
	</div>
	<div class="notice-content">
		<div class="username">Fake</div>
		<div class="lable-message">Profile</div>
		<div class="user-id">@User</div>
	</div>
</button></router-link>
        </li>

        <li class="nav-item">
            <router-link id="navI"  class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>

        <li class="nav-item">
            <router-link id="navI" class="nav-link active" to="/flights">Flights</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navI" class="nav-link active" to="/about">About</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navI" class="nav-link active" to="/contact">Contact</router-link>
        </li>

        <li class="nav-item">
          <router-link v-if="!$cookies.get('jwt')" id="navI" class="nav-link active" to="/login">LOGIN</router-link>
        </li>

        <li class="nav-item">
          <router-link v-if="!$cookies.get('jwt')" id="navI" class="nav-link active" to="/signup">SIGN UP</router-link>
        </li>

        <li class="nav-item">
          <router-link v-if="$cookies.get('jwt')" id="navI" class="nav-link active" to="/" @click="logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i></router-link>
        </li>
        
        <li class="nav-item">
          <router-link v-if="$cookies.get('jwt')" id="navI" class="nav-link active" to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
        </li>
        
        <li class="nav-item dropdown" v-if="isAdmin">
          <router-link id="navI" class="nav-link active dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </router-link>

          <ul class="dropdown-menu">
            <li><router-link id="navI" class="dropdown-item" to="/flightsadmin">Flights-Admin</router-link></li>
            <li><router-link id="navI" class="dropdown-item" to="/usersadmin">Users-Admin</router-link></li>
          </ul>

        </li>

      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {

  computed:{
    isAdmin() {
        const jwt = $cookies.get('jwt');
        const userRole = $cookies.get('userRole');
        return jwt && userRole === 'admin';
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
    
}
</script>
<style scoped>
#dropButt{
  border-color:rgb(0, 187, 229); 
}

#dropButt:hover{
  border-color:rgb(0, 187, 229); 
  transform: scale(1.3);
  transition: 0.4s;
}

#Logo{
    width: 122px !important;
    height: 90px !important;
    border: rgb(0, 187, 229) solid 2px !important;
    border-radius: 18px;
}

#Logo:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
}

#navI{
    color: rgb(0, 187, 229);
    display: block;
    position:sticky;
    text-decoration:none;
    /* padding:5px; */
    font-size:18px;
    font-family: Audiowide;
    text-transform:uppercase;
    transition:0.5s;  
}
#navI:hover{
    transform:scale(1.2);
  /* opacity:0.2; */
  /* filter:blur(0px); */
  color: black;
    text-shadow:0 0 2px rgb(8, 196, 253),
                0 0 2px #08c4fd,
                0 0 2px #08c4fd,
                0 0 2px #08c4fd; 
}

li{
  padding: 20px;
}

#navDiv{
   margin-left: auto;
   margin-right: auto;
}

.dropdown-menu {
    transition: 0.3s ease;
}

#box{
    background-color: black;
}

#btn-message {
  --text-color: black;
  --bg-color-sup: white;
  --bg-color: rgb(8, 196, 253);
  --bg-hover-color: #161616;
  --online-status: #00da00;
  --font-size: 16px;
  --btn-transition: all 0.2s ease-out;
}

.button-message {
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 var(--font-size) Helvetica Neue, sans-serif;
  box-shadow: 0 0 2.17382px rgba(0,0,0,.049),0 1.75px 6.01034px rgba(0,0,0,.07),0 3.63px 14.4706px rgba(0,0,0,.091),0 22px 48px rgba(0,0,0,.14);
  background-color: var(--bg-color);
  border-radius: 68px;
  cursor: pointer;
  padding: 6px 10px 6px 6px;
  width: fit-content;
  height: 40px;
  border: 0;
  overflow: hidden;
  position: relative;
  transition: var(--btn-transition);
}

.button-message:hover {
  height: 56px;
  padding: 8px 20px 8px 8px;
  background-color: var(rgb(8, 196, 253));
  transition: var(--btn-transition);
}

.button-message:active {
  transform: scale(0.99);
}

.content-avatar {
  width: 30px;
  height: 30px;
  margin: 0;
  transition: var(--btn-transition);
  position: relative;
}

.button-message:hover .content-avatar {
  width: 40px;
  height: 40px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--bg-color-sup);
}

.user-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-user {
  position: absolute;
  width: 6px;
  height: 6px;
  right: 1px;
  bottom: 1px;
  border-radius: 50%;
  outline: solid 2px var(--bg-color);
  background-color: var(--online-status);
  transition: var(--btn-transition);
  animation: active-status 2s ease-in-out infinite;
}

.button-message:hover .status-user {
  width: 10px;
  height: 10px;
  right: 1px;
  bottom: 1px;
  outline: solid 3px var(--bg-hover-color);
}

.notice-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 8px;
  text-align: initial;
  color: var(--text-color);
}

.username {
  letter-spacing: -6px;
  height: 0;
  opacity: 0;
  transform: translateY(-20px);
  transition: var(--btn-transition);
}

.user-id {
  font-size: 12px;
  letter-spacing: -6px;
  height: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--btn-transition);
}

.lable-message {
  display: flex;
  align-items: center;
  opacity: 1;
  transform: scaleY(1);
  transition: var(--btn-transition);
}

.button-message:hover .username {
  height: auto;
  letter-spacing: normal;
  opacity: 1;
  transform: translateY(0);
  transition: var(--btn-transition);
}

.button-message:hover .user-id {
  height: auto;
  letter-spacing: normal;
  opacity: 1;
  transform: translateY(0);
  transition: var(--btn-transition);
}

.button-message:hover .lable-message {
  height: 0;
  transform: scaleY(0);
  transition: var(--btn-transition);
}

.lable-message, .username {
  font-weight: 600;
}

.number-message {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 8px;
  font-size: 12px;
  width: 16px;
  height: 16px;
  background-color: var(--bg-color-sup);
  border-radius: 20px;
}

/*==============================================*/
@keyframes active-status {
  0% {
    background-color: var(--online-status);
  }

  33.33% {
    background-color: rgb(8, 196, 253);
  }

  66.33% {
    background-color: rgb(8, 196, 253);
  }

  100% {
    background-color: var(--online-status);
  }
}

li {
  padding: 7px; 
}

#navI {
  font-size: 20px;
}

</style>