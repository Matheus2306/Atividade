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
  let menssaResul = document.getElementById("resultado");
  let menssaErr = document.getElementById("erro");
  for (let i = 1; i <= nume; i++) {
    if (nume % i == 0) {
      cont++;
    }
  }
  switch (true) {
    case nume <= 0:
      menssaResul.innerHTML = "";
      menssaErr.innerHTML = `Informar numero positivo`;
      break;
    case cont == 2:
      menssaErr.innerHTML = "";
      menssaResul.innerHTML = `${nume} é um número Primo`;
      break;
    default:
      menssaErr.innerHTML = "";
      menssaResul.innerHTML = `${nume} é um NÃO número Primo`;
      break;
  }
};

exercicio4 = () => {
  let valDtabu = document.getElementById("num").value;
  let resp = document.getElementById("resposta");
  let err = document.getElementById("erro");

  if (valDtabu <= 0) {
    err.innerHTML += `informe um número positivo`;
  } else {
    err.innerHTML = "";
    resp.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      let valo = valDtabu * i;
      resp.innerHTML += `<h4>${valDtabu} X ${i}=${valo} </h4>`;
    }
  }
};

exercicio5 = () => {
  let vlar = document.getElementById("num").value;
  let i = 1;
  let err = document.getElementById("erro");
  let resul = document.getElementById("resultado");
  resul.innerHTML = "";
  if (vlar <= 0) {
    err.innerHTML += `informe outro numero`;
  }
  while (i <= vlar) {
    if (i % 2 == 1) {
      err.innerHTML = "";
      resul.innerHTML += `<h4>#${i}</h4>`;
    }
    i++;
  }
};

exercicio6 = () => {
  let valDescr = document.getElementById("num").value;
  let resp = document.getElementById("resposta");
  let err = document.getElementById("erro");
  let i = 1;
  let soma = 0;
  if (valDescr <= 0) {
    err.innerHTML = `informe outro número`;
  }
  while (i <= valDescr) {
    if (i % 2 == 0) {
      soma += i;
      err.innerHTML = "";
      resp.innerHTML = soma;
    }

    i++;
  }
};

exercicio7 = () => {
  let i = 10;
  let resp = document.getElementById("resposta");
  resp.innerHTML = "";
  while (i >= 1) {
    resp.innerHTML += `<h4>${i}</h4>`;
    i--;
  }
};

exercicio8 = () => {
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  let valor = document.getElementById("palavra").value;
  const palavras = valor.split("");
  const palavrasinv = [];
  for (let i = palavras.length; i >= 0; i--) {
    palavrasinv.push(palavras[i]);
  }

  if (palavras.join("") == palavrasinv.join("")) {
    document.getElementById("resultado").innerText =
      "Essa palavra é um palíndromo";
  } else {
    document.getElementById("erro").innerText =
      "Essa palavra não é um palíndromo";
  }
};
exercicio9 = () => {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
    document.getElementById("resposta").innerHTML = soma;
  }
};

exercicio10 = () => {
  let nume = document.getElementById("num").value;
  let resp = document.getElementById("resultado");
  let somar = 0;
  let err = document.getElementById("erro");
  let i = 1;
  if (nume > 0) {
    somar += i;
    resp.innerHTML = `a soma dos números entre 0 e ${nume} = ${soma}`;
    while (i <= nume) {
      err.innerHTML = "";
      let media = somar / nume;

      i++;
    }
  } else {
    resp.innerHTML = "";
    err.innerHTML = "use um número maior que 0";
  }
};

exercicio11 = () => {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resp.innerHTML += `<h4>${i}</h4>`;
    }
  }
};

exercicio12 = () => {
  let coleta = document.getElementById("num").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let soma = 0;
  if (coleta > 0) {
    for (let i = 1; i <= coleta; i++) {
      soma += i;
      resp.innerHTML = "";
      err.innerHTML = "";
      resp.innerHTML = soma;
    }
  } else {
    resp.innerHTML = "";
    err.innerHTML = "coloque um número positivo";
  }
};

exercicio13 = () => {
  let pegar1=document.getElementById("num1").value
  let pegar2=document.getElementById("num2").value
  let resp=document.getElementById("resultado")
};
