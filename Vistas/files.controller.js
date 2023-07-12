/*import { Router } from "express";
const router=Router()

const cloudinary = require('cloudinary');
//CONFIGURACIÓN AL SERVIDOR 'CLOUDINARY'
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret:process.env.api_secret
});
//CONFIG MODULO FS-EXTRA
const fs = require("fs-extra");


//Metodos get subir imagen
export const upload=async (req,res)=>{
    const image = await Image.find().lean();
    res.render('upload',{image});
}
//Metodos post recibe datos de  imagen
export const Upload=async(req,res)=>{
    const {title,description}=req.body;
    console.log(req.file);
    const result=await cloudinary.v2.uploader.upload(req.file.path);
    console.log(result)
    const newImage= new Image({
        title,
        description,
        imageURL:result.url,
        public_id:result.url
    }); 
    await newImage.save();
    await fs.unlink(req.file.path);
    res.redirect('upload');
    }
    
//Metodo para mostrar los archivos
export const Uploaded= async(req,res)=>{
    const image= await Image.find().lean();
    console.log(image);
     res.render('files',{image});
 };

export default router;*/