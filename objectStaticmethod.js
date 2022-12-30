let obj1 = {fname:"vikash"};

let obj2 = {lname:"parida"};

let obj3 = Object.assign(obj1,obj2);
obj1.id = 101


// console.log(obj1);

let obj4 = obj3;
obj4.val = 100000

console.log(obj2);
console.log(obj1);
console.log(obj3);
console.log(obj4);



console.log(Object.is(obj2,obj1));



