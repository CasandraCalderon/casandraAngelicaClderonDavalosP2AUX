import departament from "./departament"
var reportes : string [] =new Array;
interface ReportsDepartament extends departament{
    reports: string [];
    addReport: string [];
}
class ReportsDepartament {
    static reports: string [];
    protected static addReport: string [];
    constructor(addReport : string []){
        this.reports = new Array();
        this.addReport = addReport; 
    }
    add(){
        this.reports = this.reports.concat(this.addReport);
        for (let i : number = 0; i<this.reports.length; i++){
            console.log ('Reporte agregado: ', this.reports[i]);
        }
    }
    greet (){
        this.reports = this.reports.concat(this.addReport);
        console.log('Hello ${name} there are ${reports.length}');
    }
}
class Reporst extends ReportsDepartament{
    ingresarReporte : string [] = this.addReport;
}
let reporte = new ReportsDepartament (['task 004 failed', 'task 005 failed', 'task 006 failed']);
//console.log(reporte.add());
console.log(reporte.greet());
let reporte1 = new ReportsDepartament (['task 007 failed']);
console.log(reporte1.add());