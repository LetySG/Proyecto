import {Router} from 'express'



 import *as authCtrl from '../controllers/auth.controller';


  const router=Router()

 //Rutas de Registro Alumno
 router.get('/signup',authCtrl.signUp)
 router.post('/signup/user/add',authCtrl.signup)
//Rutas de  Registro Coordinador
router.get('/registro/user/coordinador',authCtrl.registroC)
router.post('/registro/user/coordinador/add',authCtrl.registroc)
//Ruta de Registro Orientador
router.get('/registro/user/orientador',authCtrl.registroO)
router.post('/registro/user/orientador/add',authCtrl.registroo)
//Ruta de Registro Tutor
router.get('/registro/user/tutor',authCtrl.registroT)
router.post('/registro/user/tutor/add',authCtrl.registrot)


//Rutas de Inicio de Sesión
router.get('/signin',authCtrl.signIn)
router.post('/signin/in',authCtrl.signin)
 





 export default router;