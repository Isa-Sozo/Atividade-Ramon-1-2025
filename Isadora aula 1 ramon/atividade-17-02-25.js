function isPar(num) {
    return num % 2 === 0;
}
function filtrarPares(arr) {
    let pares = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (isPar(arr[i])) {
            pares.push(arr[i]);
        }
    }
    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);

console.log(numerosPares);



//EXERCÍCIOS 1

const readline = require('readline'); // Módulo para ler entradas do usuário

// Criação de interface para leitura de input no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000; // Valor inicial do saldo

// Função para mostrar o menu e realizar as operações
function menuBanco() {
    rl.question(
        "Escolha uma opção:\n1 - Ver saldo\n2 - Sacar\n3 - Depositar\n4 - Sair\nDigite o número da opção: ",
        (opcao) => {
            opcao = parseInt(opcao);

            switch (opcao) {
                case 1:
                    // Ver saldo
                    console.log(`Seu saldo atual é R$ ${saldo}`);
                    menuBanco(); // Chama o menu novamente após a operação
                    break;
                case 2:
                    // Sacar
                    rl.question("Digite o valor que deseja sacar: R$ ", (saque) => {
                        saque = parseFloat(saque);
                        if (saque > saldo) {
                            console.log("Saldo insuficiente para essa operação.");
                        } else if (saque > 0) {
                            saldo -= saque;
                            console.log(`Você sacou R$ ${saque}. Seu novo saldo é R$ ${saldo}`);
                        } else {
                            console.log("Valor inválido para saque.");
                        }
                        menuBanco(); // Chama o menu novamente após a operação
                    });
                    break; // Impede a execução do próximo caso enquanto espera o saque
                case 3:
                    // Depositar
                    rl.question("Digite o valor que deseja depositar: R$ ", (deposito) => {
                        deposito = parseFloat(deposito);
                        if (deposito > 0) {
                            saldo += deposito;
                            console.log(`Você depositou R$ ${deposito}. Seu novo saldo é R$ ${saldo}`);
                        } else {
                            console.log("Valor inválido para depósito.");
                        }
                        menuBanco(); // Chama o menu novamente após a operação
                    });
                    break; // Impede a execução do próximo caso enquanto espera o depósito
                case 4:
                    // Sair
                    console.log("Saindo do sistema. Até logo!");
                    rl.close(); // Fecha o terminal
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    menuBanco(); // Chama o menu novamente caso a opção seja inválida
            }
        });
}

// Inicia o menu bancário
menuBanco();



//EXERCICIO 2

function gerarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    
    // Laço for para gerar a tabuada de 1 até 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Exemplo de uso: gerando a tabuada de 7
gerarTabuada(7);


// Atividade 4
const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
];

let soma = 0;

alunos.forEach((aluno) => {
    soma += aluno.nota
})
console.log(`o total das notas é ${soma}`)


//-----------------------------------------------------//



// Atividade 5
const palavras = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

const contagem = {};

for (const palavra of palavras) {
    contagem[palavra] = (contagem[palavra] || 0) + 1;
}

for (const palavra in contagem) {
    console.log(`${palavra}: ${contagem[palavra]}`);
}
