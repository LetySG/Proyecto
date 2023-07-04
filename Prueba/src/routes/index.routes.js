import { Router } from 'express';
const router=Router();


//Vista de Principal-Información
router.get('/', (req,res)=>{
    res.render('index');
})


export default router;