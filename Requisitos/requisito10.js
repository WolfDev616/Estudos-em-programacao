// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
// palavra é um palíndromo.
// Função: ehPalindromo
// Exemplo Entrada: // ehPalindromo("arara");
// // ehPalindromo("cachorro");
// Exemplo Saída: // true
// // false

const wordString = "arara"

function checkpalindromeWord(word) {
    let isPalindrome = false;
    let reversedWordString = word.split('').reverse().join('');
    if (word === reversedWordString) {
        return isPalindrome = true
    } else {
        return isPalindrome = false
    }
}

console.log(checkpalindromeWord(wordString))



