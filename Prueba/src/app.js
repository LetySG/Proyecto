import express from "express";
import exphbs from "express-handlebars";
import indexRoutes  from "./routes/routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";
import  path, { dirname } from 'path';
import { create } from "express-handlebars";
import morgan from "morgan";
import multer from "multer";
import { uuid } from 'uuidv4';

import {createRoles} from './libs/initialSetup'

const app = express();

createRoles();
app.set('views', path.join(__dirname, 'views'));

//configuracion 
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
});


app.engine(".hbs",hbs.engine);
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
export default app;