const dbz: string[] = [
    'Goku', 'Vegeta', 'Trunks'
];
//const trunk = dbz[3] || 'No hay personaje';

const [ , , Trunks = 'Not found'] = dbz;

//console.log('Personaje', dbz[2]);

console.log('Personaje :>> ', Trunks);


export {
    
}