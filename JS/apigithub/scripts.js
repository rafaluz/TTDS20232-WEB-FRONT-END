// ####### INTRODUÇÃO A JAVASCRIPT #######
// exibindo informações com o console.log e alert

console.log("alguma coisa")
// alert("alguma coisa")

// ####### VARIAVEIS E TIPOS DE DADOS (let e const)
// Let cria uma variavel que pode ter seu valor alterado e const cria uma variavel constante

const pi = 3.14;
let nome = "Rafael"

console.log(pi, nome)

let ativo = false
console.log(typeof(ativo))


// ####### OPERAÇÕES MATEMÁTICAS

let n1 = 2;
let n2 = 3;

let soma = n1 + n2;
console.log(soma)

// ####### Estrutura Condicional (IF)

media = (n1 + n2) / 2
if (media >= 7) {
    console.log("aprovado")
} else if (n1 < 7 && n1 > 5) {
    console.log("prova final")
} else {
    console.log("Reprovado")
}

// ####### Estrutura de repetição 
    // FOR
    
    // for para percorrer uma lista de itens

    alunos = ['Tiago', 'Jeovanio', 'Ana Livia', 'Vanessa', 'Luana']
    console.log(alunos)

    for (aluno in alunos) {
        console.log(alunos[aluno])
    }

    // for para fazer um laço de tamanho determinado
    // for (let i=1; i <=5; i++) {
    //     console.log(i)
    // }

    console.log("----------- while")
    // WHILE
    // x = 0
    // while(x < 10) {
    //     console.log(x)
    //     x++;
    // }


// ####### DOM (Modelo de Objeto de Documento)
    // document.getElementById("IdDoElemento")
    // document.querySelector("Elemento");

// O Javascript mapeia todos os elementos html em objetos que podem ser manipulados
// Quando um elemento possui um id, podemos chamar ele pelo seu id diretamente e fazer alguma ação, como alterar seu conteúdo:

elemento = document.getElementById('userName')
console.log(elemento.textContent)

// Alterar o conteudo de um elemento (textContent)
// userName.textContent = "Rafael Luz"

// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES

    // function nomeDaFuncao(let argumentos){
    //     // code
    // }

    
    // chamar a função
    // nomeDaFuncao()

    // Alterar cor

    function changeColor(color) {
        card = document.querySelector(".card");
        card.style.backgroundColor = color;
        card.style.transition = '0.3s';
    }

    userImage.addEventListener('mouseover', function() {
        changeColor('#CE171F');
    });

    userImage.addEventListener('mouseout', function() {
        changeColor('');
    });
    
    
    // Função para mostrar alert, sendo chamada com um clique de botão
    iconYoutube.addEventListener('click', function() {
        alert("você quer ir para o youtube?")
    });

//Arrow functions 
    // argumentos => {
    // }

    // (arg1, arg2) => {
    // }

    // () => {
    // }

// ####### CONSUMINDO API DO GITHUB (api.github.com)

async function getProfileGithub() {
    const apiUrl = 'https://api.github.com/users/rafaluz'
 
    const response = await fetch(apiUrl);

    if (!response.ok) {
        console.log('Erro ao obter os dados do usuario')
    } else {
        const data = await response.json();

        console.log(data);
        userName.textContent = data.name
        userDescription.textContent = data.bio
        userImage.src = data.avatar_url
        iconGithub.href = data.url
    }
}

getProfileGithub()
