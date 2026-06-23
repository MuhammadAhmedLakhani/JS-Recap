
//------------- primitives data types
// string number booleon null undefined symbol bigInt
// when you copy them they copy fully (deep-copy)


let a = 12;
console.log(a)
let c = a;  // copying them 
 console.log(c)  //same value as of a 
 
 a = 40
 console.log(a)  //updated a value 
 console.log(c)  // value of c is not updated 
 





// ---------------non-primitive data types
//array [] object {} functions ()
//when you copy them they refer to the original one (shallow copy)