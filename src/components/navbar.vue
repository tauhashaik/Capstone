<template>
    <nav id="box" class="navbar navbar-expand-lg">
  <div class="container-fluid">
<a class="navbar-brand" href="/"><img id="Logo" src="https://i.ibb.co/WzbXx0k/LOGO.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">

      <ul id="navDiv" class="navbar-nav">

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
          <router-link id="navI" class="nav-link active" to="/signuplogin">SIGN UP/LOGIN</router-link>
        </li>
        
        <li class="nav-item dropdown">
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
    
}
</script>
<style scoped>
#Logo{
    width: 100px;
    height: 80px;
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
    padding:5px;
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
    
</style>