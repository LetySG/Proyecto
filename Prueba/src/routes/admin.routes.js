import { Router } from 'express';
const router=Router();

import *as listaCtrl from '../controllers/lista.controller'
import {authJwt} from '../middlewares';


router.get('/lista/Usuarios',listaCtrl.lista)


export default router;