'use strict';

function getSecondsToday() {
  let now = new Date();
  let startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round(now - startDay / 1000);
}

console.log(getSecondsToday());