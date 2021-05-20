//Modifique la función “greet” para poder implementar una función como parámetro la cual se encargará de imprimir o generar el saludo, establezca los tipos de datos necesarios para que la función cumpla con los requerimientos de TypeScript
var greet = function (nombre, edad, cb) {
    var saludo = ('Hello ' + nombre + ' your age is ' + edad);
    return cb(saludo);
};
var never = greet('Angie', 23, function (saludo) {
    return saludo;
});
console.log(never);
