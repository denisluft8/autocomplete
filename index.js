//pegar os valores do input
const inputFruit = document.getElementById('fruit-autocomplete')
const button = document.getElementById('search-button')
const list = document.getElementById('list-result')
const showButton = document.getElementById('show-button')

const fruitArr = [
  'Apple',
  'Grapefruit',
  'Lemon',
  'Lime',
  'Mango',
  'Orange',
  'Pear',
  'Pineapple',
  'Strawberry'
]

function autocomplete() {
  const value = inputFruit.value //colocar em value o valor que o usuário digitar

  const fruitArrLower = fruitArr.map(fruit => fruit.toLocaleLowerCase()) //transforma os valores do array pra letra minúscula
  const arr = fruitArrLower.filter(fruit => fruit.includes(value)) // encontra os valores semelhantes e cria um novo array

  console.log(arr)
}
function showArr() {
  for (let n = 0; n < fruitArr.length; n++) {
    const el = document.createElement('h3')
    el.classList.add('fruit-item')
    el.innerHTML = fruitArr[n]
    list.append(el)
  }
}

inputFruit.addEventListener('click', autocomplete)
showButton.addEventListener('click', showArr)
