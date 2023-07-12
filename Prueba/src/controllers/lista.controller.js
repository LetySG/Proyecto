import Role from "../models/Role";
import User from "../models/User";



export const lista=async(req,res)=>{
    const lista= await User.find({roles:{$in: ['tutor', 'orientador']}}).lean();
    console.log(lista)
    res.render('listaUsers',{lista});
}

/**
export const lista=async(req,res)=>{
    const lista= await Role.find().lean()
    
    res.render('listaUsers',{lista})
} */