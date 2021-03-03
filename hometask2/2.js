//Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

ёlet number = 5; 
let factorial=1;
for(let i = number; i > 0; i--){
    factorial = factorial*i;
}


console.log(factorial);

