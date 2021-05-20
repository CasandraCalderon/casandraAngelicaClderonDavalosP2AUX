//Modifique la función “greet” para poder implementar una función como parámetro la cual se encargará de imprimir o generar el saludo, establezca los tipos de datos necesarios para que la función cumpla con los requerimientos de TypeScript
const greet = (nombre : string, edad: number, cb: (saludo: string) => string) => {
    let saludo = ('Hello '+ nombre + ' your age is '+ edad);
    return cb (saludo);
 }
  
 let never = greet ('Angie', 23, (saludo) => {
    return saludo;
 })
  
 console.log(never);
 
