'use strict';
// Задание 0
// Лизе нужно написать функцию sayHello(name), которая возвращает
// приветствие для пользователя. Тем не менее, она влюблена в пользователя
// с именем “Mark”, и хотела бы поприветствовать его немного иначе.
// Помогите ей)
// Пример вызовов:
// sayHello(“Oleg”); // Hello, Oleg!
// sayHello(“Viktor”); // Hello, Viktor!
// sayHello(“Mark”); // Hi, Mark!
function sayHello(name) {
    if (name === 'Oleg') {
        return ('Hello, Oleg!');
    }
    if (name === 'Viktor') {
        return ('Hello, Viktor!');
    }
    if (name === 'Mark') {
        return ('Hi, Mark!');
    }
}
console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));

// Задание 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1)
function min(a, b) {
    if (a < b) {
        return (a);
    } else {
        // (b < a);
        return (b);
    }
}
console.log(min(2, 5));
console.log(min(7, 15));
console.log(min(2, -5));

// Задание 2
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе
// говоря, умножает x на себя n раз и возвращает результат.
// P.S. В этой задаче функция обязана поддерживать только натуральные
// значения n, т.е. целые от 1 и выше.
function pow(x, n) {
    if (Number.isInteger (n)) {
        return Math.pow(x, n) || x ** n; 
    }
}
console.log(pow(3, 2));

// Задание 3
// Напишите функцию isEven(n), которая принимает один параметр, число, и
// возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.
// isEven(4); // true
// isEven(5); // false 
function isEven(n) {
    if (n % 2 === 0) {
        return 'Число четное: ' + true;
    } else {
        return 'Число не четное :' + false;
    }
}
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(9));

// Задание 4
// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и
// последний символы строки, которая передается в параметр, и возвращает
// новую строку без этих символов.
// deleteChars(“Hello”); // ell
// deleteChars(“A”); // пустая строка
let deleteChars = (str) => {
    let result = str.slice(1, -1);
    return result;
}
console.log(deleteChars('Java Script'));

// Задание 5 "Этажи"
// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж,
// и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж
// (передается как целое число), и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
// convertFloor(-1) // -1
// convertFloor(2) // 3
// convertFloor(2) // 3
// convertFloor(0) // 1
// convertFloor(12) // 13
// convertFloor(14) // 14
function floorConverter(floor) {
    if(floor>0 || floor<13){
        floor++;
    }
    return floor;
}
console.log(floorConverter(0));
console.log(floorConverter(12));
console.log(floorConverter(14));
console.log(floorConverter(-5));

//Задание 6
// Перепишите функцию
// - заменив if else на конструкцию switch (convertType1)
// - через Function Expression (convertType2)
// - с помощью стрелочного синтаксиса (convertType3)
function convertType1() {
    let value = 'my string';
    let toType = 'boolean';
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            break;
    }    
}
console.log(convertType1());

let convertType2 = function(value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    }
};
console.log(convertType2('my string', 'boolean'));

let convertType3 = (value, toType) => {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    } 
}
console.log(convertType3('my string', 'boolean'));

// Задание 7*
// Написать функцию transformArray(arr, index1, index2, adding), принимающий
// в качестве аргументов:
// 1) arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// 2) index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно
// поменять между собой местами (fpos и clfw нужно поменять местами)
// 3) adding - строка, которую необходимо дописать в конец к каждому элементу массива
// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно
// вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]
function transformArray(arr, index1, index2, adding) {
//    console.log(arr);
    let index3;
    index3 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index3;
    // console.log(arr);
   let color = arr.map(function(x) {
       return x + adding;
   });
   arr = color;
//    НЕ РАБОТАЕТ:
    // for(let color = 0; color < arr.lenght; color++) {
    //     arr[color] = arr[color].map(function(x) {
    //         return x + adding;
    //     });
    // }
//    НЕ РАБОТАЕТ:
    // for(let color = 0; color < arr.lenght; color++) {
    //     arr[color] = arr[color].concat(adding);
    // }
    console.log(arr);
}
transformArray(["fngp", "kgei", "fpos", "clfw"], 2, 3, 'green');

// Задание 8*
// Нужно написать функцию, в которую мы передаем число, суммируем цифры
// данного числа до тех пор, пока не останется одна цифра
function num(n) {
    if (n < 10){
        return n;
    }
    let sum = 0;
    let x = String(n); 
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
        return num(sum);
}
console.log(num(245));
