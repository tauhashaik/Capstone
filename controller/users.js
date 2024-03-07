import bcrypt from 'bcrypt';
import {getUsers, getUser, addUser, editUser, deleteUser} from '../models/users-database.js'

export default{
    getUsers: async(req,res)=>{
        res.send(await getUsers())
    },

    getUser: async(req,res)=>{
        res.send(await getUser(+req.params.id))
    },

    addUser: async(req, res)=>{
        const {firstName, lastName, userRole, emailAdd, userPass} = req.body;
        bcrypt.hash(userPass, 10, async(err,hash)=>{
            if(err) throw err
            await addUser(firstName, lastName, userRole, emailAdd, hash)
            res.send({
                msg: "Your account has been created"
            })
        })
        // await addUser(firstName, lastname, emailAdd, userPass);
        // res.send(await getUsers())
    },

    deleteUser: async(req, res)=>{
        res.send(await deleteUser(req.params.id))
    },

    editUser: async(req,res)=>{ 
        let {firstName, lastName, userRole, emailAdd, userPass} = req.body
        let [user] = await getUser(+req.params.id)
        
        firstName ? firstName= firstName: {firstName}=user
        
        lastName ? lastName= lastName: {lastName}=user
        
        userRole ? userRole= userRole: {userRole}=user
        
        emailAdd ? emailAdd= emailAdd: {emailAdd}=user
        
        // userPass ? userPass= userPass: {userPass}=user
        // console.log(firstName);
    
        await editUser(firstName, lastName, userRole, emailAdd, userPass,+req.params.id,user)
            
        res.json(await getUsers())
    },

    loginUser: async(req,res)=>{
        
    }

}