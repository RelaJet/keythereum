var keythereum = require('./index');

var options = {
  kdf: "pbkdf2",
  cipher: "aes-128-ctr",
  kdfparams: {
    c: 262144,
    dklen: 32,
    prf: "hmac-sha256"
  }
};
var params = { keyBytes: 32, ivBytes: 16 };
// synchronous
var dk = keythereum.create(params);

// synchronous
var keyObject = keythereum.dump('123123', dk.privateKey, dk.salt, dk.iv, options);
console.log(keyObject);