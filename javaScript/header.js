const body = document.querySelector('body');

const style = document.createElement('style');
style.textContent = `body {
    background-image: url(../perfeito.jpg);
}`

document.head.appendChild(style);

const app = document.querySelector('app');

//HEADER
const header = document.createElement('header');

const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');

const card = document.createElement('div');
card.classList.add('card');

const frontContent = document.createElement('div');
frontContent.classList.add('front-content')

const h1 = document.createElement('h1');
h1.innerText = 'CHURRASCÔMETRO';

const content = document.createElement('div');
content.classList.add('content');

const heading = document.createElement('p');
heading.classList.add('heading');
heading.innerText = 'COMER É BOM DE MAIS! ';


header.appendChild(cardContainer);
cardContainer.appendChild(card);
card.appendChild(frontContent);
frontContent.appendChild(h1);

card.appendChild(content);
content.appendChild(heading)

app.appendChild(header);



