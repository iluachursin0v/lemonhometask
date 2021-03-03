var percent, size, duration; // %,$,years 
percent = 10;
size = 300000;
duration = 4;

console.log("За всё время клиент заплатит "+ size*percent/100 );
console.log("За один календарный год клиент заплатит" + (size*percent/100)/duration);
console.log("")