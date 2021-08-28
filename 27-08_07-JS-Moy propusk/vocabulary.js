//Task03
/* 
игра русско-английский словарь;
двухмерный массив с парами слов (всего пять пар)
спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
 */

const words = [             //words[1][0]->bike (eng index = 0; ru index = 1)
    ['food', 'еда', 'Essen'],
    ['bike', 'велосипед', 'Fahrrad'],
    ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду', 'meinen'],
];

const eng = 0;
const ru = 1;
const de = 2;

checkUserTranslation();

function checkUserTranslation() {
    for (let i = 0; i < words.length; i++){
        const UserTranslation = getUserTranslation(i);
        if (UserTranslation === words[i][ru]) alert('Correct!');
        else alert(`wrong, correct answer is ${words[i][ru]}`)
    }
}

function getUserTranslation(index) {
    return prompt(`how do you translate the word ${words[index][eng]}?`).toLowerCase();
}