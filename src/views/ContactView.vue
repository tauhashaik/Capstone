<template>
       
    <body id="background">

            <div id="title" class="content">
		        <h2>CONTACT US</h2>
		        <h2>CONTACT US</h2>
	        </div>
        
       
    <div class="container">
        <div class="row">
            <div data-aos="slide-left" id="form" class="col">
                <form action="https://formspree.io/f/mbjvblqe" method="POST">
                    <br>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                
                    <label for="Surname">Surname:</label>
                    <input type="text" id="surname" name="surname" required>
                
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                
                    <input type="submit" value="Submit">  
                </form>
            </div>

            <div data-aos="slide-up" class="col">
                <div class="info">

                    <div class="email">
                        <h4><i class="fa-regular fa-envelope fa-beat fa-sm" style="color: #000000;"></i>  Email:</h4>
                        <a href=""><p>flybyair.co.za</p></a>
                    </div>

                    <div class="phone">
                        <h4><i class="fa-solid fa-mobile-screen-button fa-beat fa-sm" style="color: black;"></i>  Call:</h4>
                        <a href=""><p>+27 5166 897</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

      


</template>
<script>
export default {
    
}
</script>
<style scoped>


#background{
    background-image: url(/src/assets/sky\ 3.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    height:90vh;
}
form {
  width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: large;
  color: black;
  text-shadow:0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}

input[type="text"],
input[type="email"],
textarea {
  color: black;
  width: 100%;
  padding: 8px;
  border: 3px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: grey;
  color: white;
  padding: 8px 105px;
  border: solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: large;
}

input[type="submit"]:hover {
  background-color: black;
  border-color: #000;
  color: #000;
  font-size: larger;
}

h4{
    color: black !important;
    text-shadow:0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4,
                0 0 2px #03e9f4;
}

p{
    margin-top: 40px !important;
    color: rgb(0, 0, 0) !important;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    transition: 0.5s;
}

#map{
    margin-top: 80px;
}

.info{
    margin-top: 80px;
}

* {
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}

/* body {
	display: flex;
	background: #000;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
} */

.content {
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 29rem;
    padding-top: 8rem;
    align-items: center;
}


.content h2 {
	color: #fff;
	font-size: 4em;
	position: absolute;
	transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
	color: transparent;
	-webkit-text-stroke: 2px #000000;
}

.content h2:nth-child(2) {
	color: #002fff;
	animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
}
</style>