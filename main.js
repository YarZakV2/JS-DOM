document.addEventListener('DOMContentLoaded', () => {
  // 1. Кнопка і текстове поле
  const input = document.getElementById('textInput');
  const button = document.getElementById('btn');

  button.addEventListener('click', () => {
    button.textContent = input.value;
  });

  // 2. Зміна src зображення
  const image = document.getElementById('mainImage');
  image.src = 'Vision-X-600.jpg';

  // 3. Зміна href посилання та alt зображення
  const link = document.getElementById('myLink');
  const linkImage = document.getElementById('linkImage');
  link.href = 'https://google.com';
  linkImage.alt = 'Це нове зображення';

  // 4. Зміна першого елемента списку
  const firstItem = document.querySelector('ul li');
  firstItem.textContent = 'Новий текст для першого пункту';
});
