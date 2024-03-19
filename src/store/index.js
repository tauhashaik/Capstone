import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
let baseUrl = 'http://localhost:8050'
// let baseUrl = 'https://capstone-nmkq.onrender.com'
export default createStore({
  state: {
    Flights:[],
    Users:[],
    login: false
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
    }
  },
  actions: {
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

  async getUsers({commit}){
    try{
      const{data} = await axios.get(baseUrl+'/users')
      commit("setUsers",data)
    }catch(error){
      console.error('error fetching users because they dont exist',error)
    }
  },
  async getUser({commit}){
    try{
      await axios.get(baseUrl+'/users/'+id)
    }catch(error){
      console.error('error fetching user because the user does not exist',error)
  }
  },
  async addUser({commit}){
      try{
        const {data} = await axios.post(baseUrl+'/users',newUser)
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
      try{
        await axios.patch(baseUrl+'/users/'+update.id,update)
        window.location.reload()
      }catch(error){
        console.error('cannot update user because it doesnt exist', error);
      }
    },
    async login({commit},user){
      let {data} = await axios.post(baseUrl+'/login',user);
      console.log(data);
      if(data.token !== undefined){
        $cookies.set("jwt", data.token);//
        let[{userRole}] = data.user;
        $cookies.set("userRole", userRole);
        // let[{user}] = data.user;
        // $cookies.set("user", user);
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
      $cookies.remove("userRole");
      $cookies.remove("user");
      window.location.reload()
      alert("you have logged out")
    }
  },
    modules: {
    }
})
