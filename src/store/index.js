import { createStore } from 'vuex'
import axios from 'axios'
let baseUrl = 'https://capstone-nmkq.onrender.com'
export default createStore({
  state: {
    flights:[]
  },
  getters: {
  },
  mutations: {
    setFlights(state,data){
      state.flights = data
    }
  },
  actions: {
    async getFlights({commit}){
      try{
        const{data} = await axios.get(baseUrl+'/flights')
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
      const {data} = axios.post(baseUrl+'/flights',newFlight)
      window.location.reload()
    }catch(error){
      console.error('cannot add flight',error)
    }
  },
  async deleteFlight({commit},id){
    try{
      await axios.delete(baseUrl+'/flights/'+id)
      window.location.reload()
    }catch(error){
      console.error('cannot delete flight because it doesnt exist', error)
    }
  },
  async editFlight({commit},update){
    try{
      await axios.patch(baseUrl+'/flights'+update.id,update)
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
        const {data} = axios.post(baseUrl+'/users',newUser)
        window.location.reload()
      }catch(error){
        console.error('cannot add user ',error)
      }
    },
    async deleteUser({commit}){
      try{
        await axios.delete(baseUrl+'/users/'+id)
        window.location.reload()
      }catch(error){
        console.error('cannot delete user because it doesnt exist', error)
      }
    },
    async editUser({commit},update){
      try{
        await axios.patch(baseUrl+'/users'+update.id,update)
        window.location.reload()
      }catch(error){
        console.error('cannot update user because it doesnt exist', error);
      }
    }

  },
    modules: {
    }
})
