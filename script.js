const fruitArr = [
  "Apple",
  "Avocado",
  "Banana",
  "Blueberry",
  "Grapefruit",
  "Honeydew Melon",
  "Kiwifruit",
  "Lemon",
  "Lime",
  "Mandarin",
  "Mango",
  "Orange",
  "Passionfruit",
  "Pear",
  "Pineapple",
  "Raspberry",
  "Rockmelon",
  "Strawberry",
  "Tomatoe",
  "Watermelon",
];
const fruitList = document.getElementById("fruit-list");
const fruitInput = document.getElementById("fruit-input");

function loadData(data, element) {
  //função que é dado os dados(data) que queremos carregar em um elemento(element)
  if (data) {
    //se houver algum dado, se foi definido e então vamos inserir o data no elemnto
    element.innerHTML = ""; //primeiro limpar o elemento
    let innerElement = ""; //criado para receber os <li>
    data.forEach((item) => {
      //usar os dados e criar um loop para criar um <li> para cada dado
      innerElement += `<li>${item}</li>`;
    });

    element.innerHTML = innerElement; //agora que o innerElement está com os dados passamos para o element
  }
}
loadData(fruitArr, fruitList); //chama a função usando fruitArr como data e fruitList como element

function filterData(data, searchText) {
  //função que pega a lista de frutas e o input que o usuário colocar e filtra para letra minúscula
  return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}

fruitInput.addEventListener("input", function () {
  fruitList.setAttribute("style", "visibility: visible");
  //quando o usuário digitar algo na caixa de input vai acionar uma função
  const filteredData = filterData(fruitArr, fruitInput.value); //função vai pegar o valor da caixa de input e passará pelo filterData e armazenará em filteredData
  loadData(filteredData, fruitList); //pega o valor filtrado e passa pelo loadData
});

function clickBody() { //função para esconder a lista quando clicar fora dela
  fruitList.setAttribute("style", "visibility: hidden");
}
document.body.addEventListener("click", clickBody);
