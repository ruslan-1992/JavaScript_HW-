// Задание 1
// попробуем при помощи обработчика событий скрывать выпадающее меню при
// наведении на любой из элементов навигации (пункты меню).
const button = (e) => {
    let menu = document.getElementsByClassName('menu')[0].classList.toggle('display-none');
}
document.getElementById('menu__open').addEventListener('click', button);
const menu = (e) => {
    let mouseOver = document.querySelector('.menu').classList.toggle('display-none');
}
let arr = document.querySelectorAll('.menu__item-item');
for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener('mouseover', menu);
    arr[i].addEventListener('mouseout', menu);
}

// Задание 2
// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить
// на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько
// угодно раз. При нажатии кнопки удалить - удаляется последний добавленный
// элемент.
const add = () => {
    let spanElem = document.createElement('span');
    spanElem.innerHTML = ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla soluta eaque vel nobis impedit numquam architecto, est autem adipisci asperiores labore, nostrum dignissimos itaque dolores enim! Nemo, tempore asperiores!');
    spanElem.style.textTransform = 'uppercase';
    spanElem.style.color = 'red';
    spanElem.style.fontWeight = 'bold';
    document.querySelector('.container').appendChild(spanElem);
}
document.querySelector('.button-add').addEventListener('click', add);

const remove = () => {
    document.querySelector('.container').lastChild.remove();
}
document.querySelector('.button-remove').addEventListener('click', remove);

// Задание 3
// Создание геометрических фигур
// Реализовать функцию drawFigure, которая принимает в качестве аргументов:
// название геометрической фигуры, цвет заливки, положение от верхнего края
// страницы (css свойство top) и положение от левого края страницы (css свойство
// left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если
// прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши,
// например круг - Q, квадрат - W и тд
// Пример использования: drawFigure(‘круг’, ‘red’, 100, 200, 40); // рисует красный круг
// с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края
const drawFigure = (nameFigure, color, top, left, width, height) => {
    if (nameFigure === 'круг') {
        let circle = document.createElement('div');
        circle.className = 'figure-circle';
        circle.style.background = color;
        circle.style.border = '15px solid red';
        circle.style.top = top + 'px';
        circle.style.left = left + 'px';
        circle.style.width = width + 'px';
        circle.style.height = height + 'px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute'
        document.body.append(circle);
    } else if (nameFigure === 'квадрат') {
        let square = document.createElement('div');
        square.className = 'figure-square';
        square.style.background = color;
        square.style.border = '15px solid red';
        square.style.top = top + 'px';
        square.style.left = left + 'px';
        square.style.width = width + 'px';
        square.style.height = height + 'px';
        square.style.position = 'absolute';
        document.body.append(square);
    } else if (nameFigure === 'прямоугольник') {
        let rectangle = document.createElement('div');
        rectangle.style.className = 'figure-rectangle';
        rectangle.style.background = color;
        rectangle.style.border = '1px solid red';
        rectangle.style.top = top + 'px';
        rectangle.style.left = left + 'px';
        rectangle.style.width = width + 'px';
        rectangle.style. height = height + 'px';
        rectangle.style.position = 'absolute';
        document.body.append(rectangle);
        let strip = document.createElement('div');
        strip.style.className = 'figure-rectangle-strip';
        strip.style.background = 'red';
        strip.style.marginTop = '40px';
        strip.style.left = '330px';
        strip.style.width = '230px';
        strip.style.height = '50px';
        rectangle.append(strip);
    }
}

const keyFigure = (event) => {
    if (event.code == 'KeyQ') {
        let circle = document.createElement('div');
        circle.style.className = 'figure-circle';
        circle.style.background = 'with';
        circle.style.border = '15px solid red';
        circle.style.top = '70px';
        circle.style.right = '30px';
        circle.style.width = '100px';
        circle.style.height = '100px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        document.body.append(circle);
    } else if (event.code == 'KeyW') {
        let square = document.createElement('div');
        square.style.className = 'figure-square';
        square.style.background = 'with';
        square.style.border = '15px solid red';
        square.style.top = '70px';
        square.style.right = '180px';
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.position = 'absolute';
        document.body.append(square);
    } else if (event.code == 'KeyE') {
        let rectangle = document.createElement('div');
        rectangle.style.className = 'figure-rectangle';
        rectangle.style.background = 'with';
        rectangle.style.border = '1px solid red';
        rectangle.style.top = '70px';
        rectangle.style.right = '330px';
        rectangle.style.width = '230px';
        rectangle.style.height = '130px';
        rectangle.style.position = 'absolute';
        document.body.append(rectangle);
        let strip = document.createElement('div');
        strip.style.className = 'figure-rectangle-strip';
        strip.style.background = 'red';
        strip.style.marginTop = '40px';
        strip.style.right = '330px';
        strip.style.width = '230px';
        strip.style.height = '50px';
        rectangle.append(strip);
    }
}

document.addEventListener('keydown', keyFigure);
drawFigure('круг', 'with', 70, 30, 100, 100);
drawFigure('квадрат', 'with', 70, 180, 100, 100);
drawFigure('прямоугольник', 'width', 70, 330, 230, 130);

