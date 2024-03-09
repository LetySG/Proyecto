import Role from "../models/Role";
import User from "../models/User";
import router from "../routes/admin.routes";

//Tutores
//Busqueda
export const lista = async (req, res) => {
  const lista = await User.find({
    roles: { $all: ["64bde90cb1dd9380f468160e"] },
  }).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("listaUsers", { lista });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Editar Usuario
export const editarT = async (req, res) => {
  const {
    recipientId,
    recipientName,
    recipientApe1,
    recipientApe2,
    recipientLicenciatura,
    recipientGrado,
    recipientGrupo,
    recipientTurno,
    recipientCorreo,
  } = req.body;
  await User.findByIdAndUpdate(recipientId, {
    nombre: recipientName,
    primerApellido: recipientApe1,
    segundoApellido: recipientApe2,
    licAsig: recipientLicenciatura,
    gradoAsig: recipientGrado,
    grupoAsig: recipientGrupo,
    turnoAsig: recipientTurno,
    email: recipientCorreo,
  });
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','Los cambios fueron realizados de manera correcta')
    res.redirect("/lista/Usuarios");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Eliminar Usuario
export const eliminarUA = async (req, res) => {
  const eliminarUA = await User.findByIdAndDelete(req.params.id);
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','El usuario fue dado de baja')
    res.redirect("/lista/Usuarios/Orientadores");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Orientadores
//Busqueda
export const listaO = async (req, res) => {
  const listaO = await User.find({
    roles: { $all: ["64bde90cb1dd9380f468160d"] },
  }).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("listaUsersO", { listaO });
  } else {
    
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Editar Usuario
export const editarO = async (req, res) => {
  const {
    recipientId,
    recipientName,
    recipientApe1,
    recipientApe2,
    recipientLicenciatura,
    recipientTurno,
    recipientCorreo,
  } = req.body;
  console.log(req.body);
  await User.findByIdAndUpdate(recipientId, {
    nombre: recipientName,
    primerApellido: recipientApe1,
    segundoApellido: recipientApe2,
    licAsig: recipientLicenciatura,
    turnoAsig: recipientTurno,
    email: recipientCorreo,
  });
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.redirect("/lista/Usuarios/Orientadores");
  } else {
    res.redirect("/");
  }
};
//Eliminar
export const eliminarUO = async (req, res) => {
  const eliminarUO = await User.findByIdAndDelete(req.params.id);
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','El usuario fue dado de baja')
    res.redirect("/lista/Usuarios/Orientadores");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

