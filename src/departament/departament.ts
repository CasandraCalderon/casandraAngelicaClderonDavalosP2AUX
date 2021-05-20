interface departament{
    owner: string;
    id : number;
    workers : string [];
    createWorker: string [];
    showEmployeesInfo: string [];
}

class departament {
    private static owner: string;
    static id : number;
    static createWorker: string [];
    static workers : string [] = ['Juan', 'Carlos']
    static showEmployeesInfo: string [] = [];

    constructor(owner :string, public id : number, public createWorker: string []) {
        this.owner = owner;
        this.id = id;
        this.createWorker = createWorker;
        this.workers = departament.workers;
        this.showEmployeesInfo = departament.showEmployeesInfo;
    }
    protected obtenerNombre (): string{
        return this.owner;
    }
    agregar(){
        console.log('Nombre: ',this.owner);
        console.log('ID de Departamento: ',this.id)
    }
    infEmpleados(){
        this.workers = this.workers.concat(this.createWorker);
        this.showEmployeesInfo = this.workers;
        console.log('Empleados: ', this.showEmployeesInfo)
    }
}
class nombreCompleto extends departament {
    nombreCompleto : string = this.obtenerNombre();
}

let nombre = new departament('casandra', 123, ['Pedro', 'Susan', 'Julia']);
console.log(nombre.agregar());
console.log(nombre.infEmpleados());

export default departament;