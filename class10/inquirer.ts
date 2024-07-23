import inquirer from 'inquirer'
// user se input leta hai inquirer in the form of prompt 
let answers = await inquirer.prompt([{
    // type:'input',
    // name:'name',
    // message:'what is your name ?',
    //------  
    // type:'number',
    // name:'age',
    // message:'enter your age',
    //------
    type: 'list',
    name: 'age',
    message: 'enter your age',
    choices: ['18', '19', '20', '47', '48', '49'],
}])
console.log("your name is :", answers);
// console.log("your age is :" ,answers);
