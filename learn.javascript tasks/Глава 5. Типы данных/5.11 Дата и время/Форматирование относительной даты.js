'use strict';

function formatDate(date) {
  let timeAgo = new Date() - date;
  if (timeAgo < 1000) {
    return 'прямо сейчас';
  }
  else if (Math.floor(timeAgo / 1000) < 60) {
    return Math.floor(timeAgo / 1000) + ' сек. назад';
  }
  else if (Math.floor(timeAgo / 60000) < 60) {
    return Math.floor(timeAgo / 60000) + ' мин. назад';
  } 
  else{
    let str;
    let day = date.getDate() > 9 ? date.getDate(): "0" + date.getDate();
    str = day + ".";
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1): "0" + (date.getMonth() + 1);
    str = str + month + "." + date.getFullYear().toString().slice(-2) + " ";
    let hour = date.getHours() > 9 ? date.getHours(): "0" + date.getHours();
    str = str + hour + ":";
    let min = date.getMinutes() > 9 ? date.getMinutes(): "0" + date.getMinutes();
    str = str + min;
    return str;
  }
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );