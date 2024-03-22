<template >
    <body id="body">
   <div id="mainProd" class="row">
      <div id="bodd" v-for="item in $store.state.singleFlight" :key="item.flightID" class="col-lg-4">
        <div class="card h-100" style="width: 18rem; margin:10px;">
          <img :src="item.flightUrl" class="card-img-top">
          <div class="card-body">
            <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>{{item.flightDesc}}</i></p>
            <h5 class="card-title" style="color: white; background-color: black;">{{item.flightName}}</h5>
            <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>R{{item.flightPrice}}</i></p>
            <p class="card-text" style="font-size: 17px;">Seats Available:{{item.seatsAvail}}</p>
            <button id="butt" class="btn btn-primary">BOOK NOW</button>
          </div>
        </div>    
      </div>
    </div>

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
import spinner from '../components/spinner.vue'
export default {
    components:{
    spinner
  },
    computed:{
        getFlight(){
            this.$store.dispatch('getSingleFlight', this.$route.params.flightID)
        }
    },
    mounted(){
      this.$store.dispatch('getSingleFlight', this.$route.params.flightID)
    }
    
}
</script>
<style scoped>

#funcButt{
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: rgb(0, 187, 229) ;
}
#body{
  background-color: black;
  height: 80vh
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
  /* margin-top: 50px; */
  margin-left: 90px;
}

.card {
  margin-bottom: 10px;
}

/* .card:hover {
  transform: scale(1.1);
  transition: 0.3s;
} */

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
    
</style>