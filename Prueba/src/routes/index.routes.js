import { Router } from 'express';
const router=Router();


//Vista de Principal-Información
router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/about',(req,res)=>{
    res.render('about')
});

router.get('/contacto',(req,res)=>{
    res.render('contacto')
});
 
router.get('/politicas/de/Privacidad',(req,res)=>{
    res.render('politicas')
});

router.get('/acceso',(req,res)=>{
    res.render('acceso')
})
export default router;

