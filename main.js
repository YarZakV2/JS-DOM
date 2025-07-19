//1
const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const count = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${count}`);
});

//2
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = document.getElementById('ingredients');

const items = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});

list.append(...items);

//3

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg',
    alt: 'Orange and White Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');

const markup = images.map(
  img => `<li><img src="${img.url}" alt="${img.alt}" /></li>`
).join('');

gallery.insertAdjacentHTML('beforeend', markup);

//4
let counterValue = 0;

const valueSpan = document.getElementById('value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

