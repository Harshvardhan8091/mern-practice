//A promise in java is an object that represt an eventual completion or failure of an
 //asynchronous operation and its resulted value


//it acts as a placeholder for a value which 
//isn't available yet but will be available (resolved or rejected at some point of time

const promise=new Promise((resolve, reject) => {
    let success = true;
setTimeout(() => {
    if (success) {
        resolve("Logged in dash");
    }
    else{
        reject("Login is failed");
    
    }
},1000);
});

promise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Login operation is completed.");
});