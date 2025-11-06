let items = [
    {
        name: "Apple",
        category: "Food",
        price: "1",
        amount: "300",
    },
    {
        name: "Phone",
        category: "Electronics",
        price: "600",
        amount: "26",
    },
    {
        name: "Meat",
        category: "Food",
        price: "4",
        amount: "100",
    },
    {
        name: "Tablet",
        category: "Electronics",
        price: "400",
        amount: "26",
    },
]
for (electronics of items) {
    if (electronics.category == "Electronics") {
        console.log(electronics.name);
    }
}
for (allPrice of items) {
    allPrice = 0;
    
}