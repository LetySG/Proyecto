import {Router} from 'express'

const router=Router()

import *as filesCtrl from '../controllers/files.controller'


router.get('/upload',filesCtrl.upload)
router.post('/upload',filesCtrl.Upload)
router.get('/files',filesCtrl.Uploaded)

export default router;