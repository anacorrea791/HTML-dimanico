// Criando a função de flecha com frases aleatorias
const falar = () =>{
    //Criando o vetor de frases
    const frases = [
        "Hoje está um dia bonito!",
        "Falta muito para sexta-feira?",
        "Qual o cardápio de hoje no almoço?",
        "Vish, tem prova de matemática!!!",
    ];

    //Criando uma variavel para armazenar a DIV com id "tagarela"
    let tagarela = document.getElementById("tagarela");

    //Criando variavel de controle para a frase exibida
    let indice = 0

    //Craindo variavel para número aleatorio entre 0 e 1 (lembrando que 1 não entra na conta)
    let numero = Math.random()

    //Configurando o número para a frase selecionada
    if(numero> 0.75) indice = 3;
    else if (numero > 0.50) indice = 2;
    else if(numero > 0.25)  indice = 1;

    //Escrevendo a frase para o usuario
    tagarela.innerHTML = frases[indice];
};