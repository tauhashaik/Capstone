<template>
    <div>
        <h1 id="title">ADMIN</h1>

        <button id="addButt" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add
        </button>
        <table class="table table-dark table-responsive">
            <tr>
                <th style="color: white; background-color: black;">flightID</th>
                <th style="color: white; background-color: rgb(8, 196, 253);">flightName</th>
                <th style="color: white; background-color: black;">flightDesc</th>
                <th style="color: white; background-color: rgb(8, 196, 253);">seatsAvail</th>
                <th style="color: white; background-color: black;">flightPrice</th>
                <th style="color: white; background-color: rgb(8, 196, 253);">flightUrl</th>
                <th style="color: white; background-color: black;">flightUrl2</th>
                <th style="color: white; background-color: rgb(8, 196, 253);">flightUrl3</th>
                <th style="color: white; background-color: black;">flightUrl4</th>
            </tr>
            
            <tr v-for="item in $store.state.flights" :key= "item.flightID">
                <td style="color: white; background-color: rgb(8, 196, 253); padding-top: 40px">{{item.flightID}}</td>
                <td style="color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.flightName}}</td>
                <td style="color: white; background-color: rgb(8, 196, 253); font-size: 20px; padding-top: 40px">{{item.flightDesc}}</td>
                <td style="color: white; background-color: black; font-size: 20px; padding-top: 40px">R{{item.seatsAvail}}</td>
                <td style="color: white; background-color: rgb(8, 196, 253); font-size: 20px; padding-top: 40px">{{item.flightPrice}}</td>
                <td style="color: white; background-color: black"><img id='adminImg' :src=item.flightUrl ></td>
                <td style="color: white; background-color: rgb(8, 196, 253)"><img id='adminImg' :src=item.flightUrl2 ></td>
                <td style="color: white; background-color: black"><img id='adminImg' :src=item.flightUrl3 ></td>
                <td style="color: white; background-color: rgb(8, 196, 253)"><img id='adminImg' :src=item.flightUrl4 ></td>
                <td><button @click="deleteFlight(item.flightID)" id="deleteButt">Delete</button></td>

                <td>
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal2-' + item.flightID" id="editButt">
                        Edit
                    </button> -->
                </td>
            </tr>   
        </table>

        <!-- <div class="modal fade" :id="'exampleModal2-' + item.flightID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div id="modalBody" class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT PRODUCT</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id= "modalP">Flight Name</p>
                        <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="flightName" required>

                        <p id= "modalP">Flight Description</p>
                        <input id="input2" placeholder="quantity" type="number" class="form-control" v-model="flightDesc" required>

                        <p id= "modalP">Seats Available</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="seatsAvail" required>

                        <p id= "modalP">Flight Price</p>
                        <input id="input4" placeholder="category" type="text" class="form-control" v-model="flightPrice" required>

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
                        <button @click="" id="saveButt" type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> -->

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
                        <input id="input2" placeholder="quantity" type="number" class="form-control" v-model="flightDesc" required>

                        <p id= "modalP">Seats Available</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="seatsAvail" required>

                        <p id= "modalP">Flight Price</p>
                        <input id="input4" placeholder="category" type="text" class="form-control" v-model="flightPrice" required>

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
            this.store.dispatch('addFlight', this.$data)
        },
        deleteFlight(){
            this.store.dispatch('deleteFlight', id)
        },

    }
}
</script>
<style scoped>
    #title{
    margin-top: 100px;
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