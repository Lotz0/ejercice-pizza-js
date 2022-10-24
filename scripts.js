//array//
const pizzas = [
    {pizza: "muzzarella", id: 1, precio: 500, ingredientes: ["muzzarella", "oregano"]},
    {pizza: "napolitana", id: 2, precio: 780, ingredientes: ["muzzarella", "oregano", "tomate"]},
    {pizza: "palmitos", id: 3, precio: 750, ingredientes: ["muzzarella", "oregano", "palmitos", "salsa golf"]},
    {pizza: "americana", id: 4, precio: 900, ingredientes: ["muzzarella", "calabresa"]},
    {pizza: "4 quesos", id: 5, precio: 1200, ingredientes: ["muzzarella", "oregano", "parmesano", "fontina", "provolone"]},
    {pizza: "jamon y morrones", id: 6, precio: 800, ingredientes: ["muzzarella", "jamon", "morron"]},
    {pizza: "crudo y rucula", id: 7, precio: 1600, ingredientes: ["muzzarella", "jamon crudo", "rucula"]},
    {pizza: "champinones", id: 8, precio: 1000, ingredientes: ["muzzarella", "champinones", "salsa blanca"]},
]


//Precio mas economico
const precio = pizzas.forEach(pizzas => {
    if(pizzas.precio < 600){
        console.log(`la pizza mas economica es la ${pizzas.pizza} de $${pizzas.precio} pesos`)
    }
});



//Id impares//
const impar = pizzas.forEach(pizzas => {
    if(pizzas.id % 2 !==0){
        console.log(`la pizza ${pizzas.pizza} tiene id impar ID: ${pizzas.id} `)
    }
});

//nombre y precios de la pizza//
const namePrice = pizzas.forEach(function(pizzas){
    console.log(`pizza: ${pizzas.pizza}                Precio: $${pizzas.precio} pesos`);
});


//ingredientes//
const ingredientes = pizzas.forEach(function(pizzas){
    console.log(`pizza:${pizzas.pizza}                  Ingredientes:${pizzas.ingredientes}`)
});


