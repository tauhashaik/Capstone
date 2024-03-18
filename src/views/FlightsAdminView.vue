<template>
    <div id="bod">
       <center><h1 id="title">ADMIN</h1></center> 

        <center>
            <button id="addButt" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
            </button>
        </center> 

        <table class="table table-dark table-responsive">
            <tr>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightID</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightName</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightDesc</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">seatsAvail</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightPrice</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightUrl</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightUrl2</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightUrl3</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">flightUrl4</th>

            </tr>
            
            <tr v-for="item in $store.state.Flights" :key="item.id">
                <td style="color: rgb(8, 196, 253); background-color: white; padding-top: 40px">{{item.flightID}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.flightName}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.flightDesc}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.seatsAvail}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">R{{item.flightPrice}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white"><img id='adminImg' :src=item.flightUrl></td>
                <td style="color: rgb(8, 196, 253); background-color: white"><img id='adminImg' :src=item.flightUrl2></td>
                <td style="color: rgb(8, 196, 253); background-color: white"><img id='adminImg' :src=item.flightUrl3></td>
                <td style="color: rgb(8, 196, 253); background-color: white"><img id='adminImg' :src=item.flightUrl4></td>
                <td><button @click="deleteFlight(item.flightID)" id="deleteButt">Delete</button></td>

                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal2-'+ item.flightID" id="editButt">
                        Edit
                    </button>
                </td>
                <div class="modal fade" :id="'exampleModal2-'+ item.flightID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div id="modalBody" class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT FLIGHT</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id= "modalP">Flight Name</p>
                        <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="flightName" required>

                        <p id= "modalP">Flight Description</p>
                        <input id="input2" placeholder="quantity" type="text" class="form-control" v-model="flightDesc" required>

                        <p id= "modalP">Seats Available</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="seatsAvail" required>

                        <p id= "modalP">Flight Price</p>
                        <input id="input4" placeholder="category" type="number" class="form-control" v-model="flightPrice" required>

                        <p id= "modalP">Flight URL</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl" required>

                        <p id= "modalP">Flight URL 2</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl2" required>

                        <p id= "modalP">Flight URL 3</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl3" required>

                        <p id= "modalP">Flight URL 4</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl4" required>
                    </div>
                    <div class="modal-footer">
                        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="editFlight(item.flightID)" id="saveButt" type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
                
            </tr>   
        </table>

        

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div id="modalBody" class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD FLIGHT</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id= "modalP">Flight Name</p>
                        <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="flightName" required>

                        <p id= "modalP">Flight Description</p>
                        <input id="input2" placeholder="quantity" type="text" class="form-control" v-model="flightDesc" required>

                        <p id= "modalP">Seats Available</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="seatsAvail" required>

                        <p id= "modalP">Flight Price</p>
                        <input id="input4" placeholder="category" type="number" class="form-control" v-model="flightPrice" required>

                        <p id= "modalP">Flight URL </p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl" required>

                        <p id= "modalP">Flight URL 2</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl2" required>

                        <p id= "modalP">Flight URL 3</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl3" required>

                        <p id= "modalP">Flight URL 4</p>
                        <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="flightUrl4" required>
                    </div>
                    <div id="modalFoot" class="modal-footer">
                        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="addFlight()" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flightName: null,
            flightDesc: null,
            seatsAvail: null,
            flightPrice: null,
            flightUrl: null,
            flightUrl2: null,
            flightUrl3: null,
            flightUrl4: null
    };
    },
    methods:{
        addFlight(){
            this.$store.dispatch('addFlight', this.$data);
        },
        deleteFlight(id){
            this.$store.dispatch('deleteFlight', id)
        },
        editFlight(id){
            let edit = {
                id:id,
                flightName:this.flightName,
                flightDesc:this.flightDesc,
                seatsAvail:this.seatsAvail,
                flightPrice:this.flightPrice,
                flightUrl:this.flightUrl,
                flightUrl2:this.flightUrl2,
                flightUrl3:this.flightUrl3,
                flightUrl4:this.flightUrl4

            };
            this.$store.dispatch('editFlight',edit)
        },
    },
    computed: {
        getFlights(){
            this.$store.dispatch('getFlights')
         }
    },
    mounted(){
        this.getFlights
    }
}
</script>
<style scoped>

#bod{
    background-color:black
}

#title{
    font-family: audiowide;
    color: rgb(8, 196, 253);
}

#adminBody{
    background-color: black;
}

#adminImg{
    width: 90px;
    height: 90px;
}
#adminImg:hover{
    transform: scale(2);
    transition: 0.2s;
}

#adminButt{
    color: red;
    background-color: black;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt1{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt2{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}

#adminButt:hover{
    scale: 1.2;
    /* transition: 0.3s; */
    background-color: gold;
    color: black;
}
#adminButt1:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
#adminButt2:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
#modalBody{
    background-color: rgb(8, 196, 253);
    color: gold;
    font-family: audiowide;
}
#closeButt{
    background-color: red;
    color: black;
}
#closeButt:hover{
    background-color: red;
    color: black;
    transform: scale(1.1);
    transition: 0.2s;
}
#saveButt{
    background-color: black;
    color: white;
}
#saveButt:hover{
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: 0.2s;
}

#addButt{
    background-color: black;
    margin-bottom: 20px;
    color: gold;
    margin-left:auto !important;
    margin-right:auto !important;
}

#deleteButt{
    background-color: red;
    color: black;
    border-radius: 12px;
}
#deleteButt:hover{
    background-color: red;
    color: black;
    border-radius: 12px;
    transform: scale(1.1);
    transition: 0.2s;
}
#editButt{
    background-color: red;
    color: black;
    border-radius: 12px;
}
#editButt:hover{
    background-color: red;
    color: black;
    border-radius: 12px;
    transform: scale(1.1);
    transition: 0.2s;
}

#modalP{
    color: Black;
    font-family: Audiowide;
    margin-top: 10px;
    text-shadow: 0px 0px 10px white !important;
    font-size: large;
}
#input1{
    border: solid 2px rgb(8, 196, 253) ;
    box-shadow: 0px 0px 7px rgb(8, 196, 253);
}
#input2{
    border: solid 2px rgb(8, 196, 253);
    box-shadow: 0px 0px 7px rgb(8, 196, 253);
}
#input3{
    border: solid 2px rgb(8, 196, 253);
    box-shadow: 0px 0px 7px rgb(8, 196, 253);
}
#input4{
    border: solid 2px rgb(8, 196, 253);
    box-shadow: 0px 0px 7px rgb(8, 196, 253);
} 
</style>