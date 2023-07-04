import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';


//Metodos 'Registro Alumno'
export const signUp=async (req,res)=>{
     res.render('registroA');   
}
export const signup=async (req,res)=>{
const {nombre,primerApellido,segundoApellido,licenciatura,grado,matricula,grupo,turno,email,contraseña,roles}= req.body;
//const userFound= User.find({email})
const newUser = new User({
     nombre,
     primerApellido,
     segundoApellido,
     licenciatura,
     grado,
     matricula,
     grupo,
     turno,
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
 res.render('registroA')
}
//Metodos 'Registro Coordinador'
export const registroC=async (req,res)=>{
     res.render('registroC');   
}
export const registroc=async (req,res)=>{
const {nombre,primerApellido,segundoApellido,email,contraseña,roles}= req.body;
const newUser = new User({
     nombre,
     primerApellido,
     segundoApellido,
     email,
     contraseña: await User.encryptContraseña(contraseña)
})
if (roles){
     const foundRoles =  await Role.find({name:{$in: roles}})
     newUser.roles= foundRoles.map(role=> role._id)
}else{
     const role = await Role.findOne({name:"coordinador"})
     newUser.roles=[role._id] 
}
const saveUser= await newUser.save();
res.message('s')
req.flash('success_msg','registro hecho');
console.log(saveUser);
 res.render('registroC')
}
//Metodos 'Registro Orientador'
export const registroO=async (req,res)=>{
     res.render('registroO');   
}
export const registroo=async (req,res)=>{
const{nombre,primerApellido,segundoApellido,licAsig,gradoAsig,grupoAsig,turnoAsig,email,contraseña,roles}= req.body;
//const userFound= User.find({email})
const newUser = new User({
     nombre,
     primerApellido,
     segundoApellido,
     licAsig,
     gradoAsig,
     grupoAsig,
     turnoAsig,
     email,
     contraseña: await User.encryptContraseña(contraseña)
})
if (roles){
     const foundRoles =  await Role.find({name:{$in: roles}})
     newUser.roles= foundRoles.map(role=> role._id)
}else{
     const role = await Role.findOne({name:"orientador"})
     newUser.roles=[role._id] 
}
const saveUser= await newUser.save();
console.log(saveUser);
 res.render('registroO')
}
//Metodos 'Registro Tutor'
export const registroT=async (req,res)=>{
     res.render('registroT');   
}
export const registrot=async (req,res)=>{
const{nombre,primerApellido,segundoApellido,licAsig,gradoAsig,grupoAsig,turnoAsig,email,contraseña,roles}= req.body;
const newUser = new User({
     nombre,
     primerApellido,
     segundoApellido,
     licAsig,
     turnoAsig,
     email,
     contraseña: await User.encryptContraseña(contraseña)
})
if (roles){
     const foundRoles =  await Role.find({name:{$in: roles}})
     newUser.roles= foundRoles.map(role=> role._id)
}else{
     const role = await Role.findOne({name:"tutor"})
     newUser.roles=[role._id] 
}
const saveUser= await newUser.save();
console.log(saveUser);
 res.render('registroT')
}



export const signIn=async (req,res)=>{
     res.render('iniciarSesion');   
}


export const signin = async (req,res)=>{

const userFound = await User.findOne({email:req.body.email}).populate("roles");
 if (!userFound) return res.status(400).send({message:"user not found"})

const matchContraseña= await User.compareContraseña(req.body.contraseña,userFound.contraseña)
 console.log(userFound)

 if(!matchContraseña)return 
 res.status(401).send ({message:"invalid password"})
 //({token:null,message:"invalid password"})
// res.send({token:''})

}
