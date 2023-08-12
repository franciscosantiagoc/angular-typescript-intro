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

// export class Hero extends Person {
//     constructor(
//         public nickname: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York')
//     }
// }

export class Hero {
    //public person: Person;
    constructor(
        public nickname: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        //this.person = new Person(realName)
    }   
}

const tony = new Person('Tony Stark', 'New York')
//const iron = new Person('Francisco', 'Atlanta');
const iron = new Hero('Misterio', 28, 'Tony', tony);

console.log('iron :>> ', iron);