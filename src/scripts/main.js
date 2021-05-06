// Função que pega a URL da API
function getURL(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  
  return request.responseText;

};
// Função que cria as linhas com os dados solicitado da API
function createLine(results) {
  // Cria uma linha para cada usuario e adiciona na tabela
  let tdImage = document.createElement('img');
  let line = document.createElement("tr"); // Cria linha
  let tdFirstName = document.createElement("td"); // Cria coluna do primeiro nome
  let tdLastName = document.createElement("td");  // Cria coluna do Sobrenome
  let tdAge =  document.createElement("td");      // Cria coluna da idade
  let tdCity = document.createElement("td");      // Cria coluna da cidade

  // Iinforma o caminho dos dados solicitados na api
  tdImage.src = results.picture.large;
  tdFirstName.innerHTML = results.name.first;
  tdLastName.innerHTML = results.name.last;
  tdAge.innerHTML = results.registered.age;
  tdCity.innerHTML = results.location.city;

  // Adciona ao HTML
  line.appendChild(tdImage);
  line.appendChild(tdFirstName);
  line.appendChild(tdLastName);
  line.appendChild(tdAge);
  line.appendChild(tdCity);
  return line;
};

// Função para carregar mais resultados
function more() {
  // Variavel usada para carregar mais resultados quando apertar o botao
  resultAmount += 10 - 10;
  // Salva a url na variavel data
  let data = getURL("https://api.randomuser.me/?results=" + resultAmount);
  let results = JSON.parse(data);
  let table = document.getElementById("table");

  results.results.forEach(element => {
    let line = createLine(element);
    table.appendChild(line);
  });

  console.log(resultAmount);
};

// Função principal
function main() {
  // Variavel usada para carregar mais resultados quando apertar o botao
  resultAmount = 10;
  // Salva a url na variavel data
  let data = getURL("https://api.randomuser.me/?results=" + resultAmount);
  let results = JSON.parse(data);
  let table = document.getElementById("table");

  results.results.forEach(element => {
    let line = createLine(element);
    table.appendChild(line);
  });
};

main();

