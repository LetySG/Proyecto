import RegistroA from "../models/RegistroA";
import RegistroC from "../models/RegistroC";
import RegistroT from "../models/RegistroT";
import RegistroO from "../models/RegistroO";
import InicioSesion from "../models/InicioSesion";


//Funciones Registro Alumnos
export const  inicioS = async (req,res)=>{
    res.render('iniciarSesion');
}
export const inicios = async(req,res)=>{
   const{email,contraseña,roles}=req.body;
   new User({
    email,
    contraseña
   })
}
/** const inicioS = InicioSesion(req.body)
    await inicioS.save();
    res.send('save') ;  */
//Funciones Registro Alumnos
export const  registroA = async (req,res)=>{
    res.render('registroA');
}
export const registroa = async(req,res)=>{
    const registroA = RegistroA(req.body)
    await registroA.save();
    res.send('save') ; 
}
//Funciones Registro Coordinador
export const  registroC = async (req,res)=>{
    res.render('registroC');
}
export const registroc = async(req,res)=>{
    const registroC = RegistroC(req.body)
    await registroC.save();
    res.send('save') ; 
}
//Funciones Registro Tutor
export const  registroT = async (req,res)=>{
    res.render('registroT');
}
export const registrot = async(req,res)=>{
    const registroT = RegistroT(req.body)
    await registroT.save();
    res.send('save') ; 
}
//Funciones Registro Orientador
export const  registroO = async (req,res)=>{
    res.render('registroO');
}
export const registroo = async(req,res)=>{
    const registroO = RegistroO(req.body)
    await registroO.save();
    res.send('save') ; 
}