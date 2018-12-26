

// Imports
const Token = require ('./token');

// Authenticate user token
let authenticate_user_token = ((res,token) => {

  let uid = Token.validate (req.body.token);
  if (!uid) { res.status (401); res.send ('Invalid token'); return false; }
  return uid;

});

// Authenticate
exports.authenticate = ((req,res,options={type:'user'}) => {
  switch (options.type) {

    case "user": return authenticate_user_token (res,req.body.token);
    default: return false;

  }
});


