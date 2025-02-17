//1 = idade
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

//2 = login
function login(usuario, senha) {
    return (usuario === "admin" && senha === "1234") ? "Login bem-sucedido" : "Usuário ou senha incorretos";
}

// 3 = desconto
function aplicarDesconto(valor, codigo) {
    switch (codigo) {
        case "DESC10":
            return valor * 0.9;
        case "DESC20":
            return valor * 0.8;
        default:
            return valor;
    }
}

// 4 = número
function verificarNumero(numero) {
    return numero === 0 ? "Zero" : 
           (numero > 0 && numero % 2 === 0) ? "Positivo e Par" : 
           (numero > 0 && numero % 2 !== 0) ? "Positivo e Ímpar" : "Negativo";
}

// 5 = nota
function verificarNota(nota) {
    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7 && nota < 9) {
        return "Bom";
    } else if (nota >= 5 && nota < 7) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
}

// 6 = ano
function verificarAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? "Ano bissexto" : "Não é ano bissexto";
}

let anobissexto = (ano) => {
    if((ano% 4 == 0 && ano% 100 !=0)||ano% 400 ==0){
        return 'ano bissexto'
    } else {
        return 'não é bissexto'
    }
} 
console.log(verificarIdade(20)); 
console.log(login("admin", "1234")); 
console.log(aplicarDesconto(100, "DESC10"));
console.log(verificarNumero(-5)); 
console.log(verificarNota(8)); 
console.log(verificarAnoBissexto(2024));