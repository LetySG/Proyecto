import { Router } from 'express';
import Image from '../models/Image';
import RegistroO from '../models/RegistroO';
import RegistroT from '../models/RegistroT';
import RegistroA from '../models/RegistroA';
import RegistroC from '../models/RegistroC';

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
/*Vista de Inicio de Sesion
router.get('/iniciarSesion',(req,res)=>{
    res.render('iniciarSesion')
})*/

//vista formulario subir imagen
router.get('/upload',async (req,res)=>{
    const image = await Image.find().lean();
    res.render('upload',{image});

    
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
});S
await newImage.save();
await fs.unlink(req.file.path);
res.redirect('upload');
});



router.post('/registro-orientador/add',async(req,res)=>{
    const registroO = RegistroO(req.body)
    await registroO.save();
    res.send('save') ;  
 });

 

export default router;