function getResult(a,b,c){
    'use strict';
    let diskr = b * b - 4 * a * c;
    let result = [];
    if (diskr < 0) {
        return result;
    } else if (diskr === 0) {
            result.push(-b / (2 * a));
            return result;
    } else {
        result[0] = ((-b + Math.sqrt(diskr)) / (2 * a));
        result[1] = ((-b - Math.sqrt(diskr)) / (2 * a));
        return result;
    }
}

function getAverageMark(marks){
    'use strict';
    let sum = 0;
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Введено оценок больше пяти');
        marks = marks.slice(0 , 5);
    }
    for (let i = 0; i < marks.length ; i++) {
        sum += marks[i];
    }
    return (sum / marks.length);
}

function askDrink(name,dateOfBirthday){
    'use strict';
    let year = new Date().getFullYear();
    let d = new Date(dateOfBirthday).getFullYear();
    console.log(d);
    if (year - d >= 18) {
        return (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
}