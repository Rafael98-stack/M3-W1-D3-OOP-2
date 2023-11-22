var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono(_numero) {
        this.numero = _numero;
    }
    return Telefono;
}());
var Operaio = /** @class */ (function () {
    function Operaio(_nome, _cognome, _numero) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numero = _numero;
    }
    Operaio.prototype.getNameSurname = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    return Operaio;
}());
var Tasse = /** @class */ (function () {
    function Tasse(_tipo1, _quota1, _tipo2, _quota2, _tipo3, _quota3) {
        this.tipo1 = _tipo1;
        this.quota1 = _quota1;
        this.tipo2 = _tipo2;
        this.quota2 = _quota2;
        this.tipo3 = _tipo3;
        this.quota3 = _quota3;
    }
    return Tasse;
}());
var CalcMonetario = /** @class */ (function (_super) {
    __extends(CalcMonetario, _super);
    function CalcMonetario(_operaio, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef, _tasseutile, _tipo1, _quota1, _tipo2, _quota2, _tipo3, _quota3) {
        if (_quota1 === void 0) { _quota1 = 0.26; }
        if (_quota2 === void 0) { _quota2 = 0.23; }
        if (_quota3 === void 0) { _quota3 = 0.24; }
        var _this = _super.call(this, _tipo1, _quota1, _tipo2, _quota2, _tipo3, _quota3) || this;
        _this.operaio = _operaio;
        _this.codredd = _codredd;
        _this.redditoannuolordo = _redditoannuolordo;
        _this.tasseinps = _tasseinps;
        _this.tasseirpef = _tasseirpef;
        return _this;
    }
    CalcMonetario.prototype.getTasseInps = function () {
        var contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota1;
        var totContrRedAnnuoLordo = this.redditoannuolordo - contributoRedditoAnnuoLordo;
        this.tasseinps += this.quota1;
        return contributoRedditoAnnuoLordo;
    };
    CalcMonetario.prototype.getTasseIrpef = function () {
        var contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota2;
        var totContrRedAnnuoLordo = this.redditoannuolordo - contributoRedditoAnnuoLordo;
        this.tasseirpef += this.quota3;
        return contributoRedditoAnnuoLordo;
    };
    CalcMonetario.prototype.getTasseUtile = function () {
        var contributoRedditoAnnuoLordo = this.redditoannuolordo * this.quota3;
        var totContrRedAnnuoLordo = this.redditoannuolordo - contributoRedditoAnnuoLordo;
        this.tasseutile += this.quota1;
        return contributoRedditoAnnuoLordo;
    };
    CalcMonetario.prototype.getRedditoAnnuoNetto = function () {
        var TOTNETTOANNUO = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef() + this.getTasseUtile());
        return TOTNETTOANNUO;
    };
    return CalcMonetario;
}(Tasse));
var operaio1 = new CalcMonetario(["Luca ", "De Santis " + "Telefono: ", [3517799087]], 17, 15000, 0, 0, 0, "tasse INPS", this.quota1, "tasse IRPEF", this.quota2, "tasse utile", this.quote3);
console.log(operaio1);
console.log(operaio1.getTasseInps());
console.log(operaio1.getTasseIrpef());
console.log(operaio1.getTasseUtile());
console.log(operaio1.getRedditoAnnuoNetto());
