import { Router } from 'express';
import  Task from '../models/Task';
import Image from '../models/Image';
const router=Router();
const cloudinary = require('cloudinary');
//SERVER CONFIG 'CLOUDINARY'
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret:process.env.api_secret
});
//CONFIG MODULO FS-EXTRA
const fs = require("fs-extra");


//RUTAS GET

//Vista de Principal-Información
router.get('/', (req,res)=>{
    res.render('index');
})

//Vista para mostrar los archivos
router.get('/files', async(req,res)=>{
   const image= await Image.find().lean();
   console.log(image);
    res.render('files',{image});
})

//Vista de registro
router.get('/signIn',(req,res)=>{
    res.render('signIn')
})

//vista inicio de sesion
router.get('/login',(req,res)=>{
    res.render('login')
});

//vista formulario subir imagen
router.get('/upload',(req,res)=>{
    res.render('upload');

    
});




//Rutas POST  
//Ruta que recibe datos del formulario
router.post('/upload',async(req,res)=>{
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
});

router.post('/tasks/add',async(req,res)=>{
   const task = Task(req.body)
   await task.save();
   res.redirect('/signIn')
});



export default router;