<template>
  <body id="body">
    <center>
      <form>
	      <label for="search">Search</label>
	      <input required="" pattern=".*\S.*" type="search" class="input" v-model="search" id="search">
	      <span class="caret"></span>
      </form>
      <br>
      <button id="funcButt" @click="explore()">Search</button>
      <button id="funcButt" @click="sort()">SORT</button>
  </center>
    
    
    <div v-if="explore().length>0" id="mainProd" class="row">
      <div id="bodd" v-for="item in explore()" :key="item.id" class="col-lg-4">
        <div class="card h-100" style="width: 18rem; margin:10px;">
          <img :src="item.flightUrl" class="card-img-top">
          <div class="card-body">
            <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>{{item.flightDesc}}</i></p>
            <h5 class="card-title" style="color: white; background-color: black;">{{item.flightName}}</h5>
            <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>R{{item.flightPrice}}</i></p>
            <p class="card-text" style="font-size: 17px;">Seats Available:{{item.seatsAvail}}</p>
            <button id="butt"  @click="addToCart(item.flightID,$cookies.get('userID'))" class="btn btn-primary">BOOK NOW</button>
            <router-link @click="getFlight(item.flightID)" :to="{name:'flight', params:{flightID: item.flightID}}" class="btn" id="butt">View More</router-link>
          </div>
        </div>    
      </div>
    </div>
    <div v-else><spinner/></div>

    <!-- <div class="row"><div v-if="explore().length>0" class="card">
      <div class="col-lg-4">
        <div v-for="item in explore()" :key="item.id" class="card2">
          <img id="cardImg" :src="item.flightUrl">
          <h1 id="cardHeader">{{ item.flightName }}</h1>
          <h3 id="cardDesc">{{ item.flightDesc }}</h3>
          <button id="cardButt">{{ item.seatsAvail }}</button>
          <button id="cardButt2">{{ item.flightPrice }}</button>
        </div>
      </div>

      </div>
    <div v-else> <spinner/> </div>
  </div> -->
    
    
  </body>


</template>

<script>
import sweet from 'sweetalert'
import spinner from '../components/spinner.vue'
export default {
  components:{
    spinner
  },

  data(){
    return{
      search:""
    };
  },
  methods: {
    addToCart(flightID){
      const userID = $cookies.get('userID')
      console.log($cookies.get('userID'));
      this.$store.dispatch('addToCart',{flightID,userID})
      alert('Add to cart') 
    },

    getFlight(flightID){
      this.$store.dispatch('getSingleFlight',flightID)
    },

    explore(){
      let item = this.$store.state.Flights
      let typed = this.search;
      let result = item.filter(s => {
        return s.flightDesc.toLowerCase().includes(typed.toLowerCase())
      });
      return result;
    },
    sort(){
      let c = this.$store.state.Flights;
      if(c){
        c.sort((a, b) => a.flightPrice - b.flightPrice);
      }
    }
  },
  mounted(){
    this.$store.dispatch('getFlights');
  }
}
</script>

<style scoped>

/* #cardImg{
  width: 130px;
  height:130px;
}

.card {
 width: 190px;
 height: 350px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
 display: flex;

}

.card2 {
 width: 190px;
 height: 350px;
 background-color: #1a1a1a;
 border-radius:1px;
 transition: all .2s;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 20px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
} */

#funcButt{
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: rgb(0, 187, 229) ;
}
#body{
  background-color: black;
}
#input{
  margin-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 30px;
}

#butt{
  background-color: black;
  color: rgb(0, 187, 229);
  padding: 20px;
}

#butt:hover{
  background-color: indigo;
  color: black;
}

#bodd{
  padding: 30px;
}
#productBody {
  background-color: black;
}

.card-body {
  background-color: rgb(0, 187, 229);
  color: rgb(0, 0, 0) !important;
  box-shadow: rgb(255, 255, 255) 0px 0px 13px;
  /* gap: 50px !important; */
}

#mainProd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  margin-top: 50px;
  margin-left: 90px;
}

.card {
  margin-bottom: 10px;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

#imgCard {
  box-shadow: rgb(255, 255, 255) 0px 0px 30px;
}

footer {
  background-color: yellow;
  color: black !important;
  font-weight: bolder;
}

#sortButt {
  color: red;
  background-color: white;
  border: solid 2px black;
  border-radius: 12px;
  font-weight: bolder;
}

#sortButt:hover {
  scale: 1.2;
  transition: 0.3s;
  background-color: red;
  color: black;
}

#spinny {
  justify-content: center;
  align-items: center;
}

#adminButt {
  background-color: black;
  color: gold;
}


/* Search */
.input {
  color: rgb(0, 187, 229);
  font: 1em/1.5 Hind, sans-serif;
}

form, .input, .caret {
  margin: auto;
}

form {
  position: relative;
  width: 100%;
  max-width: 17em;
}

.input, .caret {
  display: block;
  transition: all calc(1s * 0.5) linear;
}

.input {
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em inset;
  caret-color: Black;
  width: 2em;
  height: 2em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.input:focus, .input:valid {
  background: rgb(255, 255, 255);
  border-radius: 0.25em;
  box-shadow: none;
  padding: 0.75em 1em;
  transition-duration: calc(1s * 0.25);
  transition-delay: calc(1s * 0.25);
  width: 100%;
  height: 3em;
}

.input:focus {
  animation: showCaret 1s steps(1);
  outline: transparent;
}

.input:focus + .caret, .input:valid + .caret {
  animation: handleToCaret 1s linear;
  background: transparent;
  width: 1px;
  height: 1.5em;
  transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);
}

.input::-webkit-search-decoration {
  -webkit-appearance: none;
}

label {
  color: #e3e4e8;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
}

.caret {
  background: rgb(0, 187, 229);
  border-radius: 0 0 0.125em 0.125em;
  margin-bottom: -0.6em;
  width: 0.25em;
  height: 1em;
  transform: translate(0,-1em) rotate(-45deg) translate(0,0.875em);
  transform-origin: 50% 0;
}

/* Animations */
@keyframes showCaret {
  from {
    caret-color: transparent;
  }

  to {
    caret-color: #255ff4;
  }
}

@keyframes handleToCaret {
  from {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0,-1em) rotate(-45deg) translate(0,0.875em);
  }

  25% {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0,-1em) rotate(-180deg) translate(0,0.875em);
  }

  50%, 62.5% {
    background: #255ff4;
    width: 1px;
    height: 1.5em;
    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,2.5em);
  }

  75%, 99% {
    background: #255ff4;
    width: 1px;
    height: 1.5em;
    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);
  }

  87.5% {
    background: #255ff4;
    width: 1px;
    height: 1.5em;
    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,0.125em);
  }

  to {
    background: transparent;
    width: 1px;
    height: 1.5em;
    transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);
  }
}
</style>
