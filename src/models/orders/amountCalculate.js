export default function amountCalculate(amount, productID, products){
  const product = products.filter(product => product.id === productID)
  const total = amount * product[0].price
  return total
}