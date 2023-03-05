'use strict';
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries){
    let maxSalary = 0;
    let bestWorker = null;
    for(let [name,salary] of Object.entries(salaries)){
        if (salary > maxSalary){
            bestWorker = name;
            maxSalary = salary;
        }
    }
    return bestWorker;
}

console.log(topSalary(salaries));