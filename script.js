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