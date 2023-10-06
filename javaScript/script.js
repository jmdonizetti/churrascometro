const events = {
    INCREMENTAR : "INCREMENTAR_EVENTO",
    CALCULAR: "CALCULO_SOLICITADO_EVENTO",
    CALCULO_REALIZADO: "CALCULO_REALIZADO_EVENTO",
}


//Criando uma função para mudar o valor do input com um incremento
function adicionaValor(input, incremento) {
    //criando uma const que tem o valor atual do input, transforma o valor dele em numero inteiro com base 10 usando parseInt.
    //mas se for false ele vira 0
    const valorAtual = parseInt(input.value, 10) || 0;
    //pego o valor do input faço ele somar com o valor atual mais o incremento
    input.value = valorAtual + incremento;
}

//função para adicionar o click aos botões esquerdo e direito
function adicionarClick (leftButton, rightButton, input) {
    //adicionando um evento para diminuir o valor do input
    leftButton.addEventListener('click', () => {
        if(input.value > 0){
            input.value--;
        }
    });

    //adicionando o click para aumentar o valor to input
    rightButton.addEventListener('click', () => {
        //chamando a função adicionaValor para aumentar o valor ao clicar no botão direito
        adicionaValor(input, 1);

        console.log('DISPARADO: ' + events.INCREMENTAR);
        rightButton.dispatchEvent(new CustomEvent(events.INCREMENTAR, {bubbles: true}))
    });
}

//Adicionando os eventos ao conjunto de botoes
adicionarClick(numberLeft, numberRight, input);
adicionarClick(numberLeft2, numberRight2, input2);
adicionarClick(numberLeft3, numberRight3, input3);
adicionarClick(numberLeft4, numberRight4, inputAlcool);

//buttonTema






