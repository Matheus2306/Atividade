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
    while (i <= nume) {
      somar += i;
      let media = somar / nume;
      err.innerHTML = "";
      resp.innerHTML = `a soma dos números entre 0 e ${nume} = ${somar} | a media = ${media} `;

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
    for (let i = 1; i <= coleta.length; i++) {
      soma += parseInt(coleta.charAt(coleta.length - i));
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
  let pegar1 = document.getElementById("num1").value;
  let pegar2 = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");

  let err = document.getElementById("erro");
  if (pegar1 <= 0 || pegar2 <= 0) {
    resp.innerHTML = "";
    err.innerText = "informe um número maior que 0";
  } else {
    err.innerHTML = "";
    resp.innerHTML = "";
    for (let i = pegar1; i <= pegar2; i++) {
      let teste = verificarPrimo(i);
      if (teste) {
        resp.innerText += ` ${i}`;
      }
    }
  }
};

verificarPrimo = (nume) => {
  let primo = true;
  let cont = 0;
  for (let i = 1; i <= nume; i++) {
    if (nume % i == 0) {
      cont++;
    }
  }
  if (cont != 2) {
    primo = false;
  }
  return primo;
};

exercicio14 = () => {
  let pegar1 = document.getElementById("num1").value;
  let pegar2 = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  if (pegar1 <= 0 || pegar2 <= 0) {
    resp.innerHTML = "";
    err.innerHTML = `informe um numero positivo`;
  } else {
    let area = (pegar1 * pegar2) / 2;
    err.innerHTML = "";
    resp.innerHTML = `o poligono de lado ${pegar1} e comprimento ${pegar2} possui uma area de ${area}`;
  }
};

exercicio15 = () => {
  let err = document.getElementById("erro");
  let resp = document.getElementById("resultado");
  let pala = document.getElementById("palavra").value;
  console.log(pala.length);
  let vog = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "ç",
    "â",
    "ã",
    "õ",
    "ô",
    "á",
    "à",
    "ó",
    "ò",
  ];
  let conso = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
    "ç",
  ];
  // let caracter = [
  //   "!",
  //   "@",
  //   "#",
  //   "$",
  //   "%",
  //   "&",
  //   "*",
  //   "(",
  //   ")",
  //   "_",
  //   "=",
  //   "`",
  //   "´",
  //   "~",
  //   "^",
  //   "{",
  //   "}",
  //   "[",
  //   "]",
  //   "¨",
  //   ":",
  //   ";",
  //   ".",
  //   "/",
  //   ">",
  //   ",",
  //   "<",
  //   "ª",
  //   "º",
  //   "|",
  // ];
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  resp.innerHTML = "";
  err.innerHTML = "";

  for (let i = 0; i < pala.length; i++) {
    if (pala == num[0]) {
      err.innerHTML += "<h4>informe uma palavra sem número</h4>";
    } else {
      for (let l = 0; l < vog.length; l++) {
        if (pala.charAt(i) == vog[l]) {
          console.log(pala.charAt(i));
          resp.innerHTML += `<h4>vogal:${pala.charAt(i)}</h4>`;
        }
      }
      for (let O = 0; O < conso.length; O++) {
        if (pala.charAt(i) == conso[O]) {
          console.log(pala.charAt(i));

          resp.innerHTML += `<h4>consoantes:${pala.charAt(i)}</h4>`;
        }
      }
    }
  }
};

exercicio16 = () => {
  let reaio = document.getElementById("num1").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let areaCir = 0;
  if (reaio > 0) {
    areaCir = reaio ** 2 * 3.14;
    err.innerHTML = "";
    resp.innerHTML = `a area do circulo de raio ${reaio} é = ${areaCir}`;
  } else {
    resp.innerHTML = "";
    err.innerHTML = "informe um numero positivo";
  }
};

exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let areatri = 0;
  if (base > 0 && altura > 0) {
    areatri = (base * altura) / 2;
    err.innerHTML = "";
    resp.innerHTML = `um triangulo de base = ${base} e de altura = ${altura} é = ${areatri}`;
  } else {
    resp.innerHTML = "";
    err.innerHTML = "informe um numero positivo";
  }
};

exercicio18 = () => {
  let basemaior = document.getElementById("num1").value;
  let basemenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let areatra = ((basemaior + basemenor) * altura) / 2;
  if (basemaior <= 0 || basemenor <= 0 || altura <= 0) {
    resp.innerHTML = "";
    err.innerHTML = "informe um numero positivo";
  } else {
    err.innerHTML = "";
    resp.innerHTML = `a area de um trapezio de base maior = ${basemaior}, base menor = ${basemenor} e altura = ${altura} é = ${areatra}`;
  }
};

exercicio19 = () => {
  let datnasc = document.getElementById("data").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let data = new Date();
  let data2 = new Date(datnasc);
  let idade = data.getTime() - data2.getTime();
  let difer = Math.floor(idade / (1000 * 60 * 60 * 24 * 365.25));
  switch (true) {
    case difer > 110:
      resp.innerHTML = "";
      err.innerHTML = `você tem mais de 110 anos, informe outra data `;

      break;
    case difer <= 0:
      resp.innerHTML = "";
      err.innerHTML = `Informe outra data`;
      break;
    case difer >= 18:
      err.innerHTML = "";
      resp.innerHTML = "";
      resp.innerHTML += `Você tem ${difer} anos de idade, e é maior de 18 anos!`;

      break;
    case difer < 18:
      err.innerHTML = "";
      resp.innerHTML = "";
      resp.innerHTML += `Você tem ${difer} anos de idade, e é menor de 18 anos!`;

      break;
    default:
      break;
  }
};

exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let inversao = "";
  error.innerText = "";
  result.innerHTML = "";

  if (frase == "") {
    error.innerText = `escreva algo`;
  } else {
    for (let i = 1; i <= frase.length; i++) {
      inversao += frase.charAt(frase.length - i);
      result.innerHTML = `o inverso da palavra ${frase} é ${inversao}`;
    }
  }
};
exercicio21 = () => {
  let resp = document.getElementById("resultado");
  let frasep = document.getElementById("frase").value;
  let err = document.getElementById("erro");
  let espaco = frasep.trim();
  console.log(espaco)
  if (frasep == "") {
    resp.innerHTML = "";
    err.innerHTML = "escreva uma frase";
  } else {
    resp.innerHTML = espaco.replace(/\s/g, " ");
  }
};

exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let soma = 0;
  result.innerText = "";

  soma += parseInt(num);
  while (soma <= 100) {
    let numero = parseInt(prompt("Informe mais um numero"));
    if (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Número Invalido, Informe novamente"));
    } else {
      soma += numero;
    }
  }

  result.innerText = `A o total da soma é: ${soma}`;
};

exercicio25 = () => {
  let pegar1 = document.getElementById("num1").value;
  let pegar2 = document.getElementById("num2").value;
  let pegar3 = document.getElementById("num3").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
};
