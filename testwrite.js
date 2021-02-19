'use strict';

const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23465468464646468, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student);
fs.writeFileSync('student-2.json', data);