import { copyFile, unlink } from "fs";
import File from "../models/File";
const path = require("path");

//CONFIG MODULO FS-EXTRA
const fs = require("fs-extra");
//TUTORES
//FUNCIÓN SUBIR ARCHIVOS
export const upload = async (req, res) => {
  const files = await File.find({EvidenciaOrientador:{$ne:"Evidencia Orientador"}}).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("upload", { files });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//FUNCIÓN GUARDAR
export const Upload = async (req, res) => {
  const newFile = new File();
  newFile.titulo = req.body.titulo;
  newFile.descripcion = req.body.descripcion;
  newFile.filename = req.file.filename;
  newFile.path = "/uploads/" + req.file.filename;
  newFile.mimetype = req.file.mimetype;
  newFile.asignado = req.body.asignado;
  await newFile.save();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.redirect("upload");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//FUNCIÓN LISTAR(VISTA PUBLICA)
export const Uploaded = async (req, res) => {
  const files = await File.find({ asignado: "Tutor" }).lean();
  const x = "64bde90cb1dd9380f468160e";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    console.log(files)
    res.render("files", { files });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//FUNCIÓN EDITAR
export const editarArchivo = async (req, res) => {
  const { recipientId, recipientTitulo, recipientDescripcion } = req.body;
  await File.findByIdAndUpdate(recipientId, {
    titulo: recipientTitulo,
    descripcion: recipientDescripcion,
  });
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.redirect("/upload");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/index");
  }
};
//FUNCIÓN ELIMINAR
export const eliminarFile = async (req, res) => {
  const { file_id } = req.params;
  const archivo = await File.findByIdAndDelete(file_id);
  unlink(path.resolve("./src/public/uploads" + archivo.path));
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.redirect("/upload");
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};
//ORIENTADORES
//FUNCIÓN LISTAR(VISTA PUBLICA)
export const UploadedO = async (req, res) => {
  const filesO = await File.find({ asignado: "Orientador" }).lean();

  const x = "64bde90cb1dd9380f468160d";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("filesO", { filesO});
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//Evidencias Orientadores
export const evidencia = async (req, res) => {
  res.render("evidencias");
};
export const evidenciasG = async (req, res) => {
  const newFile = new File();
  newFile.titulo = req.body.titulo;
  newFile.descripcion = req.body.descripcion;
  newFile.filename = req.file.filename;
  newFile.path = "/uploads/" + req.file.filename;
  newFile.mimetype = req.file.mimetype;
  newFile.EvidenciaOrientador = req.body.EvidenciaOrientador;
  newFile.status=req.body.status;
    await newFile.save();
    req.flash("success_msg","Evidencia entregada")
    res.render("evidencias", { evidenciasG }); 
    res.redirect("/evidencias")
};
//Listado de evidencias Orientadores General
export const evidenciasE = async (req, res) => {
  const evidenciasE = await File.find({EvidenciaOrientador:"Evidencia Orientador"}).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("listadoEvidenciaO", { evidenciasE });
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//Listado de evidencias Orientadores Documentos por revisar
export const evidenciasPorRevisar = async (req, res) => {
  const evidenciasPorRevisar = await File.find({status:"Por revisar"}).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("porRevisar",{evidenciasPorRevisar});
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//Listado de evidencias Orientadores Documentos Revisados
export const evidenciasRevisados = async (req, res) => {
  const evidenciasRevisados = await File.find({status:"Revisado"}).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("revisados",{evidenciasRevisados});
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//FUNCIÓN EDITAR Revisado
export const CambiarEstadoRevisado = async (req, res) => {
  const { recipientId,recipientStatus } = req.body;
  await File.findByIdAndUpdate(recipientId,{
    status: recipientStatus});
}

//Listado de evidencias Orientadores Documentos En
export const evidenciasEnProceso = async (req, res) => {
  const evidenciasEnProceso = await File.find({status:"En proceso"}).lean();
  const x = "64bde90cb1dd9380f468160c";
  var role = req.user.roles;
  var y = role.map(function (e) {
    return e.toString().replace(/new ObjectId\("(.*)"\)/, "$1");
  });
  const z = y[0];
  if (z === x) {
    res.render("enProceso",{evidenciasEnProceso});
  } else {
    req.flash('error','No tienes los permisos para esa petición')
    res.redirect("/");
  }
};

//FUNCIÓN EDITAR En proceso
export const CambiarEstadoEnProceso = async (req, res) => {
  const { recipientId,recipientStatus } = req.body;
  await File.findByIdAndUpdate(recipientId,{
    status: recipientStatus});
}



//FUNCIÓN EDITAR
export const CambiarEstado = async (req, res) => {
  const { recipientId,recipientStatus } = req.body;
  await File.findByIdAndUpdate(recipientId,{
    status: recipientStatus});
}

//Función Listar Archivos Alumnos


//FUNCIÓN LISTAR(VISTA PUBLICA)
export const UploadedA= async (req, res) => {
     res.render("indexB");
};


export const filesA=async(req,res)=>{
    const filesA = await File.find({asignado:"Alumnos"}).lean();
  res.render("indexB",{filesA});
};