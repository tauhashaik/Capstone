import {getUsers, getUser, addUser, editUser, deleteUser} from '../models/users-database'

export default{
    getUsers: async(req,res)=>{
        res.send(await getUsers())
    },

    getUser: async(req,res)=>{
        res.send(await getUser(+req.params.id))
    },

    addUser: async(req, res)=>{
        const {userID, firstName, lastname, emailAdd, userPass} = req.body;
        await addUser(userID, firstName, lastname, emailAdd, userPass);
        res.send(await getUsers())
    },

    deleteUser: async(req, res)=>{
        res.send(await deleteUser(req.params.id))
    },

    editUser: async(req, res)=>{
        async(req,res)=>{ 
            const [user] = await getProduct(+req.params.id)
    
            let {userID, firstName, lastname, emailAdd, userPass} = req.body
    
            userID ? userID=userID: {userID}=user
    
            firstName ? firstName= firstName: {firstName}=user
    
            lastname ? lastname= lastname: {lastname}=user
    
            emailAdd ? emailAdd= emailAdd: {emailAdd}=user
    
            userPass ? userPass= userPass: {userPass}=user
    
            await editUser(userID, firstName, lastname, emailAdd, userPass,+req.params.id)
            
            res.json(await getUsers())
        }
    }
}