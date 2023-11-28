async function convertmoeda() {
  const valor = document.getElementById('valor').value;
  const moeda = document.getElementById('moeda').value;

  const apiUrl = 'https://api.exchangerate-api.com/v4/latest/BRL';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const rate = data.rates[moeda]; 
    const convertedvalor = (valor * rate).toFixed(2);



    var mensagem = ""
    if(convertedvalor == "NaN" || convertedvalor == 0){
      alert("Atenção! Todos os espaços devem ser preenchidos!")
    }
    else{
      mensagem = `
      <p>${valor} BRL é igual a ${moeda}: ${convertedvalor} ${moeda}</p>
      `;
    }
    document.getElementById('result').innerHTML = mensagem




  } catch (error) {
    console.error('Erro ao converter moeda:', error);
    document.getElementById('result').innerHTML = '<p>Erro ao converter moeda.</p>';
  }
}


function Clear() {
  document.getElementById("valor").value = "";
  document.getElementById("moeda").value = "";
  document.getElementById("result").innerHTML = "";
}


document.getElementById('convertButton').addEventListener('click', convertmoeda);

