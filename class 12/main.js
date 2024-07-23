// function revision
// function greet(name:string) {
//     return `HELLO ${name}`;
// }
// console.log(greet("jack"));
// console.log("---------- CALCULATOR ----------");
// function add(a:number, b:number) {
//     return a + b;
// }
// console.log(subt(5,3));
// //-----------------------------------------------------
// function subt(a:number, b:number) {
//     return a - b;
// }
// console.log(subt(5,3));
// //-----------------------------------------------------
// function mult(a:number, b:number) {
//     return a * b;
// }
// console.log(mult(5,3));
// //-----------------------------------------------------
// function div(a:number, b:number) {
//     return a / b;
// }
// console.log(div(5,3));
//-----------------------
// function userinfo(name:string,timings:string,coursename:string = "GIAIC") {
//     return `hello my name is ${name} and timings is ${timings} and coursename is ${coursename}`
// }
// console.log(userinfo("jack","9 to 12","GIAIC"));
// console.log(userinfo("sarah","10 to 2"));
///-------------------------------------
// function username(name:string,username:string = "guest123") {
//     return `${name} ${username}`
// }
// console.log("sarah");
// console.log("jack","guest56777");
//---------------------------------
//REST PARAMETERS + Arrow functions
// unlimited number of parameters
// let Greet = (greeting: string, ...names: string[]) => {
//     return greeting + " " + names.join(", ") + "!";
// }
// Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
// Greet("Hello");// returns "Hello !"
//-------------------------------------
// let wallet = (color,...rest) =>{
//     console.log(color,rest);
// }
// wallet("black","cash","id card")
//---------------------------------
// let greet = (greeting : string,...names:string[]) =>{
//     console.log(greeting,names);
// }
// greet("hello ", "sarah" , "jack")
//---------------------
// let info = (name:undefined | string,age) => {
//     console.log(name,age);  
// }
// info(undefined,21)
// info("hunain",42)
//-----------------------------------
var country = function () {
    console.log("pak");
    return "aus";
};
var ans = country();
console.log(ans);
