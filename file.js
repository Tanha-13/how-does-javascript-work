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
 *          result1 =undefined
 *          result2 = undefined
 * 03. Execution phase: 
 *          val1 = 10
 *          val2 = 5
 *          addNum: every time creates a new box that called executional context(new variable environment + execution thread). It will again execute the memory creation phase and execution phase.
 *      i. memory phase 
 *          val1 = undefined
 *          val2 = undefined
 *          total = undefined
 *      ii. execution phase
 *          num1 = 10
 *          num2 = 5
 *          total = 15. total variable is returned to parent executional context which is called global execution context.
 *          result1 = 15.
 *          total = 12
 *          result2 = 12.
 * 
 * topic: Call Stack
 * global execution, functions.
 */