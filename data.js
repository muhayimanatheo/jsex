const items = [
    { name:"bike", price:100},
    { name:"TV", price:200},
    { name:"Album", price:10},
    { name:"Book", price:5},
    { name:"Phone", price:500},
    { name:"computer", price:1000},
]

const cheapproduct = items.filter((item) =>item.price<=10)
console.log(cheapproduct)
