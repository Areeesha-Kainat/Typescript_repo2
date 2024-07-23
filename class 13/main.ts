// Union Literals : 
// Narrowing : (union literals men he narrowing use hota hai)(conditions k 
//liye use hota hai taaake type change easily kr sake)


//-------------------------------------------
// function testingNarrowing(params:string|number){
//   if (typeof params === "number") {
//     return Math.round(params)
//   }
//   else{
//     return Math.round(Number(params))
//   }
// }

//--------------------------------------------
// function testingNarrowing(params:string|number){
//   if (typeof params == "number") {
//     return Math.round(params)
//   }
//   if (typeof params == "string") {
//     return params.toUpperCase()
//   }
// }

//--------------------------------------------

// type TeacherNamesType = "hina" | "ahmed" | "aleemalam" | 2
// let teacherNames : TeacherNamesType = "hina"  

//--------------------------------------------
// type QuizType = "superset" | "none" |6          //  type literals
// let result: QuizType = 6
 
// if(typeof result == "string" ){        // typeof == narrowing
    
// if (result == "superset") {
//     console.log("Typescript is a superset of javascript");
    
// }
// else if (result == "none") {
//     console.log("Typescript is a not related to javascript");
    
// }
// else (
//     console.log("invalid")

// )
// }


// LOOPS