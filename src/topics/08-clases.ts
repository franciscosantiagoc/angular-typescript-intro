export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Francisco';
        this.address = 'Atlanta';
    }
}


const iron = new Person();

console.log('iron :>> ', iron);