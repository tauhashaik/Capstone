import bcrypt from 'bcrypt';
import {getUsers, getUser, addUser, editUser, deleteUser} from '../models/users-database'

export default{
    getUsers: async(req,res)=>{
        res.send(await getUsers())
    },

    getUser: async(req,res)=>{
        res.send(await getUser(+req.params.id))
    },

    addUser: async(req, res)=>{
        const {firstName, lastname, userRole, emailAdd, userPass} = req.body;
        bcrypt.hash(userPass, 10, async(err,hash)=>{
            if(err) throw err
            await addUser(firstName, lastname, userRole, emailAdd, hash)
            res.send({
                msg: "Your account has been Created"
            })
        })
        // await addUser(firstName, lastname, emailAdd, userPass);
        // res.send(await getUsers())
    },

    deleteUser: async(req, res)=>{
        res.send(await deleteUser(req.params.id))
    },

    editUser: async(req, res)=>{
        async(req,res)=>{ 
            const [user] = await getUsers(+req.params.id)
    
            let {userID, firstName, lastname, userRole, emailAdd, userPass} = req.body
    
            userID ? userID=userID: {userID}=user
    
            firstName ? firstName= firstName: {firstName}=user
    
            lastname ? lastname= lastname: {lastname}=user

            userRole ? userRole= userRole: {userRole}=user
    
            emailAdd ? emailAdd= emailAdd: {emailAdd}=user
    
            userPass ? userPass= userPass: {userPass}=user
    
            await editUser(userID, firstName, lastname, userRole, emailAdd, userPass,+req.params.id)
            
            res.json(await getUsers())
        }
    }
}