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