// let numbers : number = [1,2,true,3,4,5 ,"jack"] // variable pe error aega 
// let number1 : number[] = [1,2,true,3,4,5 ,"jack"] // ab value pe aega cuxz of []
// let numbers : number[] = [1,2,3,4,5] // ispe nhi aega kiun k datatype sahi hai .
// -----  | = pipe    -----
// 1 method 
// let example : string | number |boolean |number[] = 1233; 
// example = "username"
// example = true
// example = [1,2,3,4]
// 2 method 
// Type Aliases Methods
//--------
// type MyType = string | number |boolean 
// let example1 : MyType = 1233;
// example1 = true
// example1 = "sarah"
//---------
// type MyType1 = string | number 
// type MyType2 = boolean 
// let example2 : MyType1 | MyType2 = 1233;
// example2 = true
// example2 = "sarah"
//------------
// let number2 : number[] = [1,2,3]; // 1 method 
// let number3 : Array<number> = [1,2,3]; // 2 methods  dono work same krte bss syntax alag hai 
// let number4 : Array<string> = ["sarah,shafay","areesha"]; 
// let number5 : Array<MyType1|MyType2> = ["shafay","areesha",4,8,true]; 
// --------------
// Touple  (special type of array ) [ pehle se defined krdia kis jagah konsi cheez store hogi]
//  let numbers : [string , string , string , number] = ["shafay","areesha","jack",1,];
// ---------------
// .map (array method)
// ----- 1 example --- 
// let names  : string[] = ["shafay","areesha","aliyan","wasfa"]
//  console.log(names.map(name => {
//     if (name== "wasfa") {
//         name = "aroosha";
//     }
//     return
// }));
//console.log(names)
// 0 shafay if name = wasfa name = "aroosha" 
// 1 areesha if name = wasfa name = "aroosha" 
// 2 aliyan if name = wasfa name = "aroosha" 
// 3 wasfa if name = wasfa name = "aroosha" 
// ----- 2 example ----
// let numbers = [1,2,3,4]
// let squarenumbers = numbers.map(num => num * 2 );
// console.log(numbers);
// console.log(squarenumbers);
// ---------------- OBJECT  ----------------
// let obj = {
//     name : "areesha",    // name = key and "areesha" = value
//     email : "areesha@gmail.com",
//     password : 1233
// }
// // ---------- by object literal notation --------
// console.log(obj.name);
// console.log(obj.email);
// console.log(obj.password);
// // ---------- by square brackets --------
// console.log("name is : " + [obj.name]  +" email is : "+ [obj.email ] +" password  is : "+ [obj.password]);
// ---------  by type Alias  ---------   
// type person = {
//     pname: string,
//     age : number
// }
// let obj1 = {
//     pname : "areesha", 
//     age : 17
// }
// console.log(obj1.pname);
// console.log(obj1.age);
// ---------- object with functions -------
var person = {
    name: "areesha",
    age: 12,
    isStudent: true,
    greet: function () {
        console.log("Hello , my name is :" + this.name + "and age is :" + this.age);
    }
};
person.greet();
