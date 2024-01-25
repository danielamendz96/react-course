/**
 * esta funcion calcula el precio total de una nueva orden
 * 
 * @param {Array} products cartProducts: array of objects
 * @returns {number} total price
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach (product => sum += product.price)

    return sum;
}