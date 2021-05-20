"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportes = new Array;
class ReportsDepartament {
    constructor(addReport) {
        this.reports = new Array();
        this.addReport = addReport;
    }
    add() {
        this.reports = this.reports.concat(this.addReport);
        for (let i = 0; i < this.reports.length; i++) {
            console.log('Reporte agregado: ', this.reports[i]);
        }
    }
    greet() {
        this.reports = this.reports.concat(this.addReport);
        console.log('Hello ${name} there are ${reports.length}');
    }
}
class Reporst extends ReportsDepartament {
    constructor() {
        super(...arguments);
        this.ingresarReporte = this.addReport;
    }
}
let reporte = new ReportsDepartament(['task 004 failed', 'task 005 failed', 'task 006 failed']);
//console.log(reporte.add());
console.log(reporte.greet());
let reporte1 = new ReportsDepartament(['task 007 failed']);
console.log(reporte1.add());
