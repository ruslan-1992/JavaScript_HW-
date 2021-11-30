// ЦИКЛЫ
// Задание 1
// Вывести в консоль через цикл while значения от 0 до 50 включительно.
'use strict';
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

// Задание 2
// Вывести в консоль только четные числа в диапазоне от 0 до 100, используя цикл for.
for (let num = 0; num <= 100; num++) {
    if (num % 2  == 0 ) {
      console.log( num );
    }
  }

// Задание 3
// Написать функцию, в которой необходимо сложить все числа массива из 20 элементов и вывести результат в alert.

function addNum () {
  let arr = [];
  for (let a = 0; a <= 20; a++) {
    arr[a] = a;
  }
  let summ =0;
  for (let a = 0; a < arr.length; a++) {
    summ += arr[a];
  }
  // alert(summ);
  console.log(summ);
}
addNum();               

// Задание 4
// Возвести 2 в 8 степень с помощью цикла while (не используя **)
// function result() {
//     const numm = Math.pow(2, 8); // Math.pow(base, exponent)
//     console.log(numm);           // base — число, которое возводится в степень
// }                               // exponent — степень, в которую нужно возвести
// result();
let num = 2;
let step = 8;
let result = 1;
let y = 0;
while(y < step) {
  // result = result * num;
  result *= num;
    y++;
}
console.log(result);

// Задание 5
// Найти самую большую цифру в целом числе
// function maxDigit(n){
//     n= 0 | n ;
//     let max=-1, remainder=-1;
//     do {
//       remainder = n % 10;
//       max = (max > remainder ) ? max : remainder ;
//       n=(n-remainder)*1e-1;
//     } while (n!=0);
//     return max;
//   }
//   console.log(maxDigit(123867));
// function maxDigit(n){
//   if(n == 0){ return 0;}
//   else{
//     return Math.max(n%10, maxDigit(Math.floor(n/10)));
//   }
// }
// console.log(maxDigit(16984));
function maxDigit(n) {

  var a = n.toString();
  var b = a.split('');

  return Math.max.apply(null, b);
}
console.log(maxDigit(1684));
  
// МАССИВЫ
// Задание 1
// Создайте массив, длиной в 6 элементов, каждый из  которого больше
// предыдущего на 5, после этого найдите среднее значение из этих чисел.
let arr = [];
for (let e = 0; e < 6; e++) {
  arr[e] = e*5;
}
console.log('Массив из 6 элементов: ' + arr);
let summa = 0;
for (let e = 0; e < arr.length; e++) {
  summa = arr[e]+summa;
}
let arrSumma = summa/arr.length;
console.log('Сумма 6 элементов: ' + summa);
console.log('Среднее значение чисел: ' + arrSumma);

// Задание 2
// Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?
let unkArray = [];
for (let q=0; q<=10; q++) {
  unkArray[q]=q;
}
let lastItem = unkArray[unkArray.length - 1];
// console.log(unkArray);
console.log('Последний элемент массива: ' + lastItem);

// Задание 3
// Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.
let penultItem = [];
for (let q=0; q<=10; q++) {
  penultItem[q]=q;
}
let showPenult = penultItem.splice(-2, 1, 'Предпоследний элемент');
console.log(penultItem);
// console.log(showPenult);

// Задача 4
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».
// Массив в результате каждого шага:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-Ролл
// Джаз, Классика, Рок-н-Ролл
// Классика, Рок-н-Ролл
// Рэп, Регги, Классика, Рок-н-Ролл
let styles = ["Джаз", "Блюз",];
console.log(styles);
styles.push("Рок-н-ролл",);
console.log(styles);
styles.splice(-2, 1, "Классика");
console.log(styles);
let delFirst = styles.shift();
console.log(styles);
// alert(delFirst);
styles.unshift("Рэп", "Рэгги",);
console.log(styles);

// Задание:
// Существует массив из какого-то количества элементов строковых данных. 
// Необходимо создать новый массив из длин каждого из элементов исходного массива.
let arrName = ['U', 'petushka', 'zolotoy', 'grebenj'];
let arrNameresult = arrName.map(item => {
  return item.length;
});
console.log(arrName);
console.log(arrNameresult);

// Задание:
// Существует цикл for,  который перебирает массив со строковыми и числовыми  данными[“Anna”, 12, “Sam”, 9,  “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:
// Необходимо переписать данный цикл с помощью forEach() метода
let strNum = ['Anna', 12, 'Sam', 9,  'Kate', 10, 'Ron', 9];
strNum.forEach(item => {
  if (typeof item === 'string') {
    console.log(item + '- string value');
  } else {
    console.log(item + '- number value')
  }
});

// Задание:
// Существует массив  [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] .
// Необходимо создать новый массив из значений данного, которые больше 10.
let newMass = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let resultNew = newMass.filter(item => {
  return item > 10;
});
console.log(resultNew);
