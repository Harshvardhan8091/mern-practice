function getProducts() {
    return new Promise((resolve, reject) => {
    //let success = true;
     let success = false;  
        setTimeout(() => {
            if (success) {
                resolve('Product Loaded');}
            else {
                reject('Product loading failed');
            }
        }, 1000);
    });
}

function getoffers() {
    return new Promise((resolve, reject) => {
         //let success = true;
       let success = false
        setTimeout(() => {
            if (success) {
                resolve('Offers Loaded');}
             else {
                reject('Offers loading failed');
            }
        }, 2000);
    });
}