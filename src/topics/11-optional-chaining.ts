export interface Passenger {
    name: string;
    children?: string[];   
}

const passenger1: Passenger = {
    name: 'Francisco',
}

const passenger2: Passenger = {
    name: 'Carlos',
    children: ['Juan','Pedro']  //children is an array of strings.
}

const returnChildrenNumber = (passenger: Passenger)=> {
    const howManyChildren = passenger.children?.length || 0;//optional chaining
    //const howManyChildren = passenger.children!.length; // el ! da a entender que una property o valor siempre debe de existir not null assertion operator
    console.log(passenger.name, howManyChildren)
    return howManyChildren;
}

returnChildrenNumber(passenger1)
returnChildrenNumber(passenger2)