/*

1) This file will import all the functions.
2) Also, we will implement the functions example here.

*/

import * as _ from "./internals/loader";

const n1: number = 10;
const n2: number = 5;
const emptyVal = null;

// Check for isNull & isNotNull
const operations: Array<{ 'name': string, operation: any }> = [
    { "name": "Addition", "operation": _.addition(n1, n2) },
    { "name": "Subtraction", "operation": _.subtract(n1, n2) },
    { "name": "Multiplication", "operation": _.multiply(n1, n2) },
    { "name": "Division", "operation": _.divide(n1, n2) },
    { "name": "Check isNull", "operation": _.isNull(n1) },
    { "name": "Check isNotNull", "operation": _.isNotNull(n2) },
];

for (const op of operations) {
    console.log(op);
}
