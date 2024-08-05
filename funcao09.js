//Exemplo de função com retorno no dia a dia

let userName = getFirstName("Augusto Corrêa Castilho")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}