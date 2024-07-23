// Modules : (import / export)
// PURPOSE :  used to organize code , it aslo maintains the code  and resuables

//cmd
// tsc -init
// npm init-y
// npm i @types/node -D

//---------------------------

 export function add(a:number, b:number) :number{
    return a+b;
    
}
export function subtract(a:number, b:number) :number{
    return a-b;
    
}
export function multiply(a:number, b:number) :number{
    return a*b;
    
}
export function divide(a:number, b:number) :number{
    return a/b;
    
}

// --------------------
export function message (c:string, d:string) :string{
return c + d ;
}
