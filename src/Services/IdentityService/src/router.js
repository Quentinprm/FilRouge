 /* Quentin Parmentier  */
 const authController = require('./controllers/auth');

 module.exports.set = (app) => {
     app.post('/register',authController.register);
     app.post('/login',authController.login);

 }