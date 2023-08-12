interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: "Nokia E5",
    price: 800.00
}

const tablet: Product = {
    description: "iPad Air",
    price: 1200.00
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation( options: TaxCalculationOptions ): number[] {
    let total = 0;

    let { products, tax } = options;
    products.forEach( product => {
        let { price } = product;
        total += price;
    })

    return [total, total * tax]
}



const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax
});


console.log('Total :>> ', result[0]);
console.log('Tax :>> ', result[1]);

export {

}