'use strict';

function camelize(str) {
    let arr = str.split('-');
    let map = arr.map(function(item, index, array){
        if ( index == 0){
            return item
        }
        else{
            return item[0].toUpperCase() + item.slice(1);
        }
    });

    return map.join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');