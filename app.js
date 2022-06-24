const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PUB_API = require('./api/public');
const CMS_API = require('./api/cms');
const bcrypt = require('bcryptjs');
// const middlewares = require('middlewares');
const keys = require('./config/keys');
// passport
require('./services/passport');
app.use(cookieSession({
  maxAge: 30*24*60*60*1000, // 30 days
  keys: [keys.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());
// allow cors
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
//   next();
// });
app.use(cors(
  {
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
));

// allow json body parser
app.use(bp.json());

// app apis
app.use('/api/public', PUB_API);
app.use('/api/cms', CMS_API)


// configuring cookies

// database connection
mongoose.connect(keys.MONGO_DB_URI)
.then(db => {
  console.log("✔ Connected to MongoDB.");
  app.listen(keys.PORT , error => {
    if(!error){
      console.log("✔ NodeJS/ExpressJS running on port", keys.PORT);
    } else {
      throw("✖ NodeJS/ExpressJS could not running on port", keys.PORT)
    }
  })
})
.catch(error => {
  console.log("✖ Could not connect to MongoDB.");
  console.log(error);
});
