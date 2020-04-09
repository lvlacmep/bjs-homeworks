'use strict'
function getSolutions( a, b, c ) {    
    let D = b * b - 4 * a * c;
    if (D < 0) {
        return {D, roots: []};
    }
    if (D === 0) {
        let x1 = - b / (2 * a);
        return {D, roots: [x1]};
    }
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {D, roots: [x1, x2]};
}
function showSolutionsMessage( a, b, c ) {
    const result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots} `);
    }
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
function getAverageScore(data) {
    let dataOut = new Object;
    let average = new Array;
    for ( let prop in data) {
        dataOut[prop] = getAverageMark(data[prop]);
        average.push(dataOut[prop]);
    }
    if (average.length === 0) {
        dataOut.average = 0;
    } else {
        dataOut.average = getAverageMark(average);
    }
    return dataOut;
}
function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return (sum / marks.length);
}
function getPersonData(secretData) {
    let dataOut = new Object;
    for ( let prop in secretData) {        
        if (prop == 'aaa') {
            dataOut.firstName = getDecodedValue(secretData[prop]);
        }
        if (prop == 'bbb') {
            dataOut.lastName = getDecodedValue(secretData[prop]);
        }
    }
    return dataOut;
}
function getDecodedValue(secret) {
    if (secret === 0) return 'Родриго';
    if (secret === 1) return 'Эмильо';
}