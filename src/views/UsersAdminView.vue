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
                <th style="color: rgb(8, 196, 253); background-color: grey;">userID</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">firstName</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">lastName</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">userRole</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">emailAdd</th>
                <th style="color: rgb(8, 196, 253); background-color: grey;">userPass</th>
            </tr>
            
            <tr v-for="item in $store.state.Users" :key="item.id">
                <td style="color: rgb(8, 196, 253); background-color: white; padding-top: 40px">{{item.userID}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.firstName}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.lastName}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">{{item.userRole}}</td>
                <td style="color: rgb(8, 196, 253); background-color: white; font-size: 20px; padding-top: 40px">R{{item.emailAdd}}</td>
                <td><button @click="deleteUser(item.userID)" id="deleteButt">Delete</button></td>

                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal2-'+ item.userID" id="editButt">
                        Edit
                    </button>
                </td>
                <div class="modal fade" :id="'exampleModal2-'+ item.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div id="modalBody" class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT USER</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id= "modalP">First Name</p>
                        <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="firstName" required>

                        <p id= "modalP">Last Name</p>
                        <input id="input2" placeholder="quantity" type="text" class="form-control" v-model="lastName" required>

                        <p id= "modalP">UserRole</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="userRole" required>

                        <p id= "modalP">Email Address</p>
                        <input id="input4" placeholder="category" type="number" class="form-control" v-model="emailAdd" required>
                    </div>
                    <div class="modal-footer">
                        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="editUser(item.userID)" id="saveButt" type="button" class="btn btn-primary">Save changes</button>
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD USER</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id= "modalP">First Name</p>
                        <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="firstName" required>

                        <p id= "modalP">Last Name</p>
                        <input id="input2" placeholder="quantity" type="text" class="form-control" v-model="lastName" required>

                        <p id= "modalP">User Role</p>
                        <input id="input3" placeholder="amount" type="number" class="form-control" v-model="userRole" required>

                        <p id= "modalP">Email Address</p>
                        <input id="input4" placeholder="category" type="number" class="form-control" v-model="emailAdd" required>
                    </div>
                    <div id="modalFoot" class="modal-footer">
                        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="addUser()" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
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
            firstName: null,
            lastName: null,
            userRole: null,
            emailAdd: null
    };
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser', this.$data);
        },
        deleteUser(id){
            this.$store.dispatch('deleteUser', id)
        },
        editUser(id){
            let edit = {
                id:id,
                firstName:this.firstName,
                lastName:this.lastName,
                userRole:this.userRole,
                emailAdd:this.emailAdd
            };
            this.$store.dispatch('editUser',edit)
        },
    },
    computed: {
        getUsers(){
            this.$store.dispatch('getUsers')
         }
    },
    mounted(){
        this.getUsers
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