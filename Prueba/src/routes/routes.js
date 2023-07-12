import { Router } from "express";

const router=Router();


import *as fileCtrl from '../controllers/file.controller'

import { authJwt} from "../middlewares";

router.get('/files',fileCtrl.Uploaded)
router.get('/upload',[authJwt.verifyToken ],[authJwt.isCoordinador],fileCtrl.upload)
router.post('/upload',[authJwt.verifyToken],[ authJwt.isCoordinador],fileCtrl.Upload)


export default router;