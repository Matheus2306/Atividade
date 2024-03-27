exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";

  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h2>#${i}</h2> `;
  }
};

exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let numColocado = document.getElementById("num").value;
  for (let i = 0; i <= numColocado; i += 2) {
    document.getElementById("resposta").innerHTML += `<h2>#${i}</h2>`;
  }
};

exercicio3 = () => {
  let nume = document.getElementById("num").value;
  let cont = 0;
  
  for (let i = 1; i <= nume; i++) {
    if (nume % i == 0) {
      cont++;
    }
  }
  if (cont == 2) {
    document.getElementById(
      "resultado"
    ).innerHTML = `${nume} é um número Primo`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `${nume} é um NÃO número Primo`;
  }
};
