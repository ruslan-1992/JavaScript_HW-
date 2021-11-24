"use strict"

// Задание 1
let a = '5';
let b = '6';
console.log(a);
console.log(b);
// a = a + b;
// b = a - b;
// a = a - b;
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// Задание 2
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
console.log(arrOne[1] + arrOne[2] + arrOne[3]);

// задание 3
function showLesson() {
let a = '5';
let b = '6';
console.log(a);
console.log(b);
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
console.log(arrOne[1] + arrOne[2] + arrOne[3]);
}
let objInfo = {
    a: 5,
    b: 6,
    sum: 9,
};
console.log(objInfo);
showLesson();