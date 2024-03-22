import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
let baseUrl = 'http://localhost:8050'
// let baseUrl = 'https://capstone-nmkq.onrender.com'
export default createStore({
  state: {
    Flights:[],
    Users:[],
    singleFlight:[],
    cart:[],
    login: false,
    singleUser:[]
  },
  getters: {
  },
  mutations: {
    setFlights(state,data){
      state.Flights=data
    },
    setUsers(state,data){
      state.Users=data
    },
    setLogin(state,data){
      state.login = data
    },
    setSingleFlight(state,data){
      state.singleFlight = data
    },

    setSingleUser(state,data){
      state.singleUser= data
    },

    setCart(state, data) {
      state.cart=data;
    },

  },
  actions: {

    // ALL FLIGHT RELATED
    async getFlights({commit}){
      try{
        const{data} = await axios.get(baseUrl+'/flights')
        console.log(data)
        commit("setFlights",data)
      }catch(error){
        console.error('error fetching flights',error)
      }
    },
    async getFlight({commit},id){
      try{
        await axios.get(baseUrl+'/flights/'+id)
      }catch(error){
        console.error('error fetching flight',error)
    }
  }, 

  async getSingleFlight({commit},flightID){
    let {data} = await axios.get(baseUrl+ '/flights/'+flightID)
    console.log(data)
    commit("setSingleFlight",data)
  },

  async addFlight({commit},newFlight){
    try{
      const {data} = await axios.post(baseUrl+'/flights',newFlight)
      window.location.reload()
    }catch(error){
      console.error('cannot add flight',error)
    }
  },
  async deleteFlight({commit},flightID){
    try{
      await axios.delete(baseUrl+'/flights/'+flightID)
      window.location.reload()
    }catch(error){
      console.error('cannot delete flight because it doesnt exist', error)
    }
  },
  async editFlight({commit},update){
    try{
      await axios.patch(baseUrl+'/flights/'+update.id,update)
      window.location.reload()
    }catch(error){
      console.error('cannot update flight because you broke, stay in economy', error);
    }
  },

  // ALL USER RELATED
  async getUsers({commit}){
    try{
      const{data} = await axios.get(baseUrl+'/users')
      commit("setUsers",data)
    }catch(error){
      console.error('error fetching users because they dont exist',error)
    }
  },
  async getUser({commit},userID){
    try{
      let {data} = await axios.get(baseUrl+'/users/'+userID)
      console.log(data)
      commit("setSingleUser", data)
    }catch(error){
      console.error('error fetching user because the user does not exist',error)
  }
  },
  async addUser({commit},newUser){
      try{
        const {data} = await axios.post(baseUrl+'/users',newUser);
        commit("setLogin",true);
        await router.push('/')
        window.location.reload()
      }catch(error){
        console.error('cannot add user ',error)
      }
    },
    async deleteUser({commit},userID){
      try{
        await axios.delete(baseUrl+'/users/'+userID)
        window.location.reload()
      }catch(error){
        console.error('cannot delete user because it doesnt exist', error)
      }
    },
    async editUser({commit},update){
        await axios.patch(baseUrl+'/users/'+update.userID,update)
        window.location.reload()
    },

    // LOGIN AND LOGOUT
    async login({commit},user){
      let {data} = await axios.post(baseUrl+'/login',user);
      console.log(data);
      if(data.token !== undefined){
        $cookies.set("jwt", data.token);
        let[{userRole}] = data.user;
        $cookies.set("userRole", userRole);
        let[{userID}] = data.user;
        $cookies.set("userID", userID);
        let[user] = data.user;
        $cookies.set("user", user);
        alert(data.msg);
        await router.push("/");
      }else{
        alert(data.msg);
        $cookies.remove("jwt")
        $cookies.remove("user")
        $cookies.remove("userRole")
      }
      commit("setLogin",true);
      window.location.reload()
    },
    async logout(context){
      $cookies.remove("jwt");
      // let cookies = $cookies.key();
      // console.log(cookies);
      $cookies.remove("jwt");
      $cookies.remove("userID");
      $cookies.remove("userRole");
      $cookies.remove("user");
      window.location.reload()
      alert("you have logged out")
    },
    
    // CART
    async addToCart({commit},payload) {

      let {data}= await axios.post(`${baseUrl}/cart/${payload.flightID}?users=${payload.userID}`);
      console.log(data)
      window.location.reload()
    },

    async getUserCart({commit},userID){
      try{
       const response= await axios.get(baseUrl+'/cart/'+userID);
        commit('setCart', response.data)
      }catch(error){
       console.error("Error in getting users cart",error) 
      }
    },

    // async getUserCart({commit},userID) {
    //   try {
    //     const response = await axios.get(`/cart/${userID}`);
    //     commit('setUserCart', response.data);
    //   } catch (error) {
    //     console.error('Error in getting the users cart:', error);
    //   }
    // },
    
    async deleteFromCart({commit},cartID) {
      try {
        if (cartID === undefined || cartID === null){
          throw new Error ("Invalid cartID")
        }
        await axios.delete(baseUrl+"/cart/"+cartID)
        window.location.reload();
      }catch (error) {
        console.error('Error in deleting the item from the users cart:', error);
      }
    },

    async clearUserCart({commit},userID) {
      await axios.delete(baseUrl+"/delete/"+userID)
    },

  },
    modules: {
    }
})
