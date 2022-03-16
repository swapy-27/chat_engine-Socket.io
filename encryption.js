// this function take sarray as a range  and will generate a prime number btw that range
let generatePrimeNumber = function(range){

}

let generateRandomNumber= function(max,min){
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

// if any user joined its private and public key should be generated  
module.exports.generateKeys = function(user_serial_no){

    let p =generatePrimeNumber([0,100]);
    let q=p;
    while (q==p){
        q=generatePrimeNumber([0,100]);
    }

    //first part of public key will be used as modulus at both encryption and decryption

    let n = p*q;

    // second part of public key will be used into encryption also
    let k=(p-1)*(q-1);


    // and random no  between 1 and k but not a factor of n

    let e =p;

    while (e==p || e==q){
        e=generatePrimeNumber(k,1);
    }



    //this will generate our public_key

    let public_key  = (user_serial_no*(f_of_n)+1)/e;



    return public_key;
}



// as user send message it will encrypted using its public  key
let generatePrivateKey_and_Encrypt = function(message,public_key){

    


}





// as user receive message it will decrypt using its private key