import File from "../models/File";


const cloudinary = require('cloudinary');
//CONFIGURACIÓN AL SERVIDOR 'CLOUDINARY'
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret:process.env.api_secret
});

//CONFIG MODULO FS-EXTRA
const fs = require("fs-extra");

/*
const pdfPrinter= require("pdfmake");
const fs=require("fs")
*/

export const upload=async (req,res)=>{
    const files = await File.find().lean();
    res.render('upload',{files});
    }

export const Upload=async (req,res)=>{
   
        const {title,description}=req.body;
        console.log(req.file);
        const result=await cloudinary.v2.uploader.upload(req.file.path);
        console.log(result)
        const newFile= new File({
            title,
            description,
            imageURL:result.url,
            public_id:result.url
        }); 
        await newFiles.save();
        await fs.unlink(req.file.path);
        res.redirect('upload');
        }


        export const Uploaded= async(req,res)=>{
            const files= await File.find().lean();
            console.log(files);
             res.render('files',{files});
         };