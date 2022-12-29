let str = "vikashparida"

let array1 = Array.from(str)

console.log(array1);


let numarr = [1,2,3,4,5,36]

let result = Array.from(numarr,ele=>ele*2)

console.log(result);

let arr1 = Array.of(1,2,5,4,8,6,1,2,3,15,2,5,2,5,15)

console.log(Array.isArray(arr1));

console.log(arr1);

let strarr = "1,2,3,4,5,6,7"

let arr2 = Array.of(strarr)
console.log(arr2);
console.log(arr2.length);

console.log(Array.from(strarr));

console.log(strarr.split(','));


let arr3 = Array.from(strarr,(val)=>{
    if(val != ","){
       
 return val
    }
})

console.log(arr3);

let arr4 = [...strarr]

console.log(arr4);

