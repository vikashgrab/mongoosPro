// let arr = [];   //array literals
// const arr1 = new Array();  //array constructer
//  arr1 = [1,false,"vikash",{name:"vikash",age:25},[1,10,25,],null,undefined] // in array we can store any data type value and is not fix length

// let arr = ["vikash","rakesh","sunny","tajel","amrita","jarnra",,]

// console.log(arr[0]); //array index start with 0

// console.log(arr[arr[arr.length-1]]); // find last index in arr  arr.length-1 

// arr[arr.length-1] =  10
// console.log(arr);

// console.log(arr.length);



const arr = [[1,2,3,4],[5,6,7,8,9],[10,11,12,13,14,15,]] 

// console.log(arr[0]);

// for(let i = 0; i<arr.length;i++){ 
//     console.log(arr[i]);
// }

for(let i = 0;i<arr.length;i++){
    for(let x = 0 ; x < arr[i].length; x++){
        console.log(arr[i][x])
    }}



