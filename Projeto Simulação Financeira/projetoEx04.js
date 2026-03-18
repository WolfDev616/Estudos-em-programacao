// Requisitos do Projeto de Simulação Financeira

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 4: Geração de Relatório Financeiro
// ❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa
// de rendimento, duração do investimento, despesas mensais, meta de investimento e
// meta de orçamento.
// ❖ O relatório deve incluir:
// ■ O mês atual.
// ■ O saldo final do investimento.
// ■ O total de despesas.
// ■ Uma mensagem de economia ou excedente em relação ao orçamento.
// ■ Uma verificação se a meta de investimento foi atingida.
// ■ Um resumo das despesas por categoria.
// Função: gerarRelatorio

const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}


let initialInvestment = 2500;
let totalInvested = initialInvestment;
let yieldRate = 0.1076;
let investmentDuration;
let monthlyExpenses = 2250;
let investmentGoal = 10000;
let currentMonth;

// Show Month

function showCurrentMonth(months) {
    const date = new Date();
    const currentMonth = date.getMonth();


    while (currentMonth) {
        console.log(`The current month is ${months[currentMonth + 1]}.`);
        break
    }
    console.log("-".repeat(100));
    return currentMonth;
}


// Show yield

function investmentYield(initialInvestment, yieldRate, monthInt) {
    let yielded = initialInvestment * yieldRate;
    
    for (i=0; i<monthInt; i++) {
            while (i == 0) {
            console.log(`Initial investment: ${initialInvestment}`);
            i++;
        }

            totalInvested = totalInvested + yielded;
        }
    console.log(`Total invested is: U$${totalInvested}, with the yield of U$${yielded}.`);
    console.log("-".repeat(100));    
}        



function calculateExpenses(monthlyExpenses, monthInt) {
    let totalExpenses;
    
    
    totalExpenses = monthlyExpenses * monthInt;
        
    console.log(`Total expense until the current date is U$${totalExpenses},00.`);
    console.log("-".repeat(100));
}

    
    
    
function createReport() {
        let monthInt = showCurrentMonth(months) + 1;
        investmentYield(initialInvestment, yieldRate, monthInt);
        calculateExpenses(monthlyExpenses, 1);
}

createReport() 