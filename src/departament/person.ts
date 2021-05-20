interface Person {
    nombre: string;
    age : number;
    greet : string;
}
interface Data extends Person {
    nombre : string;
    age : number;
    lastname? : string;
}
interface Greeting extends Person {
    greet : string;
}
class Greeting implements Data{

}
