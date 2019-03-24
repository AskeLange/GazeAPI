

// Imports
const Token = require ('./token');
const Config = require ('../config');

// Authenticate user token
let authenticate_user_token = ((res,token) => {

  let uid = Token.validate (token,Config.user_secret);
  if (!uid) { res.status (401); res.send ('Invalid token'); return false; }
  return uid;

});

// Authenticate team token


// Authenticate
exports.authenticate = ((req,res,options={type:'user'}) => {
  switch (options.type) {

    case "user": return authenticate_user_token (res,req.query.token);
    default: return false;

  }
});

