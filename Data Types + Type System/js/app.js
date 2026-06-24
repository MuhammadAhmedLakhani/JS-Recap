
//------------- primitives data types
// string number booleon null undefined symbol bigInt

// ----- important info

// when you copy them they copy fully (deep-copy)
// they are immutable/not changeble data types
//although you can reassign them but not change the individual value
//const doest not allow reassignment only , you can still change 
// the individual value if the data type is mutable ,for example  objects




// let a = 12;
// console.log(a)
// let c = a;  // copying them 
//  console.log(c)  //same value as of a 
 
//  a = 40
//  console.log(a)  //updated a value 
//  console.log(c)  // value of c is not updated 
 
// ---------------non-primitive data types
//array [] object {} functions ()
//when you copy them they refer to the original one (shallow copy)


// ------------------------------------ string

//they contain data which is wrapped in single --> '' or double quotes --> "" or backticks --> ``


//-------------------------------------- number

// they contain numerical data 

// let a = 12; // number

// let b = 12.5 //number

//-------------------------------------- boleon

// they contain either true or false keywords 

// let a = true; // boleon

// let b = false; //boleon

// console.log(a)

// -------------------------------------- null

// they means empty and does not contain any value
//apko value nahi pata k konsi aayege kis type ke aaye ge

// -------------------------------------- undefined

//if you define a variable and donot give its value the default value is undefined (Absence of Value):
//ye value js deti hai , null hum khud dete hen -->(Intentional Absence)


// --------------------------------------- symbol

//unique immutable value

//Symbol functon ka use kiya jata hai 
//2 variable ke naam same hosakte hen mager woh phir bhe same nahi hote

// let u1 = Symbol("id")
// let u2 = Symbol("id")


// console.log(u1 === u2)   //false will be even though same

// ------- Dynamic Typing

// let a = 12;

// console.log(a)   // a type is number now
// a = true;

// console.log(a)  // now a type change to boleon
    


// --------- typeof quirks (quirks--->weird behaviour)



// console.log(typeof null)  //object printed even though its weird


// console.log(typeof NaN)   //number even 'NaN' is itself not a number


// --------------- type coersion

//js change the type of the data automatically


// console.log( 1 + "1") // result is 11 


//here js convert the numerical 1 to string as well as it thinks its concatenation

// CASE 2: strign conversion


// console.log( "6" - 1 ) // 5 (numerical substraction performed)

//here string converted to number as minus sign present which is numerical operation purelly


// ---------------------- truthy vs falsy values


// false values:0 false "" null undefined NaN  document.all


 if(-1){    //-1 is true even negative
    console.log("true value")
 }

 //everything else is true value in js









