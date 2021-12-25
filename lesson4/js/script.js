'use strict';
// Задача 1
// 1. Найти в документе элемент с id “my-first-elem”
// 2. Найти все элементы с классом “container”
// 3. Найти первый элемент с классом “wrapper”
// 4. Найти первые 2 элемента с классом “element”
const teg = document.getElementById('my-first-element');
console.log(teg);
const elemClass = document.querySelectorAll('.container');
console.log(elemClass);
const elemFirst = document.querySelector('.wrapper');
console.log(elemFirst);
const elemFirstTwo = document.querySelectorAll('.element');
console.log(elemFirstTwo[0]);
console.log(elemFirstTwo[1]);

// Задание 1
// Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”,
// после него вставьте div с классом “alert” и с текстом “А это сообщение об
// ошибке” с красным фоном, белым текстом и полями (padding) размером 20px
function createElement() {
    const p = document.createElement('p');
    p.className = 'text';
    p.innerHTML = ('это всего лишь текст');
    console.log(p);
    document.body.append(p);
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = ('А это сообщение об ошибке');
    div.style.backgroundColor = 'red';
    div.style.color = 'white';
    div.style.padding = '20px';
    console.log(div);
    document.body.append(div);
}
createElement();

// Задание 2
// Создать список элементов с помощью тега <ol> со значениями из массива
// строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
// "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый
// фон, а нечетный - “odd” и иметь синий фон.
// *Если это пользователь, у которого в имени встречаются минимум 2
// одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста
// должен стать белым.
const itemList = () => {
    let liItem = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
    let ol = document.createElement('ol');
    document.body.append(ol);
    for (let q = 0; q < liItem.length; q++) {
        let li = document.createElement('li');
        li.innerHTML = (liItem[q]);
        if (q % 2 == 1){
            li.className = 'even';
            li.style.backgroundColor = 'green';
        } else {
            li.className = 'odd';
            li.style.backgroundColor = 'blue';
        }
        ol.appendChild(li);
        console.log(li);
    }
}
itemList();

