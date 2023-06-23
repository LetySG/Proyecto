import User from '../models/User'

export const signUp=async (req,res)=>{
     res.render('registro');   
}
 

export const signup=async (req,res)=>{
     const userSchema = User(req.body)
     await userSchema.save();
   
}
 