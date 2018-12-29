

// Imports
const Crypto = require ('crypto-js');
const Config = require ('../config');
const Token = require ('../tools/token');
const User = require ('../models/user.model');

const authenticate = require ('../tools/authenticate').authenticate;

// Create User
exports.insert_user = ((req,res) => {

  // Error handling
  let b = req.body;
  if ( !b.username || !b.password || !b.mail ) {
    res.status (400); res.send ('Request is missing data');
  }

  // Extracts data n' hashes pass
  let username = b.username, mail = b.mail;
  let password = Crypto.HmacSHA256 (b.password, Config.pass_secret);

  // Creates the document
  let document = new User ({
    username, password, mail
  });

  // Saves the document
  document.save ((err, r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Get User
exports.get_user = ((req,res) => {
  
  // Authentication
  let uid = authenticate (
    req, res, { type: 'user' }
  ); 
  
  // Errors
  if (!uid) return;
  if (uid !== req.params.id) {
    res.status (401);
    res.send ('Unauthorized');
    return;
  }

  // Finds n' sends the use
  User.findOne ({ _id: req.params.id }, (err,r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Delete User
exports.delete_user = ((req,res) => {
  
  // Authentication
  let uid = authenticate (
    req, res, { type: 'user' }
  ); 
  
  // Errors
  if (!uid) return;
  if (uid !== req.params.id) {
    res.status (401);
    res.send ('Unauthorized');
    return;
  }

  // Finds n' sends the use
  User.findOneAndDelete ({ _id: req.params.id }, (err,r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Fetch Token
exports.fetch_token = ((req,res) => {
  User.findOne ({ username: req.body.username }, (err,r) => {

    // Errors n' user not found
    if (err) { res.status (500); res.send (err); return; }
    if (!r) { res.status (401); res.send ('User not found'); return; }

    // Checks pass n' sends response
    let password = Crypto.HmacSHA256 (req.body.password, Config.pass_secret);
    if (r.password == password) { res.send ({ token: Token.generate (r._id), uid: r._id }); }
    else { res.status (401); res.send ('Wrong password'); }

  });
});