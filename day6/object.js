/////////////////////////////////
// const person = {
//     firstname : "rai",
//     age  : "20",
//     eyecolor : "brown"
// }
// console.log(person)

//////////////////////////////////
//making an object array and making another object inside it.

let students = [
    {
        id:{
            regno : 123,
        },
        firstname : "kai",
        age : "20",

        id:{
            regno : 124,
        },
        firstname : "rai",
        age : "21",


    }
];
console.log(students[0].firstname);
console.log(students[1].age);
