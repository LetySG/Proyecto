import { Router } from 'express';
const router=Router();

import *as formatCtrl from '../controllers/formatos.controller'

router.get('/formato/solicitud/apoyo/Orientacion/Educativa',formatCtrl.Format)

export default router;