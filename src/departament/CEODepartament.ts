import departament from "./departament"
var Admins : string [] = [];
interface CEODepartament extends departament{
    admins: string;
}
class CEODepartemanet {
    static admins: string [];
    constructor(public admins : string []){
        this.admins = admins;
    }
    
    add(){
        
        console.log('Roles disponibles: ', this.admins);
    }
    Admins = Admins.concat(this.admins);
}

let admins = new CEODepartemanet (['admin','author','manager']);

console.log(admins.add());