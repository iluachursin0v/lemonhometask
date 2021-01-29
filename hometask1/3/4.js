var unit, number, result;
unit = "kb";
number = 5; 

switch(unit){
    case "byte":
        esult = number;
        break;
    case "kb":
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