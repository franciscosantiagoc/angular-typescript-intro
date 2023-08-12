export class Person {
    /* public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    } */

    constructor(
        public name: string, 
        private address: string = 'No address' //asignación de valor por defecto en caso de no recibir
    ) {} 
}


const iron = new Person('Francisco', 'Atlanta');

console.log('iron :>> ', iron);