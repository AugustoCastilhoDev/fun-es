// funções com parâmetros
// Escopo de variáveis e múltiplos parâmetros

torrar("pao de forma",  10.90, "Augusto",)
torrar("pao integral", 10.90)

function torrar (pao, valor, nome = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("esse é um pedido de " + nome)
    console.log("o valor total é de " + valor)
}