const atualizarDados = () => {
     // alert("funcionei")
    //Criando uma variavel para tbody
    let dados = document.getElementById("itens")
    //zerando o tbody se houver dados
    dados.innerHTML = "";
    //Gerando novos conteúdos dinamicamente
    for(let i = 0; i < 5; i++){
     //Criando variavel para valor aleatorio
    let preco = Math.random() * 100;
    //Criando variavel para um elemento tr(dados da tabela)
    let elemento = ""
    //Criando listra de cor diferente para as linhas ímpares
    if(i%2 !=0) elemento = "<tr class='listra'>"
    else elemento = "<tr>"
    //inserindo os itens da linha (tr)
    elemento += `<td>Produto ${i} </td>
    <td>R$ ${preco.toFixed(2)} </td>`;

    dados.innerHTML += elemento;
   }
};

