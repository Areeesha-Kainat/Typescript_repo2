// union literals :
// let mobile : string|number|boolean|undefined ="oppo"
// mobile = 3000000
// mobile = undefined
// mobile = true
// objects 
// let user={
//     name : "jack",
//     age :20
// }
// console.log(user.name);
// nested object 
// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book = {
//     author: Author;
//     name: string;
// };
// const myBook : Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }
//----------------------------------------------------------------
// TypeScript Object Intersection Types
// syntax
// type TypeA = {
//     propA: number;
//     methodA: () => void;
// };
// type TypeB = {
//     propB: string;
//     methodB: () => void;
// };
//type CombinedType = TypeA & TypeB;
// Define two object types 
// type Dog = { 
// 	name: string; 
// 	breed: string; 
// 	bark: () => void; 
// }; 
// type Bird = { 
// 	name: string; 
// 	wingspan: number; 
// 	fly: () => void; 
// }; 
// // Create an intersection type 
// type HybridAnimal = Dog & Bird; 
// // Create an object of the intersection type 
// const hybridPet: HybridAnimal = { 
// 	name: "Griffin", 
// 	breed: "Labrador", 
// 	wingspan: 1.2, 
// 	bark: () => console.log("Woof!"), 
// 	fly: () => console.log("Flap, flap!"), 
// }; 
// // Access properties and methods 
// console.log(hybridPet.name); 
// console.log(hybridPet.wingspan); 
// hybridPet.bark(); 
// hybridPet.fly();
//-----------------------
function Ids(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
console.log(Ids());
