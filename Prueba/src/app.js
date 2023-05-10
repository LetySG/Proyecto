import express from "express";
import exphbs from "express-handlebars";
import indexRoutes  from "./routes/routes";
import  path, { dirname } from 'path';
import { create } from "express-handlebars";
import morgan from "morgan";
import multer from "multer";
//const uuidv4 = require("uuid/v4");
import { uuid } from 'uuidv4';

const app = express();
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


export default app;