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

export class Hero extends Person {
    constructor(
        public nickname: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York')
    }
}


//const iron = new Person('Francisco', 'Atlanta');
const iron = new Hero('Misterio', 28, 'Tony');

console.log('iron :>> ', iron);