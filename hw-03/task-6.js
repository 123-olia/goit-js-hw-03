/*
Задание 6
Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).
*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
  for (let i = 0; i <= allProducts.length; i += 1) {
    const product = allProducts[i];
    // console.log(product);
    if (productName === product.name) {
      let generalCost = 0;
      generalCost = product.price * product.quantity;
      return generalCost;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// console.log(calculateTotalPrice(products, 'Захват')); // 2400

// console.log(calculateTotalPrice(products, 'Сканер')); // 8100
