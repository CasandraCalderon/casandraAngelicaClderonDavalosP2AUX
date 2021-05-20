"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admins = [];
class CEODepartemanet {
    constructor(admins) {
        this.admins = admins;
        this.Admins = Admins.concat(this.admins);
        this.admins = admins;
    }
    add() {
        console.log('Roles disponibles: ', this.admins);
    }
}
let admins = new CEODepartemanet(['admin', 'author', 'manager']);
console.log(admins.add());
