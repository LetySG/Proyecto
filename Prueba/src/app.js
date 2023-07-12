import express from "express";
import exphbs from "express-handlebars";
import indexRoutes  from "./routes/routes";
import authRoutes from "./routes/auth.routes";
import index from "./routes/index.routes";
import alumnos from "./routes/alum.routes";
import admin from "./routes/admin.routes";
import  path,{dirname} from 'path';
import { create } from "express-handlebars";
import morgan from "morgan";
import multer from "multer";
import { uuid } from 'uuidv4';
import {createRoles} from './libs/initialSetup'


const app = express();


app.set('views', path.join(__dirname, 'views'));
//configuracion 
/*
var hbs = create({
    layoutsDir: path.join(app.get('views'), 
    'layouts'),

    defaultLayout: "main",
    extname: ".hbs",
});app.engine(".hbs",hbs.engine);*/

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");


//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const storage= multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename:(req, file, cb) => {
        cb(null,uuid() + path.extname(file.originalname));
}
});




app.use(multer({storage}).single('imagen'));
 
//routes
app.use (indexRoutes);
app.use(authRoutes);
app.use(index);
app.use(alumnos);
app.use(admin);

app.use(express.static(path.join(__dirname, "public")));
export default app;