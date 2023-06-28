import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';


//Metodos GET,POST ='Registro'
export const signUp=async (req,res)=>{
     res.render('registro');   
}
export const signup=async (req,res)=>{
const {nombre,email,contraseña,roles}= req.body;
//const userFound= User.find({email})
const newUser = new User({
     nombre,
     email,
     contraseña: await User.encryptContraseña(contraseña)
})
 
if (roles){
     const foundRoles =  await Role.find({name:{$in: roles}})
     newUser.roles= foundRoles.map(role=> role._id)
}else{
     const role = await Role.findOne({name:"alumno"})
     newUser.roles=[role._id] 
}

const saveUser= await newUser.save();
console.log(saveUser);
 res.render('registro')

 const token = jwt.sign({id:saveUser._id},config.SECRET,{
     expiresIn:86400//24hrs
 })
//res.status(200).send({token});
}

export const signIn=async (req,res)=>{
     res.render('iniciarSesion');   
}


export const signin = async (req,res)=>{

     const userFound = await User.findOne({email:req.body.email}).populate("roles");
 if (!userFound) return res.status(400).send({message:"user not found"})

const matchContraseña= await User.compareContraseña(req.body.contraseña,userFound.contraseña)
 console.log(userFound)

 if(!matchContraseña)return res.status(401).send({token:null,message:"invalid password"})
 res.send({token:''})

}
