//-----------------------
// function printId(id: number | string) {
//     if (typeof id === "string") {
//       // In this branch, id is of type 'string'
//       console.log(id.toUpperCase());
//     } else {
//       // Here, id is of type 'number'
//       console.log(id);
//     }
//   }
// // printId("sara");
// printId(2)
// --------
// type Point = {
//     x: number;
//     y: number;
//   }
//   let obj = {
//    x : 4,
//    y : 9
//   }
//   console.log(obj);
// ---------- 
// type Point = {
//     x: number;
//     y: number;
//   };
//   // Exactly the same as the earlier example
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 100, y: 100 });
// ---------- 
// any and unknown 
// any
// let a : any = 4
// a = "name"
// a = true
// a.toUpperCase()// any typesafety khtm hojati hai 
//unknown 
// let a :unknown = 1
// a = "jack"
// a = true
// if(typeof(a)=="string"){
//     a.toUpperCase()    // unknown pe typesafety khtm nhii hoti 
// }
// Never
// yahan function stop hojaega agey code nhi hoga console.log men code agey run hojaega
// that whyy  we use this function throw new Error
// function error(abc:never) {
//     throw new Error();
// }
// let color : string = "black";
// switch (color) {
//     case "blue":
//         console.log("color is blue");  
//         break;
//     case "red":
//         console.log("color is red");  
//         break;
//     case "green":
//         console.log("color is green");  
//         break;
//     default:
//         error(color)
//         break;
// }
//----------------------------------------------------
// explicit casting
// let myname: unknown = "jack";
// // with as 
// console.log((myname as string).length);
// let myname1: unknown = "sarah";
// // with <>
// console.log((<string> myname1).length)
//--------------------
// ENUM 
// let students = ["jack","sheng","sam"]
// console.log(students[1]);// sheng
// console.log(typeof students);
// let std = {first :"jack",second :"sheng",third :"sam"}
// console.log(typeof std);
// // dot notation
// console.log(std.first); // jack
// // brace notation
// console.log(std["second"]); // sheng
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
