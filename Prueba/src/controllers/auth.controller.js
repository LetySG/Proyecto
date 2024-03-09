import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//Metodos 'Registro Alumno'
export const signUp = async (req, res) => {
  res.render("registroA");
};
export const signup = async (req, res) => {
  const {
    nombre,
    primerApellido,
    segundoApellido,
    licenciatura,
    grado,
    matricula,
    grupo,
    turno,
    email,
    contraseña,
    roles,
  } = req.body;
  //Crea un objeto de tipo 'User'
  const newUser = new User({
    nombre,
    primerApellido,
    segundoApellido,
    licenciatura,
    grado,
    matricula,
    grupo,
    turno,
    email,
    contraseña: await User.encryptContraseña(contraseña),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } 
  //Se guarda el nuevo usuario en la B
  const saveUser = await newUser.save();
  req.flash('success_msg','Registro Exitoso')
  res.redirect("/signin");
};

//Metodos 'Registro Coordinador'
export const registroC = async (req, res) => {
  res.render("registroC");
};
export const registroc = async (req, res) => {
  const { nombre, primerApellido, segundoApellido, email, contraseña, roles } =
    req.body;
  const newUser = new User({
    nombre,
    primerApellido,
    segundoApellido,
    email,
    contraseña: await User.encryptContraseña(contraseña),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name:"coordinador" });
    newUser.roles = [role._id];
  }
const saveUser = await newUser.save();
  req.flash('success_msg','Usuario Registrado Exitosamente')
  res.render("registroC");
};
//Metodos 'Registro Orientador'
export const registroO = async (req, res) => {
  res.render("registroO");
};
export const registroo = async (req, res) => {
  const {
    nombre,
    primerApellido,
    segundoApellido,
    licAsig,
    turnoAsig,
    email,
    contraseña,
    roles,
  } = req.body;
  const newUser = new User({
    nombre,
    primerApellido,
    segundoApellido,
    licAsig,
    turnoAsig,
    email,
    contraseña: await User.encryptContraseña(contraseña),
  });
  if (roles) {
    const foundRoles = await Role.findOne({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "orientador" });
    newUser.roles = [role._id];
  }
  const saveUser = await newUser.save();
  req.flash('success_msg','Usuario Registrado Exitosamente')
  res.render("registroO");
};
//Metodos 'Registro Tutor'
export const registroT = async (req, res) => {
  res.render("registroT");
};
export const registrot = async (req, res) => {
  const {
    nombre,
    primerApellido,
    segundoApellido,
    licAsig,
    gradoAsig,
    grupoAsig,
    turnoAsig,
    email,
    contraseña,
    roles,
  } = req.body;
  const newUser = new User({
    nombre,
    primerApellido,
    segundoApellido,
    licAsig,
    gradoAsig,
    grupoAsig,
    turnoAsig,
    email,
    contraseña: await User.encryptContraseña(contraseña),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "tutor" });
    newUser.roles = [role._id];
  }
  const saveUser = await newUser.save();
  req.flash('success_msg','Usuario Registrado Exitosamente');
  res.render("iniciarSesion");
};

export const signIn = async (req, res) => {
  res.render("iniciarSesion");
};
export const signin=passport.authenticate('local',{
failureRedirect:'/signin',
successRedirect: '/lista/Usuarios',
failureFlash: true
});
//Función Cerrar Sesión
export const CerrarSesion=(req,res)=>  {
  
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success_msg','Ha cerrado sesion');
res.redirect('/');
  }
  )
}