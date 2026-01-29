// async function task() {
//     try {
//         const result = await someAsyncFunction();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


/////////////////////////////////////////
// async function getData() {
//     return "Hello";
// }

// getData().then(data => console.log(data));

///////////////////////////////////////////
//async and await using promise

// function delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Done"), 2000);
//     });
// }

// async function run() {
//     const res = await delay();
//     console.log(res);
// }

// run();



//notes
// call stack > sync code run hota Hai. 
// web API > fetch, setTimeout, DOM events. 
// microtask queue > promise then , async / await.
// callback queue > settimeout , setinterval. 
// event lopp > check karta hai; stack empty?  then queue se kam bhejta hai.

//code

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(()=> {
//     console.log("C");
// });

// console.log("D")

//they run priority Wise.

