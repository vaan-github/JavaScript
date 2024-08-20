// Immediately Invoked Function Expressions (IIFE)

// To run function immediately and to prevent the function from global scope pollution.
// global scope pollution : function can use the global variable we sometime lead to inconsistent function.

/**
        *  IFFE STRUCTURE
        
        (FUNCTION DEFINITION)(FUNCTION CALL);
        
        *  IFFE STRUCTURE WITH ANANONYMOUS ARROW FUNCTION WITH IMPLICIT RETURN

        ( (FUNCTION PARAMETERS)=>(FUNCTION BODY WITH IMPLICIT RETURN))(FUNCTION CALL);


        // IIFE DONT KNOW WHEN / HOW  TO STOP THE INVOKED FUNCTION HENCE, WE USE ; 

 
 */


function normalFunction(){
    console.log('normal function')
}
normalFunction();  // semi-colon state the end of the function .

// to start a new iife function put a semi-colon after the previous normal or iife function ends

// NAMED IIFE 
(function iifeNormalFunction(){
    console.log('iife function')
})();   

// IIFE arrow version  # VERY  TRICKKY. :\

// SIMPLE IFFY OR UNNAMED IFFE
((name) => (console.log(`iife anonymous arrow version with implicit return .${name} `)) ) ("ANIKET");
