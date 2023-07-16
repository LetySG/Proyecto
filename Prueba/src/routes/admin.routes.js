import { Router } from 'express';
const router=Router();

import *as listaCtrl from '../controllers/lista.controller'
import {authJwt} from '../middlewares';

//import*as configCtrl from '../controllers/config.contraller'


router.get('/lista/Usuarios',listaCtrl.lista)
export default router;