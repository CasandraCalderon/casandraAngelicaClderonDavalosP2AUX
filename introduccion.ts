//Modifique una vez más la función de “greet” para poder imprimir su año de nacimiento, pero agregue un parámetro para poder imprimirlo como numero o como cadena, de manera que dependiendo que argumento le pasen, lo imprima como uno de estos dos tipos de datos
const greet = (nombre : string, edad: number, año: number | string, cb: (saludo: string) => string) => {
    let saludo = ('Hello '+ nombre + ' your age is '+ edad + ' and you were born is '+año);
    return cb (saludo);
 }
  
 let never = greet ('Angie', 23, '1997', (saludo) => {
    return saludo;
 })
  
 console.log(never);
 
 
