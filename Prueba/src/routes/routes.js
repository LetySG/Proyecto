import { Router } from 'express';
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


//Vista de Principal-Información
router.get('/', (req,res)=>{
    res.render('index');
})

//Rutas Registro Alumnos
router.get('/registro/alumno',
    (req,res)=>{
        res.render('registroA');
})
//Ruta Registro Coordinador
router.get('/registro/orientador',(req,res)=>
{
    res.render('acceso')
})
//Ruta Registro Coordinador
router.get('/registro/coordinador',(req,res)=>
{
    res.render('registroC')
})
//Ruta Registro Coordinador
router.get('/registro/tutor',(req,res)=>{
    res.render('registroT')
})
/*
router.post('/registro/alumno/add',async(req,res)=>{
    const registroA= RegistroA(req.body)
    await registroA.save();
    res.send('save') ;  
 });

 router.post('/registro/coordinador/add',async(req,res)=>{
    const registroC= RegistroC(req.body)
    await registroC.save();
    res.send('save') ;  
 });
 router.post('/registro/tutor/add',async(req,res)=>{
    const registroT= RegistroT(req.body)
    await registroT.save();
    res.send('save') ;  
 });router.post('/registro/orientador/add',async(req,res)=>{
    const registroO = RegistroO(req.body)
    await registroO.save();
    res.send('save') ;  
 });

*/








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
}); 
await newImage.save();
await fs.unlink(req.file.path);
res.redirect('upload');
});




export default router;