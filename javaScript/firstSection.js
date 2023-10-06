//MAIN
const main = document.createElement('main');

const firstSection = document.createElement('section');
firstSection.classList.add('first-section');

const divTema = document.createElement('div');

const buttonTema = document.createElement('button');
buttonTema.setAttribute('id', 'buttonTema');
buttonTema.innerText = 'tema';

const animation = document.createElement('div');
animation.classList.add('animation');

const h2 = document.createElement('h2');
h2.innerText = 'QUANTAS PESSOAS VÃO AO CHURRASCO?';

const peopleOption = document.createElement('div');
peopleOption.classList.add('people-option');

const firstUl = document.createElement('ul');
firstUl.classList.add('fisrt-ul');

const man = document.createElement('div');
man.classList.add('man');

const homem = document.createElement('li');
homem.innerText = 'HOMEM';

const woman = document.createElement('div');
woman.classList.add('woman');

const mulher = document.createElement('li');
mulher.innerText = 'MULHER';

const child = document.createElement('div');
child.classList.add('child');

const crianca = document.createElement('li');
crianca.innerText = 'CRIANÇA';

//appends
body.appendChild(main);
main.appendChild(firstSection);
firstSection.appendChild(divTema);
divTema.appendChild(buttonTema);
firstSection.appendChild(animation);
animation.appendChild(h2);

firstSection.appendChild(peopleOption);
peopleOption.appendChild(firstUl);
firstUl.appendChild(man);
man.appendChild(homem);

firstUl.appendChild(woman);
woman.appendChild(mulher);

firstUl.appendChild(child);
child.appendChild(crianca);

//Input
const numberControl = document.createElement('div');
numberControl.classList.add('number-control');

const numberLeft = document.createElement('div');
numberLeft.classList.add('number-left');
const input = document.createElement('input');

input.setAttribute('type', 'number');
input.setAttribute('placeholder', '0');
input.classList.add('input');
const numberRight = document.createElement('div');
numberRight.classList.add('number-right');

const numberLeft2 = document.createElement('div');
numberLeft2.classList.add('number-left');
const input2 = document.createElement('input');
input2.setAttribute('type', 'number');
input2.setAttribute('placeholder', '0');
input2.classList.add('input');
const numberRight2 = document.createElement('div');
numberRight2.classList.add('number-right');

const numberLeft3 = document.createElement('div');
numberLeft3.classList.add('number-left');
const input3 = document.createElement('input');
input3.setAttribute('type', 'number');
input3.setAttribute('placeholder', '0');
input3.classList.add('input');
const numberRight3 = document.createElement('div');
numberRight3.classList.add('number-right');

//appends
body.appendChild(numberControl);
firstSection.appendChild(numberControl);

numberControl.appendChild(numberLeft);
numberControl.appendChild(input);
numberControl.appendChild(numberRight);

numberControl.appendChild(numberLeft2);
numberControl.appendChild(input2);
numberControl.appendChild(numberRight2);

numberControl.appendChild(numberLeft3);
numberControl.appendChild(input3);
numberControl.appendChild(numberRight3);

//ALCOOL

const divAlcool = document.createElement('div');
divAlcool.classList.add('alcool', 'animation');

const H2 = document.createElement('h2');
H2.innerText = 'QUANTAS PESSOAS CONSOMEM BEBIDAS ALCOÓLICAS?';

const numberControl2 = document.createElement('div');
numberControl2.classList.add('number-control-2');

const numberLeft4 = document.createElement('div');
numberLeft4.classList.add('number-left-2');

const inputAlcool = document.createElement('input');
inputAlcool.setAttribute('type', 'number');
inputAlcool.setAttribute('placeholder', '0');
inputAlcool.classList.add('input');

const numberRight4 = document.createElement('div');
numberRight4.classList.add('number-right-2');

//APPENDS
firstSection.appendChild(divAlcool);
divAlcool.appendChild(H2);

firstSection.appendChild(numberControl2);
numberControl2.appendChild(numberLeft4);
numberControl2.appendChild(inputAlcool);
numberControl2.appendChild(numberRight4);




