export default class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get dddUpper() { return this.ddd.toUpperCase(); }
    get dddLower() { return this.ddd.toLowerCase(); }
    get numeroUpper() { return this.numero.toUpperCase(); }
    get numeroLower() { return this.numero.toLowerCase(); }
}