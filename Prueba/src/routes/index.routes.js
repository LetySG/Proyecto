import { Router } from "express";
const router = Router();


//Vistas Principales-Información
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contacto", (req, res) => {
  res.render("contacto");
});
router.get("/politicas/de/Privacidad", (req, res) => {
  res.render("politicas");
});
export default router;
