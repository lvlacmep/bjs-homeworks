function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    if (isNaN(+percent)) {
        return (`Параметр percent содержит неправильное значение ${percent}`);
    }
    if (isNaN(+contribution)) {
        return (`Параметр contribution содержит неправильное значение ${contribution}`);
    }
    if (isNaN(+amount)) {
        return (`Параметр amount содержит неправильное значение ${amount}`);
    }
    if (isNaN(+date)) {
        return (`Параметр date содержит неправильное значение ${date}`);
    }

    let loanBody = amount - contribution;
    let months;
    percent = percent / (12 * 100);
    let d1 = new Date();
    let d2 = new Date(date);
    months = (d2.getFullYear() - d1.getFullYear()) * 12 - d1.getMonth() +  d2.getMonth();
    let payment = loanBody * (percent + percent/(Math.pow((1+percent), months) - 1)); // S*(P+P/(((1+P)^n)-1))
    let sum = 0;
    for (let i = 1; i <= months; i++) {
        sum += payment;
    }
    console.log(parseFloat((payment * months).toFixed(2)));
    return (parseFloat((payment * months).toFixed(2)));
}

function getGreeting(name) {
    if ( typeof(name) == "string" && name.length > 0) {
        console.log(`Привет, мир! Меня зовут ${name}`)
        return (`Привет, мир! Меня зовут ${name}`);
    } else {
        console.log(`Привет, мир! Меня зовут Аноним`)
        return (`Привет, мир! Меня зовут Аноним`);
    }

}