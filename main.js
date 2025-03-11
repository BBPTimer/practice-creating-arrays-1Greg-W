let groceryStoreItems = ["milk","eggs","green peppers","oatmeal","bananas"];
let prices = [4.99,5.99,1.99];

console.log(groceryStoreItems);
console.log(prices);

for(let i = 0; i < 3; i++) {
    console.log(groceryStoreItems[i]);
}

for(let j = 0; j < 2; j++) {
    console.log(`$${prices[j]}`);
}