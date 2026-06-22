
// Variables And Declaration

// var a;  // declare karna

// var a = 12; //declare and initialization
            // initialization is giving first value




// var a = 12;

// var a  = 122;

// console.log(a)        //no error eve on redeclaration


// let a = 12;

// let a  = 122;

// console.log(a)        // error throws on redeclaration


// const discount = "12%"    /// its is certain that this value would not change
                            // it is use for making the value constant and not allowed to change
//   discount = "10%"                      



// ------------------scope: (global , block , functional)



// var a = 12   /// global scope :available throughout the program


// function abc(){
//     var a = 12;            //functional scope:available only inside the function not anywhere else
// }



// {
//     let a = 30;
//     console.log(a)
//     a = 20
// }

// console.log(a)      ///a not avaiable outside

                

// {
//     var a = 30;                    //var is leaky in nature and does not value blockscope,it  only entertain 
//                                    //  functional scope
//     console.log(a)
//     a = 20
// }

// console.log(a)                        // a is accessible outside the block with var




// function abcd(){
//     let a = 20;                            //due to 1 curley brackets this varaible is available
//                                             //  throughout the function as let follows block scope only
//      console.log("a -->" + a)                                      
// }

// abcd()
// function abc(){
//     if(true){
//         let b = 30;                          // let nature only allows the b to be availbe inside if block
//     }
//     console.log("b-->" + b)
// }

// abc()


// ---------------------- reassignment , redeclaration


var a  = 12 //declare and initialized

a = 20      //reassignment

var a = 30 // redeclaration  is possible in var