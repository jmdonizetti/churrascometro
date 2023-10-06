document.addEventListener('DOMContentLoaded', function (){

    const secondSection = document.createElement('section');
    secondSection.classList.add('second-section');

    const h2 = document.createElement('h2');
    h2.innerText = 'QUAIS CARNES SERÃO SERVIDAS?';

    const meat = document.createElement('div');
    meat.classList.add('meat');

    const containerPicanha = document.createElement('label');
    containerPicanha.classList.add('container');
    const inputPicanha = document.createElement('input');
    inputPicanha.setAttribute('checked', 'checked');
    inputPicanha.setAttribute('type', 'checkbox');
    inputPicanha.setAttribute('id', 'picanha');
    const divCheckmarkPicanha = document.createElement('div');
    divCheckmarkPicanha.classList.add('checkmark');
    const labelPicanha = document.createElement('label');
    labelPicanha.setAttribute('for', 'picanha');
    labelPicanha.innerText = 'PICANHA';

    document.body.appendChild(secondSection);
    secondSection.appendChild(h2);

    secondSection.appendChild(meat);
    meat.appendChild(containerPicanha);
    containerPicanha.appendChild(inputPicanha);
    containerPicanha.appendChild(divCheckmarkPicanha);
    containerPicanha.appendChild(labelPicanha);

    const containerContrafile = document.createElement('label');
    containerContrafile.classList.add('container');
    const inputContrafile = document.createElement('input');
    inputContrafile.setAttribute('type', 'checkbox');
    inputContrafile.setAttribute('id', 'contrafile');
    const divCheckmarkContrafile = document.createElement('div');
    divCheckmarkContrafile.classList.add('checkmark');
    const labelContrafile = document.createElement('label');
    labelContrafile.setAttribute('for', 'contrafile');
    labelContrafile.innerText = 'CONTRAFILÉ';

    meat.appendChild(containerContrafile);
    containerContrafile.appendChild(inputContrafile);
    containerContrafile.appendChild(divCheckmarkContrafile);
    containerContrafile.appendChild(labelContrafile);

    const meat2 = document.createElement('div');
    meat2.classList.add('meat2');

    const containerAsa = document.createElement('label');
    containerAsa.classList.add('container');
    const inputAsa = document.createElement('input');
    inputAsa.setAttribute('type', 'checkbox');
    inputAsa.setAttribute('id', 'asa');
    const divCheckmarkAsa = document.createElement('div');
    divCheckmarkAsa.classList.add('checkmark');
    const labelAsa = document.createElement('label');
    labelAsa.setAttribute('for', 'asa');
    labelAsa.innerText = 'ASA';

    secondSection.appendChild(meat2);

    meat2.appendChild(containerAsa);
    containerAsa.appendChild(inputAsa);
    containerAsa.appendChild(divCheckmarkAsa);
    containerAsa.appendChild(labelAsa);

    const containerLinguica = document.createElement('label');
    containerLinguica.classList.add('container');
    const inputLinguica = document.createElement('input');
    inputLinguica.setAttribute('type', 'checkbox');
    inputLinguica.setAttribute('id', 'linguica');
    const divCheckmarkLinguica = document.createElement('div');
    divCheckmarkLinguica.classList.add('checkmark');
    const labelLinguica = document.createElement('label');
    labelLinguica.setAttribute('for', 'linguica');
    labelLinguica.innerText = 'LINGUIÇA';

    meat2.appendChild(containerLinguica);
    containerLinguica.appendChild(inputLinguica);
    containerLinguica.appendChild(divCheckmarkLinguica);
    containerLinguica.appendChild(labelLinguica);

    const meat3 = document.createElement('div');
    meat3.classList.add('meat3');

    const containerFraldinha = document.createElement('label');
    containerFraldinha.classList.add('container');
    const inputFraldinha = document.createElement('input');
    inputFraldinha.setAttribute('type', 'checkbox');   
    inputFraldinha.setAttribute('id', 'fraldinha');
    const divCheckmarkFraldinha = document.createElement('div');
    divCheckmarkFraldinha.classList.add('checkmark');
    const labelFraldinha = document.createElement('label');
    labelFraldinha.setAttribute('for', 'fraldinha');
    labelFraldinha.innerText = 'FRALDINHA';

    secondSection.appendChild(meat3);

    meat3.appendChild(containerFraldinha);
    containerFraldinha.appendChild(inputFraldinha);
    containerFraldinha.appendChild(divCheckmarkFraldinha);
    containerFraldinha.appendChild(labelFraldinha);

    const containerPanceta = document.createElement('label');
    containerPanceta.classList.add('container');
    const inputPanceta = document.createElement('input');
    inputPanceta.setAttribute('type', 'checkbox');   
    inputPanceta.setAttribute('id', 'panceta');
    const divCheckmarkPanceta = document.createElement('div');
    divCheckmarkPanceta.classList.add('checkmark');
    const labelPanceta = document.createElement('label');
    labelPanceta.setAttribute('for', 'panceta');
    labelPanceta.innerText = 'PANCETA';

    meat3.appendChild(containerPanceta);
    containerPanceta.appendChild(inputPanceta);
    containerPanceta.appendChild(divCheckmarkPanceta);
    containerPanceta.appendChild(labelPanceta);

    //BOTÃO DE CALCULAR
    const buttonCalcular = document.createElement('button');
    buttonCalcular.classList.add('btn');
    buttonCalcular.innerText = 'CALCULAR';

    buttonCalcular.addEventListener('click', () =>{
        buttonCalcular.dispatchEvent(new CustomEvent(events.CALCULAR, { bubbles: true}))
        console.log('DISPARADO: ' + events.CALCULAR);
    });

    secondSection.appendChild(buttonCalcular);
});