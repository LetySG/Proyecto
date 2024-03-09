import { Router } from "express";
const router = Router();

import {contraseñaA,contraseñaT,contraseñaO,ContraseñaA,ContraseñaT,ContraseñaO,Acceso, accesoA,
AccesoO,accesoO,AccesoT,accesoT,eliminarCA,eliminarCO,eliminarCT} from "../controllers/clave.js";
import { eliminarUO,eliminarUA,lista,listaO,editarT,editarO,} from "../controllers/listaUsers";
import { CambiarEstado, editarArchivo, eliminarFile,evidencia,evidenciasE,evidenciasG, materialA, Upload,upload,Uploaded, UploadedA, UploadedO,filesA, uploadedA, evidenciasPorRevisar, evidenciasRevisados, CambiarEstadoRevisado, evidenciasEnProceso, CambiarEstadoEnProceso} from "../controllers/file.controller";
import { GuardarDatos, entrevistaTutorial,formatoAutorizacion, formatoReporte, formatos, derivacionAlumnos,derivacionA, formatoAuT,formatoR, entrevistaT, ReporteA,ReporteD, SolicitudA, guardarSA, listaSolicitudAlumnos, editarEstado, editarSolicitud,listaSolicitudRevisadas,listaSolicitudPorRevisar, listaSolicitudEnProceso, listadoGeneral} from "../controllers/formatos.controller";
import{ isAuthenticated} from "../middlewares/autentificacion.js";
import Clave from "../models/Clave.js";

//Listar,Editar y Eliminar Usuarios Tutores
router.get("/lista/Usuarios",isAuthenticated,
lista);
router.post("/lista/Usuarios/update",isAuthenticated, editarT);
router.delete("/lista/Usuarios/delete/:id",isAuthenticated,eliminarUA);
//Listar,Editar y Eliminar Usuarios Orientadores
router.get("/lista/Usuarios/Orientadores", listaO);
router.post("/lista/Usuarios/Orientadores/update", editarO);
router.delete("/lista/Usuarios/Orientadores/delete/:id", eliminarUO);
//Configurar Claves de Acceso Usuarios Alumnos
router.get("/config",contraseñaA);
router.post("/config/add",ContraseñaA);
router.get("/config/clave/delete",eliminarCA);
//Configurar Claves de Acceso Usuarios Orientadores
router.get("/config/orientadores",contraseñaO);
router.post("/config/orientadores/add", ContraseñaO);
router.get("/config/claveO/delete",eliminarCO);
//Configurar Claves de Acceso Usuarios Tutores
router.get("/config/tutores",contraseñaT);
router.post("/config/tutores/add",ContraseñaT);
router.get("/config/claveT/delete",eliminarCT);
//Inicio de Acceso al registro
router.get("/acceso",Acceso);
router.post("/acceso/in",accesoA);
router.get("/acceso/orientadores",AccesoO);
router.post("/acceso/orientadores/in",accesoO);
router.get("/acceso/tutores",AccesoT);
router.post("/acceso/tutores/in",accesoT);
//Subir Archivos Tutores,Orientadores y Alumnos
router.get("/upload",upload)
router.post("/upload",Upload);
router.get("/files",Uploaded);
router.get("/files/orientadores",UploadedO);
//router.get("/recursos/alumnos",UploadedA);
router.get("/recursos/alumnos",filesA);
router.get("/upload/files/delete/:file_id",eliminarFile)
router.post("/upload/files/update/",editarArchivo);
//Evidencias Orientadores
router.get("/evidencias",evidencia);
router.post("/evidencias",evidenciasG)
router.get("/listado/evidencias/Orientadores",evidenciasE)
router.post("/listado/evidencias/Orientadores/update",CambiarEstado)
router.get("/listado/evidencias/Orientadores/porRevisar",evidenciasPorRevisar)
router.post("/listado/evidencias/Orientadores/porRevisar/update",CambiarEstado)
router.get("/listado/evidencias/Orientadores/Revisado",evidenciasRevisados)
router.post("/listado/evidencias/Orientadores/Revisado/update",CambiarEstadoRevisado)
router.get("/listado/evidencias/Orientadores/enProceso",evidenciasEnProceso)
router.post("/listado/evidencias/Orientadores/enProceso/update",CambiarEstadoEnProceso)

//FORMATOS
router.get("/formato/solicitud/apoyo/Orientacion/Educativa",formatos);
router.post("/formato/solicitud/apoyo/Orientacion/Educativa",GuardarDatos);
router.get("/formato/de/autorizacion/intervencion/tutorial/educativa",formatoAutorizacion);
router.post("/formato/de/autorizacion/intervencion/tutorial/educativa",formatoAuT)
router.get("/formato/reporte/de/resultado",formatoReporte);
router.post("/formato/reporte/de/resultado",formatoR)
router.get("/formato/entrevista/tutorial",entrevistaTutorial)
router.post("/formato/entrevista/tutorial",entrevistaT)

router.get("/derivacion/alumnos/al/centro/de/servicios/de/la/comunidad",derivacionAlumnos)
router.post("/derivacion/alumnos/al/centro/de/servicios/de/la/comunidad",derivacionA)

//Resultados de Formatos
router.get("/listado/formatos")
//Resultados de Reportes  
//PENDIENTE
router.get("/reporte/Alumnos",ReporteA);
router.post("/reporte/Alumnos")
router.get("/alumnos/derivados/lista",ReporteD)

//Solicitud Acompañamiento
router.get("/solicitud",SolicitudA)
router.post("/solicitud",guardarSA)

router.get("/lista/solicitud/alumno",listaSolicitudAlumnos)
router.post("/lista/solicitud/alumno/update",editarSolicitud)

router.get("/lista/solicitud/alumno/revisada",listaSolicitudRevisadas)
//router.post("/lista/solicitud/alumno/update",editarSolicitud)

router.get("/lista/solicitud/alumno/proceso",listaSolicitudEnProceso)


router.get("/lista/solicitud/alumno/pendientes",listaSolicitudPorRevisar)


router.get("/lista/solicitudes",listadoGeneral)
export default router;

//