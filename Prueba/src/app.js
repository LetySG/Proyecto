import express from "express";
import exphbs from "express-handlebars";
import authRoutes from "./routes/auth.routes";
import index from "./routes/index.routes";
import admin from "./routes/admin.routes";
import path, {dirname} from 'path'
import { create } from "express-handlebars";
import morgan from "morgan";
import multer from "multer";
import { uuid } from "uuidv4";
import { createRoles } from "./libs/initialSetup";
import methodOverrride from "method-override";
import flash from "connect-flash"
import passport from "passport";
import session from "express-session"

const app = express();
require('./config/passport');
//app.set("views", path.join(__dirname, "views"));
//configuracion
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
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverrride("_method"));
app.use(morgan("dev"));

app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use((req,res,next)=>{
  res.locals.success_msg =req.flash('success_msg');
  res.locals.error_msg =req.flash('error_msg');
  res.locals.error =req.flash('error');
  res.locals.user = req.user || null;
  next();
});

const storage= multer.diskStorage({
  destination: path.join(__dirname,'public/uploads'),
  filename:(req, file, cb) => {
      cb(null,uuid() + path.extname(file.originalname));
}
});
app.use(multer({ storage }).single("file"));
//routes
//app.use(passport)
app.use(authRoutes);
app.use(index);
app.use(admin);
app.use(express.static(path.join(__dirname, "public")));

export default app;
