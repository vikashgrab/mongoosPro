"use strick"
// let obj1 = {fname:"vikash"};

// let obj2 = {lname:"parida"};

// let obj3 = Object.assign(obj1,obj2);
// obj1.id = 101


// // console.log(obj1);

// let obj4 = obj3;
// obj4.val = 100000

// console.log(obj2);
// console.log(obj1);
// console.log(obj3);
// console.log(obj4);



// console.log(Object.is(obj2,obj1));

// let obj10 = {name:"vikash",age:25,mob:8898547812}

// Object.freeze(obj10)

// obj10.address = "andheri";
// obj10.age = 27
// console.log(obj10);

// console.log(Object.isFrozen(obj10))

// let obj11 = {fname:"anam" ,lname:"parida" , mname:"charan",age:49}

// Object.seal(obj11)

// obj11.address = "jogehawari"

// delete obj11.age

// console.log(obj11);
// console.log(Object.isFrozen(obj11))
// console.log(Object.isSealed(obj11));

let obj1 = {a:1}
let obj2 = {b:2}
let obj3 = {c:3}
let obj4 = {a:4}

// let obj5 = Object.assign({},obj1,obj2,obj3,obj4)

// obj4.val = 100
// console.log(obj4);
// console.log(obj5);

let obj6 = {...obj1,obj2,obj3,obj4}

console.log(obj6);



