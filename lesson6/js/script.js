'use strict';
// Задание 3
// Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки.
// На submit формы вывести значения поля ввода и имена всех отмеченных полей
// checkbox.
const checkbox = (e) => {
    let formElementsText = document.getElementById('nameCheck').value;
    let checkBoxes = document.getElementsByClassName('check');
    for (let i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked) {
            console.log(checkBoxes[i].name);
        }
    }
    console.log(formElementsText);
    e.target.reset();
    e.preventDefault();
}
document.forms[0].addEventListener('submit', checkbox);

// Задание 4
// Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если
// поля ввода пустое, делать фокус на поле ввода.
const formFocus = (e) => {
    let elemFocus = e.target.elements[0].value;
    if (elemFocus == '') {
        document.getElementById('nameFocus').focus();
    }
    console.log(elemFocus);
    e.target.reset();
    e.preventDefault();
}
document.forms[1].addEventListener('submit', formFocus);

// Задание 5
// Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения.
// Для поля телефона задать максимальное количество символов 13, сообщение может
// быть большим. При submit формы создавать объект со всеми значениями формы и
// выводить его.
const showValuesForm = (e) => {
    let textName = document.querySelector('.text-name').value;
    let textLastName = document.querySelector('.text-last-name').value;
    let phoneNumber = document.querySelector('.phone-number').value;
    let textMessage = document.querySelector('.text-message').value;
    let formObj = {
        Name: textName,
        Surname: textLastName,
        Number: phoneNumber,
        Message: textMessage,
        showInfo () {
        console.log(`Имя: ${this.Name}
Фамимлия: ${this.Surname}
Номер: ${this.Number}
Сообщение: ${this.Message}`);
        }    
    }
    formObj.showInfo();
    e.preventDefault();
    e.target.reset();
}
document.forms[2].addEventListener('submit', showValuesForm);