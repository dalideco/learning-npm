const _ = require('lodash');

const numbers = [33,45,60,9,17,6];

_.each(numbers,function(number,i){
    document.querySelector('h1').innerText += `${number}`;
});