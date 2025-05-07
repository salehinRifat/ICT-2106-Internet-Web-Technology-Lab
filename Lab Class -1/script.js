let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

products.sort((a,b)=>a.price-b.price);
// console.log(products);

// setTimeout(()=>{
//     console.log("Amar nam Maruf");
// },1000);

function countDown(number){
    if(number<0)
        return;
    console.log(number);
    countDown(number-1);
}

countDown(5);