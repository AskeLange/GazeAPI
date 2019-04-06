

// Imports
const Crypto = require ('crypto-js');
const Base64URL = require ('base64url');
const Config = require ('../config');

// #region Privates

// Generate signature
let generate_signature = ((header_str,payload_str,secret='') => {

  let signature = header_str+'.'+payload_str;
  let signature_obj = Crypto.HmacSHA256 (signature, secret);
  return Base64URL.fromBase64 (Crypto.enc.Base64.stringify (signature_obj));

});

// #endregion

// #region Publics

// Get Payload
exports.get_payload = (( token='' ) => {

  let parts = token.split ('.');
  return Base64URL.decode (parts[1]);

});

// Validate JWT token
exports.validate = ((token='',secret='') => {

  // Extracts data
  let parts = token.split ('.');
  let mismatch = generate_signature (parts[0],parts[1],secret) != parts[2];
  if ( parts.length != 3 || mismatch ) return false;

  // Checks for mismatch n' expiration n' returns
  let payload = JSON.parse (Base64URL.decode (parts[1]));
  let expired = payload.exp < (new Date()).getTime ();
  if (expired) return false;

  // Returns UID
  return payload.uid;

});

// Generate JWT token
exports.generate_user_token = (( user_id ) => {
  
  // Creates header n' payload
  let exp = (new Date()).getTime() + 1000*60*60*48;
  let header_obj = { typ:"JWT", alg:"HS256" };
  let payload_obj = { exp, uid:user_id };

  // Base 64 encodes the objects n' creates signature
  let header_str = Base64URL.encode (JSON.stringify (header_obj));
  let payload_str = Base64URL.encode (JSON.stringify (payload_obj));
  let signature_str = generate_signature (header_str,payload_str, Config.user_secret);

  // Returns token
  return header_str+'.'+payload_str+'.'+signature_str;

});

// #endregion