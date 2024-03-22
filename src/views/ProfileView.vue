<template>
   <center>
    <body id="bod">
        <div id="cards" class="main">
             <div v id="c2" class="card">
                <div class="card-info">
                    <div class="contact-title">Contact</div>
                        <div class="card-contact">
                            <li class="icon-contact">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                </svg>
                                     Tel:(+27) 21 696 4579
                            </li>
                            <li v-for="item in $store.state.singleUser" :key="item.userID" class="icon-contact">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                </svg>

                                    Email: {{ item.emailAdd }}
                            </li>            
                        </div>
                    </div>
                </div>

            <div id="c3" class="card">
                <div class="card-info">
                    <li class="address-icon">
                        <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                        </svg>
                    </li>
                    <li class="address-title">Address:</li>
                    <li class="address">LALA LAND</li>
              </div>
            </div>

            <div v-for="item in $store.state.singleUser" :key="item.userID" id="c1" class="card">
                 <div class="card-info">
                    <div class="card-avatar">
                         <svg  viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                        </svg>
                    </div>
                    <div class="card-title">{{ item.firstName }}</div>
                    <div class="card-subtitle">{{ item.lastName }}</div>
                    <div class="card-social">

                    <li id="cs3" class="card-social-icon">
                        <br>
                        <i class="fa-regular fa-pen-to-square fa-2xl" style="color: #74C0FC;"></i>
                        <br>
                        <button id="butt" @click="editUser(item.userID)">EDIT</button>
                        
                    </li>
                    </div>
                </div>
            </div>
        </div>
<br>
<br>
<br>
        <table>
        <thead class="table-secondary" >
        <tr id="headers" scope="col">
            <th>firstName</th>
            <th>lastName</th>
            <th>userRole</th>
            <th>emailAdd</th>
      </tr>
    </thead>
    <tbody>
      <tr scope="row">
        <td id="table_info"><input v-model="firstName" type="text" placeholder="First Name"/></td>
        <td id="table_info"><input v-model="lastName" type="text" placeholder="Last Name"/></td>
        <td id="table_info"><input v-model="userRole" type="text" placeholder="User Role"/></td>
        <td id="table_info"><input v-model="emailAdd" type="text" placeholder="Email Address"/></td>
      </tr>
    </tbody>
    </table>
    </body>
        
        
    </center> 
</template>
<script>
export default {
    data(){

        return{
            firstName: null,
            lastName: null,
            userRole: null,
            emailAdd: null
        }        
    },

    methods:{
        editUser(id){
            let edit = {
                userID: id,
                firstName:this.firstName,
                lastName:this.lastName,
                userRole:this.userRole,
                emailAdd:this.emailAdd
            };
            this.$store.dispatch('editUser',edit)
        },
    },

    computed:{
        getUser(){
            this.$store.dispatch('getUser', $cookies.get('userID'))
        }
    },
    mounted(){
        this.getUser
    }
}
</script>
<style scoped>

#butt{
    border: solid 2px black;
    border-radius: 30px;
    background-color: rgb(8, 196, 253);
    border-color: black;
    color: black;
}

#table_info{
    border: solid 2px rgb(8, 196, 253);

}

#headers{
    color: white;
    border: solid 2px rgb(8, 196, 253)
}

#c2,#c3{
    background-color:rgb(8, 196, 253) ;
}

#bod{
    background-color: black;
    height: 100vh;
}
    .main {
  display: grid;
  place-items: center;
  width: 190px;
  height: 254px;
}

.card {
  width: 190px;
  height: 254px;
  background: #FAF1F6;
  padding: 2rem 1.5rem;
  transition: box-shadow .3s ease, transform .2s ease;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-avatar {
  background: radial-gradient(rgb(8, 196, 253),rgb(8, 196, 253),rgb(8, 196, 253),rgb(8, 196, 253),rgb(8, 196, 253));
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform .2s ease;
}

.card-avatar svg {
  padding-top: 5px;
  height: 80px;
  width: 100px;
  fill: black;
}

.card-social {
  display: flex;
  justify-content: space-around;
  width: 190px;
  margin-top: 10%;
  text-align: center;
}

.card-social-icon {
  list-style: none;
  color: black;
  font-size: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-social-icon svg {
  display: block;
  height: 20px;
  width: 20px;
  fill: #515F65;
  cursor: pointer;
}

.card-title {
  color: #000000;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 2rem;
  margin-top: 5px;
}

.card-subtitle {
  color: #000000;
  font-size: 1.0em;
}

.address-icon {
  fill: #000000;
  height: 150px;
  width: 100px;
  list-style: none;
  justify-content: space-around;
}

.address-title {
  color: #000000;
  font-size: 1.0em;
  font-weight: 600;
  list-style: none;
}

.address {
  color: #000000;
  font-size: 0.8em;
  list-style: none;
  padding-left: 20px;
  ;
}

.contact-title {
  color: #000000;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 45%;
  padding-bottom: 5px;
}

.card-contact {
  color: #000000;
  font-size: 0.8em;
}

.icon-contact {
  list-style: none;
  display: flex;
  align-items: center;
}

.icon-contact svg {
  display: block;
  height: 18px;
  width: 18px;
  fill: #000000;
  padding-right: 5px;
}

.card:hover {
  box-shadow: 0 10px 50px #23232333;
}

.card:hover .card-info {
  transform: translateY(-5%);
}

.card-avatar:hover {
  transform: scale(1.1);
}

#cs1:hover {
  transform: scale(2.0);
}

#cs2:hover {
  transform: scale(2.0);
}

#cs3:hover {
  transform: scale(2.0);
}

.main:hover #c1 {
  transform: translateX(0px);
}

.main:hover #c2 {
  transform: translateX(200px);
}

.main:hover #c3 {
  transform: translateX(-200px);
}
</style>