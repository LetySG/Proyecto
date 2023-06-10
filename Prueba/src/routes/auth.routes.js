import { Router } from "express";
const router=Router()

//Rutas POST
import * as authCtrl from '../controllers/auth.controller'

//Rutas Inicio Sesión


router.get('/iniciarSesion',authCtrl.inicioS)
router.post('/iniciarSesion/in',authCtrl.inicios)
//Rutas Registro Alumnos
router.get('/registro-alumno',authCtrl.registroA)
router.post('/registro-alumno/add',authCtrl.registroa)
//Rutas Registro Coordinador
router.get('/registro-coordinador',authCtrl.registroC)
router.post('/registro-coordinador/add',authCtrl.registroc)
//Rutas Registro Tutores
router.get('/registro-tutor',authCtrl.registroT)
router.post('/registro-tutor/add',authCtrl.registrot)
//Rutas Registro Orientador
router.get('/registro-orientador',authCtrl.registroO)
router.post('/registro-orientador/add',authCtrl.registroo)

export default router;