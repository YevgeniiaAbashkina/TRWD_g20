//Task 01
/* 
"ffghhf fh fhhfhf" -> вернуть длинну самого короткого слова в строке (fh)=2
*/
function findShortestWord1(string) {
  let shortest = 20;
  let array = string.split(" ");
    for (let i = 0; i <= array.length-1; i++) {
    if (array[i].length < shortest) {
        shortest = array[i].length;
    }
  }
  return shortest;
} 

console.log(findShortestWord1("Ein Fahrradfahrer ist in Berlin-Prenzlauer Berg von einem Auto angefahren und dabei schwer verletzt worden"));
/////////////////////////////////////////////////////////////////
function findShortestWord(str) {
  const arr = str.split(" ");
  let shortest = arr[0].length;
  for (let i = 1; i < arr.length; i++){
    if (arr[i].length < shortest) {
      shortest = arr[i].length;
    }
  }
  return shortest;
} 
console.log(findShortestWord("Ein Fahrradfahrer ist in Berlin-Prenzlauer Berg von einem Auto angefahren und dabei schwer verletzt worden"))

//////////////////////////////////////////////////
function findShortestWord2(str) {
  return str.split(" ").reduce((minWord, curentWord) => minWord.length < curentWord.length ? minWord : curentWord).length;
}

console.log(findShortestWord2("Ein Fahrradfahrer ist in Berlin-Prenzlauer Berg von einem Auto angefahren und dabei schwer verletzt worden"))

//////////////////////////////////////////////////
function findShortestWord3(str) {
  return str.split(" ").sort((a, b) => b.length - a.length).pop().length;
}
console.log(findShortestWord3("Ein Fahrradfahrer ist in Berlin-Prenzlauer Berg von einem Auto angefahren und dabei schwer verletzt worden"))

////////////////////////////////////////////////////
function findShortestWord4(str) {
  let shortest = [];
  shortest = str.split(" ").map(el => el.length).sort((a, b) => a - b);
  return shortest[0]
  }
console.log(findShortestWord4("Ein Fahrradfahrer ist in Berlin-Prenzlauer Berg von einem Auto angefahren und dabei schwer verletzt worden"))

//////////////////////////////////////////////////
function findShortestWord5(str) {
  return `${Math.min(...str.split(' ').map(word => word.length))}`
}

function findShortestWord6(str) {
  return `${Math.min.apply(split(' ').map(word => word.length))}`
}

//Task 02
/* на вход приходит строка,  задача проверить, есть ли повторяющиеся символы, если нет то тру
function isIsogram("abcd") -> true
function isIsogram("abcdcb") -> false
function isIsogram("abcdA") -> false
*/
function isIsogram(string) {
    let array = string.toLowerCase().split("");
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
                if (array[j] == array[i]) {
                    return false;
                } 
        }
        
    }
    return true;
}
console.log(isIsogram("Eise"));

//////////////////////////////////////////////////////
function isIsogram2(str) {
    str = str.toLowerCase();
    for (let i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return false; 
      }
    }
  return true;
} 
console.log(isIsogram2("ise"));

////////////////////////////////////////////////////
function isIsogram3(str) {
  let i = 0;
  const strings = str.toLowerCase().split("").sort();
  while (strings[i] !== strings[i + 1] && i< strings.length-1) {
    i++;
  }
  return i == strings.length - 1 ? true : false;
}
console.log(isIsogram3("abccd"));

/////////////////////////////////////////////////////
function isIsogram4(str) {
  let count = {} //a: 1, b: 2, c:1, d:1 ("abcdcb")
  const strings = str.toLowerCase().split("").sort();
  for (s of strings) {
    count[s] ? count[s]++ : count[s] = 1;
    if (count[s] > 1) return false;
  }
  return true
}
console.log(isIsogram4("abccd"));

//////////////////////////////////////////////////////
const isIsogram5 = (string) => string.toLowerCase().split("").every((s, index) => string.indexOf(s) === index);
console.log(isIsogram5("abcd"));