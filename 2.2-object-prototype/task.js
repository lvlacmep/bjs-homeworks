function getAnimalSound(animal) {
    'use strict';
    if (!animal) return null;
    let sound = animal.sound;
    if (sound) return sound;
}

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    return Math.round(average);

}

function checkBirthday(birthday) {
    const now = Date.now();
    const date = new Date(birthday);
    birthday = +date;
    const diff = now - birthday;
    const age = diff / ( 1000 * 60 * 60 * 24 * 365);
    if (age >= 18) return true;
    else return false;

}