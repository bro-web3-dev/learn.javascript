'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
  };
  
let userJson = JSON.stringify(user);
let userStr = JSON.parse(userJson);

console.log(userJson);
console.log(userStr);