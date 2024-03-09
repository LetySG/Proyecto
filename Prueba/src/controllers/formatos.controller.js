import Formato from "../models/Formato";
//import Role from "../models/Role";
import User from "../models/User";
import Roles from "../models/User";

export const formatos = async (req, res) => {
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("SolicitudApoyoOE");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
export const GuardarDatos = async (req, res) => {
  const {
    entrevista,
    fechaA,
    actividadS,
    fechaI,
    hora,
    minutos,
    periodo,
    nomT,
    pApellido,
    sApellido,
    carrera,
    grado,
    grupo,
    turno,
    numAlumnos,
    dPonente,
    objPonencia,
    nececidades,
    dCordi,
  } = req.body;
  const newFormato = new Formato({
    entrevista,
    fechaA,
    actividadS,
    fechaI,
    hora,
    minutos,
    periodo,
    nomT,
    pApellido,
    sApellido,
    carrera,
    grado,
    grupo,
    turno,
    numAlumnos,
    dPonente,
    objPonencia,
    nececidades,
    dCordi,
  });
  await newFormato.save();
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    
   req.flash('success_msg','Los datos se han guardado exitosamente')
   res.redirect("/formato/solicitud/apoyo/Orientacion/Educativa")
    res.render("SolicitudApoyoOE", { GuardarDatos });
    
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Formato de Autorización Intervencion
export const formatoAutorizacion = async (req, res) => {
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("solicitudAI");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
export const formatoAuT = async (req, res) => {
  const {
    entrevista,
    nomT,
    pApellido,
    sApellido,
    carrera,
    grupo,
    nomA,
    planteamientoProblem,
    intervencion,
    dCordi,
    dCordiArea,
    fechaA,
  } = req.body;
  const newFormato = new Formato({
    entrevista,
    nomT,
    pApellido,
    sApellido,
    carrera,
    grupo,
    nomA,
    planteamientoProblem,
    intervencion,
    dCordi,
    dCordiArea,
    fechaA,
  });
  await newFormato.save();
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','Los datos se han guardado exitosamente')
    res.redirect("/solicitud")
  res.render("solicitudAI", { formatoAuT });} 
  else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Formato Reporte de Resultado
export const formatoReporte = async (req, res) => {
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("reporteDeResultado");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
export const formatoR = async (req, res) => {
  const { entrevista, nomT, carrera, nomA, descEstrategias, fechaEntrega }=req.body;
  const newFormato = new Formato({
    entrevista,
    nomT,
    carrera,
    nomA,
    descEstrategias,
    fechaEntrega,
  });
  await newFormato.save();
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','Los datos se han guardado exitosamente')
  res.redirect("/formato/reporte/de/resultado");
  
  res.render("reporteDeResultado", { formatoR });
} else {
  
  req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Formato entrevista Tutorial
export const entrevistaTutorial = async (req, res) => {
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("entrevistaTutorial");
  } else {
    
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

export const entrevistaT = async (req, res) => {
  const {
    entrevista,
    nomA,
    carrera,
    grado,
    grupo,
    turno,
    cicloEscolar,
    fechaI,
    telefono,
    tipoEntrevista,
    motivoEntrevista,
    otros,
    objEntrevista,
    descEntrevista,
    recomendaciones,
    compromisos,
    citaProx,
  } = req.body;
  const newFormato = new Formato({
    entrevista,
    nomA,
    carrera,
    grado,
    grupo,
    turno,
    cicloEscolar,
    fechaI,
    telefono,
    tipoEntrevista,
    motivoEntrevista,
    otros,
    objEntrevista,
    descEntrevista,
    recomendaciones,
    compromisos,
    citaProx,
  });await newFormato.save();  
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','Los datos se han guardado exitosamente')
    res.redirect("/formato/solicitud/apoyo/Orientacion/Educativa")
    res.render("entrevistaTutorial", { entrevistaT });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Formato derivación de alumnos
export const derivacionAlumnos = async (req, res) => {
 
    res.render("derivacionAlumnos");
  
};

export const derivacionA = async (req, res) => {
  const {
    entrevista,
    nomA,
    carrera,
    grado,
    grupo,
    turno,
    nomT,
    fechaD,
    servicioD,
    fechaC,
    seguimiento,
    derivacion,
  } = req.body;
  const newFormato = new Formato({
    entrevista,
    nomA,
    carrera,
    grado,
    grupo,
    turno,
    nomT,
    fechaD,
    servicioD,
    fechaC,
    seguimiento,
    derivacion,
  });
  await newFormato.save();
  req.flash('success_msg','El formato ha sido enviado')
 res.render("derivacionAlumnos", {derivacionA });
 res.redirect("/derivacion/alumnos/al/centro/de/servicios/de/la/comunidad" )};
//Reporte lista Alumnos Atendidos
export const ReporteA = async (req, res) => {
  const ReporteA = await Formato.find({
    entrevista: "Entrevista Tutorial",
  }).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    req.flash('success_msg','Los datos se han guardado exitosamente')
    res.redirect("/formato/entrevista/tutorial")
    res.render("reporteAlumnos", { ReporteA });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Reporte lista Alumnos Derivados
export const ReporteD = async (req, res) => {
  const ReporteD = await Formato.find({ entrevista: "Derivados" }).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("ListaAlumnosDerivados", { ReporteD });
  } else {
    
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//Solicitud Alumnos
export const SolicitudA = async (req, res) => {
    res.render("solicitudAcompañamiento");
  };
//Guardar datos de solicitud Alumnos
export const guardarSA = async (req, res) => {
  const {
    nomA,
    edad,
    carrera,
    grado,
    grupo,
    turno,
    telefono,
    correo,
    tipoAcompañamiento,
    tipoAcompañamientoP,
    problematicaAlumno,
    entrevista,
    status,
  } = req.body;
  const newFormato = new Formato({
    nomA,
    edad,
    carrera,
    grado,
    grupo,
    turno,
    telefono,
    correo,
    tipoAcompañamiento,
    tipoAcompañamientoP,
    problematicaAlumno,
    entrevista,
    status,
  }); 
    await newFormato.save();
     req.flash('success_msg','Tu solicitud se envio exitosamente')
    res.render("solicitudAcompañamiento", { guardarSA });
    res.redirect("/solicitud")
   };
//Lista de Solicitud de Alumnos
export const listaSolicitudAlumnos = async (req, res) => {
  const listaSolicitudAlumnos= await Formato.find({
    entrevista:"Solicitud Acompañamiento",
  }).lean();
  
  res.render("listaSolicitudA",{listaSolicitudAlumnos});
 }

//Lista de Solicitud de Alumnos Revisadas
export const listaSolicitudRevisadas= async (req, res) => {
  const listaSolicitudRevisadas= await Formato.find({
    entrevista:"Solicitud Acompañamiento",status:"Revisado"
  }).lean();
  
  res.render("listaSolicitudRevisada",{listaSolicitudRevisadas});
 }


//Lista de Solicitud de Alumnos en proceso
export const listaSolicitudEnProceso= async (req, res) => {
  const listaSolicitudEnProceso= await Formato.find({
    entrevista:"Solicitud Acompañamiento",status:"En proceso"
  }).lean();
  
  res.render("listaSolicitudEnproceso",{listaSolicitudEnProceso});
  
}


//Lista de Solicitud de Alumnos por revisar
export const listaSolicitudPorRevisar= async (req, res) => {
  const listaSolicitudPorRevisar= await Formato.find({
    entrevista:"Solicitud Acompañamiento",status:"Por revisar"
  }).lean();
  
  res.render("listaSolicitudPorRevisar",{listaSolicitudPorRevisar});
}


export const editarSolicitud = async (req, res) => {
  const { recipientId, recipientStatus } = req.body;
  await Formato.findByIdAndUpdate(recipientId, {
    status: recipientStatus
  });
  const x = "64bde90cb1dd9380f468160d";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.redirect("/lista/solicitud/alumno");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//Lista de Solicitud de Alumnos
export const listadoGeneral = async (req, res) => {
  const listadoGeneral= await Formato.find("entrevista").lean();
  res.render("listadoGeneral",{listadoGeneral});
 }