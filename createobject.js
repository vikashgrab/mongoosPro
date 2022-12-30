// const obj = {name:"vikash",age:25,addresss:"andheri"}

// obj.name = "karesh"

// obj.collage = "mvlu"
// console.log(obj);

  // const obj1 = {}

  // obj1.name =  "aachal"

  // console.log(obj1);


  let obj1 = {
    fname:"vikash",
    lname:"parida",
    fullName:function(){
      return `${this.fname}  ${this.lname}`;
    }
  }
 
  console.log(obj1);
  obj1.lname = "anam parida"
  console.log(obj1.fullName());
  


  let obj2 = {
    fname:"vikash",
    lname:"parida",
    fullName:()=>{
      return `${obj2.fname}  ${obj2.lname}`;
    }
  }
  console.log(obj2);
  obj2.lname = "anam parida"
  console.log(obj2.fullName());
 