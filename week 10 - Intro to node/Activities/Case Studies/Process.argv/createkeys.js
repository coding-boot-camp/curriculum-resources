//These are npm packages that are required to run the program
//This will be cleared in the next two classes
//NOT REQUIRED TO KNOW
var openpgp = require('openpgp');
var fs = require('fs');


if (process.argv[2] && process.argv[3] && process.argv[4] && process.argv[5]){
    //This options object is to identify the keys and how to encrypt them
    //NOT REQUIRED TO KNOW
    var options = {
        userIds: [{ name: process.argv[2], email: 'practice@example.org' }],
        numBits: 2048,
        passphrase: process.argv[3]
    };
    
    var pubKey, privKey;
    
    //This function generates the PGPkeys
    //NOT REQUIRED TO KNOW
    openpgp.generateKey(options).then(function(key) {
        privKey = key.privateKeyArmored;
        pubKey = key.publicKeyArmored;
        console.log('Key generated');
        console.log(privKey);
        console.log(pubKey);
        //Generates the Private Key
        fs.writeFile(process.argv[4]+'.txt', privKey, function(err){
            if (err) throw err;
        });
        //Generates the Public Key
        fs.writeFile(process.argv[5]+'.txt', pubKey, function(err){
            if (err) throw err;
        });
    });
} 
else 
{
    console.log("no keys have been generated");
}

