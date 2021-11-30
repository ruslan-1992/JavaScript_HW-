// Вызов 0
let firstSurname = {Имя: 'Руслан', Фамилия: 'Аширов'};
console.table({firstSurname});
console.group('Pair Facts');
console.log('Факт 1: Честный');
console.log('Факт 2: Оптимист');
console.groupEnd();

// Вызов 1
function customSort() {
  let array=[10, 40, 30, 20, 50];
array.sort(function(a,b){ 
  return a - b;
});
console.log(array);
}
customSort();

// Вызов 2
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i -1] + result[i - 2]);
  }
  return result;
}
console.log(fib(102));