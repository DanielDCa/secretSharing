const shamirSecretSharing = require('shamirs-secret-sharing');

class SecretSharing{
    //"n" is the number of sharing secrets
    //"t" is the number of secrets sharing needed to reconstruct the secret 
    n;
    t;

    secret;

    constructor(n, t, secret){
        this.n = n;
        this.t = t;
        this.secret = Buffer.from(secret);
    }

    splitSecret(){
       const splitSecret = shamirSecretSharing.split(this.secret,{shares: this.n, threshold: this.t});
       console.log("\nEstoy en split secret");
       console.log(splitSecret);
       return splitSecret;
    }
    combineSecret(sharesSecret){
        //sharesSecret is the t or >n piece of secrets to get the final secret
        const secret = shamirSecretSharing.combine(sharesSecret)
        return secret;
    }
} 
exports.SecretSharing = SecretSharing;