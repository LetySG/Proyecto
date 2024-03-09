import Clave from "../models/Clave";
import User from "../models/User";
import router from "../routes/admin.routes";

//Configuraciones de Contraseña Alumnos
//Render vista
export const contraseñaA = async (req, res) => {
  const clave = await Clave.findById(req.params.id);

  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
  
    res.render("config", { contraseñaA });
  } else {
    
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Render vista Guardar
export const ContraseñaA = async (req, res) => {
  const { claveA, confirm_claveA } = req.body;
  const newclaveA = new Clave({
    claveA,
    confirm_claveA,
  });
  await newclaveA.save();

  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash("success_msg","Clave guardada exitosamente")
    res.render("config");
    res.redirect("/config");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Render vista restablecer contraseña
export const eliminarCA = async (req, res) => {
  const eliminarCA = await Clave.findOneAndDelete(Clave.claveA);
  req.flash("error","Clave eliminada")
 
  res.redirect("/config");
};
//Configuraciones de Contraseña Orientadores
//Render vista
export const contraseñaO = async (req, res) => {
  res.render("configO");
};
//Render vista Guardar
export const ContraseñaO = async (req, res) => {
  const { claveO, confirm_claveO } = req.body;
  const newClaveO = new Clave({
    claveO,
    confirm_claveO,
  });
  await newClaveO.save();
  res.redirect("/config/orientadores");
};
//Render vista restablecer contraseña
export const eliminarCO = async (req, res) => {
  const eliminarCO = await Clave.findOneAndDelete(Clave.claveO);
  res.send("clave eliminada");
};
//Configuraciones de Contraseña Orientadores
//Render vista
export const contraseñaT = async (req, res) => {
  res.render("configT");
};
export const ContraseñaT = async (req, res) => {
  const { claveT, confirm_claveT } = req.body;
  const newClaveT = new Clave({
    claveT,
    confirm_claveT,
  });
  await newClaveT.save();
  
  res.redirect("/config/tutores");
};
//Render vista restablecer contraseña
export const eliminarCT = async (req, res) => {
  const eliminarCT = await Clave.findOneAndDelete(Clave.claveT);
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.send("clave eliminada");
  } else {
    
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Funcion Acceder registro a traves de vista Acceso Alumnos
export const Acceso = async (req, res) => {
  res.render("acceso");
};
export const accesoA = async (req, res) => {
  const claveFound = await Clave.findOne({ claveA: req.body.claveA });
  res.redirect("/signup");
};
//Acceso Orientadores
export const AccesoO = async (req, res) => {
  res.render("accesoO");
};
export const accesoO = async (req, res) => {
  const claveFound = await Clave.findOne({ claveO: req.body.claveO });
  const matchClaveO = await Clave.compareClaveO(
    req.body.claveO,
    claveFound.claveO
  );
  res.redirect("/registro/user/orientador");
};
//Acceso Tutores
export const AccesoT = async (req, res) => {
  res.render("accesoT");
};
export const accesoT = async (req, res) => {
  const claveFound = await Clave.findOne({ claveT: req.body.claveT });
  const matchClaveT = await Clave.compareClaveT(
    req.body.claveT,
    claveFound.claveT
  );
  res.redirect("/registro/user/tutor");
};
