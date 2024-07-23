// // lexical scoping (nested scope, block of scope , global scope , local scope )
// let a =6;
// function greet(num:number) {
//     let a =5;
//     if (true) {
//         let a = 9 *num ;
//         console.log(a);  // (27) lexical scoping apne scope men he a ko find karega
        
//     }
//     console.log(a);// (5)
//     return a;
// }

// greet(3);
// console.log(a); // (6)


// --------------------------------------
// Rest Parameters :

// // method 1 by default parameter 
// function addition(num1:number, num2: number , num3 : number=0 , num4 : number=0) : number {
//     return num1 + num2 + num3 + num4;
// }
// console.log(addition(8, 9)); // 17 
// console.log(addition(8, 9,17,78)); //  112
 
// ARRAYS :
// method 2 by array / list  (it is more readable )

// let student = ["aroosha","aliyan" , "fazila"];
// console.log(student[0]);
// console.log(st6udent[1]);
// console.log(student[2]);
// console.log(student[-1000]); // undefined 
//------

// let student = ["aroosha","aliyan" ,"fazila","alishba","tehmina","ali"];
//problem 1 : finding a name 
// problem 2 : finding total element in list 
// problem 3 : deleting item 

// ---------- problem 1 ----------
//problem 1 : finding a name 

//console.log(student.indexOf("aliyan")); // 1 
// note : agar aliyan do dafa hai list men tu wo first wala print karega .
//console.log(student.indexOf("abdullah")); // (-1) if abdullah is not on alist output will be -1 .
// console.log(student.lastIndexOf("ali"));

//----------- probelm 2 -----------
// problem 2 : finding total element in list 
// let names = ["aroosha","aliyan" ,"fazila","alishba","tehmina","ali"];
// console.log(names.length);

// ------------problem 3 --------
// problem 3 : deleting item 
// let names = ["aroosha","aliyan" ,"fazila","alishba","tehmina","ali"];
// slice array ka piece krdega  copy krdega usko or uske agey array ko .
// console.log(names.slice(4)); //[ 'tehmina', 'ali' ]
// console.log(names.slice(0)); //["aroosha","aliyan" ,"fazila","alishba","tehmina","ali"];
//console.log(names.splice(1,3)); //[ 'aliyan', 'fazila', 'alishba' ] // 1 se leke 3 number 
//tak cut paste krdega 
//console.log(names.shift("ali"));// pehla name delete hojaega 
// -----

// // To Add New Element In Array :
// console.log(names.push("khizar"));// ["aroosha","aliyan" ,"fazila","alishba","tehmina","ali","khizar"];
// console.log(names);
// console.log(names.unshift("ayesha")); // unshfit start men add krta hai element or push start men krta hai .
// console.log(names);
//---------

// let names = ["aroosha","aliyan" ,"fazila","alishba","tehmina","ali"];
// console.log(names);
// names.shift();
// names.unshift("ahmed")
// names.pop();
// console.log(names);
// console.log(names.length); // length men hamesha 1 se counting start hoti haii






















