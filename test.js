const { SecretSharing } = require('./secretSharing');
/**/ 
 main();
function main(){
    const n = 5;
    const t = 3;
    const secret = "secret key";
    var secretSharing = new SecretSharing(n, t, secret);

    //Here split the secret in "n"
    var splitSecrets = secretSharing.splitSecret();
    //Here we combine the splitted secrets to get the secrets
    var getSecret = secretSharing.combineSecret(splitSecrets.slice(2, 5));//Combine 3 shares
    console.log(getSecret.toString());

    var s1 = splitSecrets[1];
    console.log(s1);
}