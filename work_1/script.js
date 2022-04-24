"use strict";

let money = parseInt(prompt("Ваш бюджет на месяц?"));
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = parseInt(prompt("Во сколько обойдется?"));
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = parseInt(prompt("Во сколько обойдется?"));

alert(appData.moneyData / 30);

