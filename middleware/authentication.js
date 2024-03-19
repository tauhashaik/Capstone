import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import {verifyPass, getUserRole} from '../models/users-database.js'


const auth = async(req,res,next)=>{
    const {userPass, emailAdd}= req.body
    const hashedPass = await verifyPass(emailAdd)
    let userRole = await getUserRole(emailAdd)
    bcrypt.compare(userPass, hashedPass, (err,result)=>{
        if(err) throw err
        if(result===true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd: emailAdd},
                process.env.SECRET_KEY,{expiresIn: '1hr'});

                // sets the token in a cookie for both frontend and backend to access.
                res.cookie('token',token, {httpOnly:false, expiresIn: '1hr'});

                // sends this response back to the user.
                res.send({
                    token:token,
                    msg: "You have sucessfully signed in",
                    user: userRole
                })
                next()
        }else{
            res.send({msg:"The email address or password is incorrect"})
        }
    })
}

const authenticate = (req,res,next) =>{
    let {cookie}= req.headers
    let tokenInHeader=cookie && cookie.split('=')[1]
    if (tokenInHeader===null)res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,
    (err,emailAdd)=>{
        if(err) return res.sendStatus(403)
        req.emailAdd=emailAdd
        next()
    } )
}

export {auth, authenticate}