import {Router} from 'express'

 const router=Router()

 import *as authCtrl from '../controllers/auth.controller'


 //Rutas de Registro Usuario
 router.get('/signup',authCtrl.signUp)
 router.post('/signup/add',authCtrl.signup)
 //Ritas de Inicio de Sesión
 
 router.get('/signin',authCtrl.signIn)
 router.post('/signin/in',authCtrl.signin)
 

//router.get('/signin',authCtrl.signIn)



 export default router;