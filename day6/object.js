/////////////////////////////////
// const person = {
//     firstname : "rai",
//     age  : "20",
//     eyecolor : "brown"
// }
// console.log(person)

//////////////////////////////////
//making an object array and making another object inside it.

// let students = [
//     {
//         id:{
//             regno : 123,
//         },
//         firstname : "kai",
//         age : 20
//     },
//     {
//         id:{
//             regno : 124,
//         },
//         firstname : "rai",
//         age : 21

//     }
    
// ];
// console.log(students[0]);
// console.log(students[1]);

//sets
//weak sets

// let mySet = new WeakSet();
// let myobj = { fname: "harsh", lname: "singh" };

// mySet.add(myobj);
// mySet.delete(myobj);
// console.log(mySet.add(myobj));
// console.log(mySet.delete(myobj)); // true

/////////////////////////////////////////
//CLASS

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         let myage = 24;
//         console.log(myage);
//     }
// }

// const mycar = new Car("ford", 2014);
// mycar.age();


//callback 
// function fetchdata(callback){
//     setTimeout(()=>{
//         callback("data mil gya");
//     },2000
// fetchdata((data)=>{
//     console.log(data))
// }


