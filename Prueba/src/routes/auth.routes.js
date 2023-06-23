import {Router} from 'express'

 const router=Router()

 import *as authCtrl from '../controllers/auth.controller'

 router.get('/signup',authCtrl.signUp)

 router.post('/signup/add',authCtrl.signup)

 export default router;