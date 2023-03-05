'use strict';

function getSecondsToTomorrow() {
  let now = new Date();
  let startNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round(startNextDay - now / 1000); 
}

console.log(getSecondsToTomorrow());