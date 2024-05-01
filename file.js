let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2);

/**
 * imp: JavaScript Execution Context - how files are executed in javascript.
 * 01. Global Execution Context/Environment - this variable holds global EC. Every runtime has different global EC. For browser, this holds window object.
 * three types of execution context - global, functional, and eval.
 * to execute any code/program, javascript creates two phase - memory creation phase/creation phase/memory phase and Execution phase
 * 
 * 02. memory creation phase: memory allocation phase for variables.
 *          val1 = undefined
 *          val2 = undefined
 *          addNum = definition (full code)
 * 03. Execution phase: 
 */