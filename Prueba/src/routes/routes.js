import { Router } from 'express';
import Image from '../models/Image';
import InicioSesion from '../models/InicioSesion';
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




//Rutas Inicio Sesión
router.get('/iniciarSesion',
    (req,res)=>{
        res.render('InicioSesion');
})
router.post('/iniciarSesion/add',async(req,res)=>{
    const inicioS = InicioSesion(req.body)
    await inicioS.save();
    res.send('save') ;
});

//Rutas Registro Alumnos
router.get('/registro/alumno',
    (req,res)=>{
        res.render('RegistroA');
})
router.post('/registro/alumno/add',async(req,res)=>{
    const registroA= RegistroA(req.body)
    await registroA.save();
    res.send('save') ;  
 });

//Rutas Registro Coordinador
router.get('/registro/coordinador',(req,res)=>{
    res.render('RegistroC');
});
router.post('/registro/coordinador/add',async(req,res)=>{
    const registroC= RegistroC(req.body)
    await registroC.save();
    res.send('save') ;  
 });
//Rutas Registro Tutores
router.get('/registro/tutor',(req,res)=>{
    res.render('RegistroT');
});
router.post('/registro/tutor/add',async(req,res)=>{
    const registroT= RegistroT(req.body)
    await registroT.save();
    res.send('save') ;  
 });
//Rutas Registro Orientador
router.get('/registro/orientador',(req,res)=>{
    res.render('RegistroO');
});
router.post('/registro/orientador/add',async(req,res)=>{
    const registroO = RegistroO(req.body)
    await registroO.save();
    res.send('save') ;  
 });


//Vista de Principal-Información
router.get('/', (req,res)=>{
    res.render('index');
})
//Vista para mostrar los archivos
router.get('/files', async(req,res)=>{
   const image= await Image.find().lean();
   console.log(image);
    res.render('files',{image});
});
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




export default router;