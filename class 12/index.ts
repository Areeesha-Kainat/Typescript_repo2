//-----------------------------------
// fetch promise return krta hai
// fetch ko API ki zaroorat hoti haii or ye sirf post nhi krta ballke get wagera bhi krta hai 

// let url = "https://jsonplaceholder.typicode.com/posts/1"

// let fetchdata = fetch(url)
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// console.log(fetchdata);

// baar baar .then lagana prh raha hai 
//-----------------------------------

// async await = return promise

// let func = async()=>{
//     let fetchdata = await fetch(url)
//     let res = await fetchdata.json()
//     console.log(res);
//    return res
    
// }
// func();

// ----------------- class -----------
// callback queue and call stack
// sync = call stack
//async = callback queue
//call stack ka code pehle work krta hai callback queue wala last me chlta hai

// async  
//example 1
//------------------------ 
// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(()=>{
//     console.log("i am settimeout");
// }, 2000);
// console.log(4);

// function add() {
//     return 5*5
// }
// console.log(add());
//--------------------
//example 2 
// console.log("std 1");
// console.log("std 2");
// console.log( "std 3");

// setTimeout(()=>{
//     console.log("sorry i lost my card ");
// }, 2000);
// console.log("std 4");

// function add() {
//     return 5*5
// }
// console.log(add());


//----------------------
//callback function = wo function as a  argument dusre function men pass ho  

// function one(cb :() => void) {   // higher order  {jab koi type nhi hoti tu void use krte hai}
//     console.log("one");   
//     cb()
// }
// // call back 
// const two =() =>{
//  console.log("two");
 
// }
// one(two)            // callback function pass hota hai tu uske sath round bracket nhi ate 


//--------------------------------------
//promises

// let MakePromise = () => {
//     return new Promise((resolve,reject) =>{
//           resolve("I am resolved")  //callback function 
//         //   reject("you are rejected")  //callback function 
//     })
// }

// MakePromise()  // agar promise resolve hoga tu .then chalega or agr nhi chalega tu .catch chalega
// .then((data)=>{console.log(data);})
// .catch((err)=>console.log(err)) 

//--------------------
// let isVictory = true;
// let cricket = () => {
    
//     return new Promise((resolve, reject) => {
//         console.log("match is in progress");
//           if (isVictory) {
//               setTimeout(() => {
//                 resolve("we won")
//               },1000)
//           }       
//           else {
//             setTimeout(() => {
//                 reject("tum se na hopaega")
//               },1000)
//           }
// })
// }
// cricket()
// .then((Response) => {console.log(Response);
// })
// .catch((Rejected) => {console.log(Rejected);
// })

//--------------------
//.finally (har condition men finally chalega )
let isVictory = true;
let cricket = () => {
    
    return new Promise((resolve, reject) => {
        console.log("match is in progress");
          if (isVictory) {
              setTimeout(() => {
                resolve("we won")
              },1000)
          }       
          else {
            setTimeout(() => {
                reject("tum se na hopaega")
              },1000)
          }
})
}
cricket()
.then((Response) => {console.log(Response);
})
.catch((Rejected) => {console.log(Rejected);
})
.finally(() => {console.log("flight pakro");
})