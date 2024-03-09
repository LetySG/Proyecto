const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
import Role from "../models/Role";
import User from "../models/User";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "contraseña",
    },
    async (email, contraseña, done) => {
      //Verifica que el usuario exista
      const user = await User.findOne({ email });
      if (!user) {
        //Si el usuario no existe se manda mensaje de "Usuario no registrado"
        return done(null, false, { message: "Usuario no registrado" });
      } else {
        const match = await user.matchContraseña(contraseña);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Contraseña Incorrecta" });
        }
      }
    }
  )
);

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })
})