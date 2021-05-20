//Modifique una vez más la función de “greet” para poder imprimir su año de nacimiento, pero agregue un parámetro para poder imprimirlo como numero o como cadena, de manera que dependiendo que argumento le pasen, lo imprima como uno de estos dos tipos de datos
var greet = function (nombre, edad, año, cb) {
    var saludo = ('Hello ' + nombre + ' your age is ' + edad + ' and you were born is ' + año);
    return cb(saludo);
};
var never = greet('Angie', 23, 1997, function (saludo) {
    return saludo;
});
console.log(never);
