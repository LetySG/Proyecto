import Role from "../models/Role";
import User from "../models/User";


/*
const pdfPrinter= require("pdfmake");
const fs=require("fs")
*/

export const lista=async(req,res)=>{
    const lista= await User.find({roles:{$in: ['tutor', 'orientador']}}).lean();    
//console.log(lista)
    res.render('listaUsers',{lista});
}



export const id=async(req,res)=>{
    const id= await User.findById({_id:"64ace0f7ab08c634cf71e721"})
console.log(id)
res.render('#exampleModal',{id});
}

/**
export const lista=async(req,res)=>{
    const lista= await Role.find().lean()
    
    res.render('listaUsers',{lista})
} */