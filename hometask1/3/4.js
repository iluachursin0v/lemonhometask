var unit, number, result;
unit = "mb";
number = 5; 

switch(unit){
    case "bg":
        result = number;
        break;
    case "gb ":
        result = number * 1024;
        break;
    case "mb":
        result = (number * 1024)*1024;
        break;
    case "gb":
        result = ((number *1024)*1024)*1024;
        break;
}

console.log(number+" "+unit+" = "+result + " байт");