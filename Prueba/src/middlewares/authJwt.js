import jwt from 'jsonwebtoken'
import config from '../config'

import User from '../models/User'
import  Role from '../models/Role'

export const verifyToken= async (req,res,next)=>{
  const token= req.headers["x-access-token"]
 
  if (!token)return res.status(403).json({message: 'no token provided'});
   try{ 

 
 const decoded =jwt.verify(token,config.SECRET)
req.userId=decoded.id;

const user = await User.findById(req.userId,{contraseña:0});
 if(!user) return res.status(404).json({message:'usuario no encontrado'}) ;

  next();
  }catch(error){
    return res.status(401).json({message:'unaothorized'})
  }
};


export const isCoordinador= async(req,res,next)=>{
  const user= await User.findById(req.userId)
  const roles=await Role.findById({_id: {$in:user.roles}})
 for(let i=0; i< roles.length;i++){
  if (roles[i].name === "coordinador"){
    next()
  }
  return;
 }
  return res.status(403).json({message:"requiere el rol de coordinador"})
  
}