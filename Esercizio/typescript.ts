class Telefono {
    numero: number;
    constructor (_numero: number) {
this.numero = _numero;
    }
}

class Operaio {
nome: string;
cognome: string;
numero: Telefono[];
constructor (_nome: string, _cognome: string, _numero: any) {
    this.nome = _nome;
    this.cognome = _cognome;
   this.numero = _numero;
}
getNameSurname() {
    return `${this.nome} ${this.cognome}`
}
}

abstract class Tasse {
    tipo1: string;
    quota1: number;
    tipo2: string;
    quota2: number;
    tipo3: string;
    quota3: number;
    constructor (_tipo1: string, _quota1: number, _tipo2: string, _quota2: number, _tipo3: string, _quota3: number) {
        this.tipo1 = _tipo1;
        this.quota1 = _quota1;
        this.tipo2 = _tipo2;
        this.quota2 = _quota2;
        this.tipo3 = _tipo3;
        this.quota3 = _quota3;
    }
   abstract getTasseInps(): any;
   abstract getTasseIrpef(): any;
   abstract getTasseUtile(): any;
}



class CalcMonetario extends Tasse { 
    operaio: Operaio[];  
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    tasseutile: number;
    reddannuonetto: number
    constructor (_operaio: any, _codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number, _tasseutile: number, _tipo1: string, _quota1: number = 0.26, _tipo2: string, _quota2: number = 0.23, _tipo3: string, _quota3: number = 0.24) {
        super (_tipo1, _quota1, _tipo2, _quota2, _tipo3, _quota3)
        this.operaio = _operaio;
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    getTasseInps() {
     const contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota1;
     const totContrRedAnnuoLordo =  this.redditoannuolordo - contributoRedditoAnnuoLordo;
       this.tasseinps += this.quota1;

        return contributoRedditoAnnuoLordo;
    }
    getTasseIrpef() {
        const contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota2;
        const totContrRedAnnuoLordo =  this.redditoannuolordo - contributoRedditoAnnuoLordo;
          this.tasseirpef += this.quota3;
   
           return contributoRedditoAnnuoLordo;
    }
    getTasseUtile() {
        const contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota3;
        const totContrRedAnnuoLordo =  this.redditoannuolordo - contributoRedditoAnnuoLordo;
          this.tasseutile += this.quota1;
   
           return contributoRedditoAnnuoLordo;
    }
    getRedditoAnnuoNetto() {
const TOTNETTOANNUO =this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef() + this.getTasseUtile());
        return TOTNETTOANNUO;
    }
}

const operaio1 = new CalcMonetario (["Luca ", "De Santis " + "Telefono: ", [3517799087]], 17, 15000,0,0,0, "tasse INPS", this.quota1, "tasse IRPEF", this.quota2, "tasse utile", this.quote3)

console.log(operaio1)
console.log(operaio1.getTasseInps())
console.log(operaio1.getTasseIrpef())
console.log(operaio1.getTasseUtile())
console.log(operaio1.getRedditoAnnuoNetto())