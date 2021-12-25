'use strict';
// Задание 1
// Создать калькулятор расхода и дохода. Пользователь вводит число в поле ввода и
// выбирает с помощью radio кнопки доход это или расход. На нажатие кнопки нужно
// рассчитать текущее значение счета, а также отрисовать столбики диаграммы дохода
// и расхода разными цветами. При нажатии кнопки поля ввода очищаются.
const showIncome = (summ) => {
    let income = document.querySelectorAll('p')[0];
    let diagramIncome = document.querySelector('.diagram-income');
    income.innerText = summ + ' $';
    diagramIncome.style.height = summ + 'px';
}
const showExpenses = (summ2) => {
    let expenses = document.querySelectorAll('p')[1];
    let diagramExpenses = document.querySelector('.diagram-expenses');
    expenses.innerText = summ2 + ' $';
    diagramExpenses.style.height = summ2 + 'px';
}
const showCurrentAccount = (summ3) => {
    let currentAccount = document.querySelectorAll('p')[2];
    let diagramAccount = document.querySelector('.diagram-account');
    currentAccount.innerText = summ3 + ' $';
    diagramAccount.style.height = summ3 + 'px';
} 
let currentAcc = [];
let sumIncome = [];
let sumExpenses = [];
const calc = (e) => {
    let formNumber = document.getElementById('enterNumber').value;
    let num1 = Number(formNumber);
    let radioButton = document.getElementsByName('radioButton');
    if (radioButton[0].checked){
        sumIncome.push(num1);
    let resultIncome = sumIncome.reduce((sum, item) => {
        return sum + item;
    });
    showIncome(resultIncome);
    } else if (radioButton[1].checked){
        sumExpenses.push(num1);
    let resultExpenses = sumExpenses.reduce((sum, item) => {
            return sum + item;
        });
        showExpenses(resultExpenses);
    }
    let account = sumIncome - sumExpenses;
    currentAcc.push(account);
    showCurrentAccount(account);
    e.preventDefault();
// document.querySelector('.enter-number').value = '';
    e.target.reset();
}
document.getElementById('buttonCalc').addEventListener('click', calc);