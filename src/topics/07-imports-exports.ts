import { Product, taxCalculation } from './06-function-desestructuracion';

const shoppingCart: Product[] = [
    {
        description:'Monitor 27 Pulgadas',
        price: 1500.0
    },
    {
        description: 'iPad' ,
        price: 150.0
    }
];


const [ total, totalTax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total :>> ', total);
console.log('TotalTax :>> ', totalTax);