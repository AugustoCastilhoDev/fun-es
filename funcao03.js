//comparando funções entre linguagens de programação

//JavaScript

function enviarDados(){
    let nomeDoBanco = "bando-de-dados"
    console.log("Salvando dados em :" + nomeDoBanco)

    if( 3 === 3){
        console.log("senha validada")
    }
}


 /*Python

def enviar_dados():
    nome_do_banco = "bando-de-dados"
    print(f"Salvando dados em: {nome_do_banco}")

    if 3 == 3:
        print("Senha validada")

# Chame a função para testar
enviar_dados() */



/*Java

public class Main {
    public static void main(String[] args) {
        enviarDados();
    }

    static void enviarDados() {
        String nomeDoBanco = "bando-de-dados";
        System.out.println("Salvando dados em: " + nomeDoBanco);

        if (3 == 3) {
            System.out.println("Senha validada");
        }
    }
} */



/* C#

using System;

namespace Exemplo
{
    class Program
    {
        static void Main(string[] args)
        {
            EnviarDados();
        }

        static void EnviarDados()
        {
            string nomeDoBanco = "bando-de-dados";
            Console.WriteLine($"Salvando dados em: {nomeDoBanco}");

            if (3 == 3)
            {
                Console.WriteLine("Senha validada");
            }
        }
    }
} */