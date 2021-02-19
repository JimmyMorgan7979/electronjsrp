// READ FROM A JSON FILE

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);
//console.log(student.name);