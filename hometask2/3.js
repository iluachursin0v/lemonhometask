//Дано число - вывести первые N делителей этого числа нацело.

let number, n, counter;
number = 20; 
n = 5; 
counter = 0;

for(let i = 0; i < number; i++){ 
    if(counter == n){
        break;
    }
    if( number % i == 0 ){
        console.log(i);
        counter++;
    }
}