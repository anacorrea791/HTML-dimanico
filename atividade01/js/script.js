const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  const trocarImagem = [
    "imagem/img01.png",
    "imgagem/img02.png",
    "imagem/img03.png",
    "imagem/img04.png",
  ];

  //Criando variavel de controle para a frase exibida
  let indice = 0;

  //Craindo variavel para número aleatorio entre 0 e 1 (lembrando que 1 não entra na conta)
  let numero = Math.random();

  //Configurando o número para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  imagem.src = trocarImagem[indice];
};


const calcular = (operador) => {
    let valor1 = parseFloat(frmCalculadora.inValor1.value);
    let valor2 = parseFloat(frmCalculadora.inValor2.value);
    let resultado = 0;

    switch (operador) {
        case "+" :
         resultado = valor1 + valor2;
         break;

        case "-" :
         resultado = valor1 - valor2;
        break;

        case "*" :
         resultado = valor1 * valor2;
        break;

        case "/" :
         resultado = valor1 / valor2;
        break;
        
    }
    frmCalculadora.inResultado.value = resultado
};

/*const subtrair = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    frmCalculadora.inResultado.value = resultado
};*/



