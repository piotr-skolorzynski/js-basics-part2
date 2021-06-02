/****************************************************************************************************
 0. Dodaj poprawnie plik 'script.js' do pliku index.html. Wyświetl w konsoli: 'Poprawnie dodany skrypt';

 1. Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 2. Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: 3
 Input: 20, '-', 3   Output: 17
 Input: -1, '*', 8   Output: -8
 Input: 4, '/', 2    Output: 2
 Input: 5, '!', 5    Output: Nie znany operator
 Input: 4, '/', 0    Output: Nie można dzielić przez zero

 3. Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *

 4. Stwórz obiekt o nazwie 'szkola'. W obiekcie niech będą pola z przedmiotami: 'matematyka', 'polski', 'muzyka'.
 Niech każdy z przedmiotów ma wartość w postaci obiektu z ocenami, imieniem nauczyciela i nazwiskiem nauczyciela.
 Wartości pól w tych obiektach dobierz sam/sama. Następnie w consoli wyświetl 3 stringi. Każdy z nich niech ma nazwę
 przedmiotu, oceny oraz imię i nazwisko nauczyciela prowadzącego zajęcia.

 5.  Napisz funkcję, która z tablicy stringów zwróci pierwszy najdłuższy string
 Input: ['warzywo', 'ziemianka', 'kot']         Output: 'ziemianka'
 Input: ['pies', 'wąż', 'pasikonik']            Output: 'pasikonik'
 Input: ['dom', 'oko', 'on']                    Output: 'dom'
 Input: ['kamil zadaje', 'super prace domowe']  Output: 'super prace domowe'

 6. Napisz funkcję, która jako argument przyjmuje tablicę i zwróci tablicę, która zawiera parzyste liczby.
 Input: [1, 2, 3, 4, 5, 6, 7]                                    Output: [2, 4, 6]
 Input: ['Czasem', 12, 'Słońce', 3, 'czasem', 600, 'deszcz']     Output: [12, 600]
 Input: [{}, {}, [], [], 'abc', 2]                               Output: [2]
 Input: ['a', null, true, undefined, {}, []]                     Output: []

 7*. Napisz funkcję, która w przypadku kiedy jako argument otrzyma string, zwróci każdy z wyrazów w tym stringu
 z powiększoną pierwszą literą.
 Input: 'ale super zadanie'                 Output: 'Ale Super Zadanie'
 Input: 'uwielbiam javascript'              Output: 'Uwielbiam Javascript'
 Input: 'koty, mewy i sroki'                Output: 'Koty, Mewy I Sroki'

 */

// ************************************ solutions ************************************************************************

 // ******  exercise 0 *******

console.log('Poprawnie dodany skrypt');

 // ******  exercise 1 *******

const showPattern = (sign, num) => {
    const max = 10;
    num > max ? max : num;
    let pattern = '';
    for (let i=0; i<num; i++) {
        pattern += sign;
        if (i < num - 1) {
            pattern += '-';
        }
    }
    return pattern;
};

// Input: $, 5         Output: $-$-$-$-$
const result = showPattern('$', 5);
console.log(result);

// Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$
const result2 = showPattern('$', 17);
console.log(result2);

// ******  exercise 2  *******

const handleNumbers = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            if (num2 === 0) {
                return 'Nie można dzielić przez zero'
            } else {
                return num1 / num2;
            }
        case '*':
            return num1 * num2;
        default: 
            return 'Nie znany operator';
    }
};

//  Input: 1, '+', 2    Output: 3
console.log(handleNumbers(1, '+', 2));

// Input: 20, '-', 3   Output: 17
console.log(handleNumbers(20, '-', 3));

// Input: -1, '*', 8   Output: -8
console.log(handleNumbers(-1, '*', 8));

//  Input: 4, '/', 2    Output: 2
console.log(handleNumbers(4, '/', 2));

// Input: 5, '!', 5    Output: Nie znany operator
console.log(handleNumbers(5, '!', 5));

// Input: 4, '/', 0 Output: Nie można dzielić przez zero
console.log(handleNumbers(4, '/', 0));

// ******  exercise 3 *******
const starsLoop = counter => {
    let result = '';
    for (let i=0; i < counter; i++) {
        result += '* ';
        console.log(result);
    }
}

starsLoop(5);

// ******  exercise 4 *******

const szkola = {
    matematyka: {
        oceny: [3, 5, 4, 4, 5],
        imie: 'Mateusz',
        nazwisko: 'Kowalski'
    },
    polski: {
        oceny: [6, 5, 4, 3, 5],
        imie: 'Krystyna',
        nazwisko: 'Ziembińska'
    },
    muzyka: {
        oceny: [6, 6, 4, 6, 5],
        imie: 'Marian',
        nazwisko: 'Koniecpolski'
    }
}

// const showObject = obj => {
//     const array = Object.values(obj);
//     const array2 = array.map( el => {
        
//         return `${el}`
//     })
//     return array2;
// };

// console.log(showObject(szkola));

// ******  exercise 5 *******
const showLongestString = array => {
    let longestString = array.reduce( (prev, curr) =>   prev.length >= curr.length ? prev : curr);
    return longestString;
};  

//Input:['warzywo', 'ziemianka', 'kot'] Output: 'ziemianka'
console.log(showLongestString(['warzywo', 'ziemianka', 'kot']));

//Input: ['pies', 'wąż', 'pasikonik'] Output: 'pasikonik'
console.log(showLongestString(['pies', 'wąż', 'pasikonik']));

//  Input: ['dom', 'oko', 'on'] Output: 'dom'
console.log(showLongestString(['dom', 'oko', 'on']));

//  Input: ['kamil zadaje', 'super prace domowe']  Output: 'super prace domowe'
console.log(showLongestString(['kamil zadaje', 'super prace domowe']));

// ******  exercise 6 *******

const showEvenNumbers = array => {
    return array.filter( el => {
        return typeof el === 'number' && el % 2 === 0; 
    })
};

//  Input: [1, 2, 3, 4, 5, 6, 7]              Output: [2, 4, 6]
console.log(showEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// Input: ['Czasem', 12, 'Słońce', 3, 'czasem', 600, 'deszcz'] Output: [12, 600]
console.log(showEvenNumbers(['Czasem', 12, 'Słońce', 3, 'czasem', 600, 'deszcz']));

//  Input: [{}, {}, [], [], 'abc', 2]           Output: [2]
console.log(showEvenNumbers([{}, {}, [], [], 'abc', 2]));

// Input: ['a', null, true, undefined, {}, []]        Output: []
console.log(showEvenNumbers(['a', null, true, undefined, {}, []]));
