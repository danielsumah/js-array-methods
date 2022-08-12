const items = [
    {name:'Bike', price: 100},
    {name:'TV', price: 200},
    {name:'Album', price: 10},
    {name:'Book', price: 5},
    {name:'Phone', price: 500},
    {name:'Computer', price: 1000},
    {name:'Keyboard', price: 25}
];

// 1. filter Methods
// const filteredItems = items.filter(item => item.price <= 100);
// console.log(filteredItems)


// 2. map
//returns an array of all item names
// const itemNames = items.map(item => {
//     return item.name
// })
// console.log(itemNames)

//return an array of all item prices
// const itemPrices = items.map(item => {
//     return item.price
// })
// console.log(itemPrices)


//3. Find method
//returns the first places where the condition is true
// const foundItem = items.find(item => {
//     return item.name === 'Book';
// })
// console.log(foundItem)


//4. ForEach
// items.forEach(item =>{
//     console.log(item.name)
// })


//5.Some
// checks if anything in the arary meets the stated condition
// const hasInexpensiveItems =items.some(item =>{
//     return item.price <= 100;
// })
// console.log(hasInexpensiveItems)


//6. Every
//checks if every item meets the stated condition
// const allMorethan5000 =items.every(item=> {
//     return item.price > 5000;
// })
// console.log(allMorethan5000)


//7. reduce 
//get the total price of all the prices
// const totalPrice = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal;
// }, 0) 
// console.log(totalPrice)


//8. includes
// const numbers = [1,2,3,4,5]
// const includeTwo = numbers.includes(2)
// console.log(includeTwo)