"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class departament {
    constructor(owner, id, createWorker) {
        this.id = id;
        this.createWorker = createWorker;
        this.owner = owner;
        this.id = id;
        this.createWorker = createWorker;
        this.workers = departament.workers;
        this.showEmployeesInfo = departament.showEmployeesInfo;
    }
    obtenerNombre() {
        return this.owner;
    }
    agregar() {
        console.log('Nombre: ', this.owner);
        console.log('ID de Departamento: ', this.id);
    }
    infEmpleados() {
        this.workers = this.workers.concat(this.createWorker);
        this.showEmployeesInfo = this.workers;
        console.log('Empleados: ', this.showEmployeesInfo);
    }
}
departament.workers = ['Juan', 'Carlos'];
departament.showEmployeesInfo = [];
class nombreCompleto extends departament {
    constructor() {
        super(...arguments);
        this.nombreCompleto = this.obtenerNombre();
    }
}
let nombre = new departament('casandra', 123, ['Pedro', 'Susan', 'Julia']);
console.log(nombre.agregar());
console.log(nombre.infEmpleados());
exports.default = departament;
