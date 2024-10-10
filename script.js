// Criando as variáveis
var container2 = document.getElementsByClassName("container2")[0]; // Seleciona o primeiro elemento da classe "container2" (onde as notas vão aparecer)
var container3 = document.getElementsByClassName("container3")[0]; // Seleciona o primeiro elemento da classe "container3" (onde escrevemos a nova nota)
var checkIcon = document.getElementById("check-icon"); // Seleciona o ícone de "check" pelo ID, usado para criar a nota
var xIcon = document.getElementById("x-icon"); // Seleciona o ícone de "x" pelo ID, usado para fechar a área de escrita da nota
var i = 0; // Usado para controlar a seleção de cores para as notas

// Adiciona um evento de clique no ícone "x"
xIcon.addEventListener("click", function () {
    typeNote(); // Quando clicado, chama a função typeNote()
});

// Adiciona um evento de clique no ícone "check"
checkIcon.addEventListener("click", function () {
    createNote(); // Quando clicado, chama a função createNote()
});

// Função para mostrar ou esconder a área de escrita da nota
function typeNote() {
    // Verifica se a área de escrita está escondida
    if (container3.style.display == "none") {
        container3.style.display = "block"; // Se estiver escondida, mostra
    }
    else {
        container3.style.display = "none"; // Se estiver visível, esconde
    }
}

// Função para criar uma nova nota
function createNote() {
    // Obtém o texto da nova nota do campo de entrada
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div"); // Cria um novo elemento "div" para a nota
    var node1 = document.createElement("h1"); // Cria um novo elemento "h1" para o texto da nota

    node1.innerHTML = noteText; // Adiciona o texto da nota no elemento "h1"

    // Define estilos para a nota (tamanho, fonte, sombra, etc.)
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");

    // Define a margem, rotação e cor aleatórias para a nota
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1); // Adiciona o elemento "h1" dentro da "div"

    container2.insertAdjacentElement("beforeend", node0); // Adiciona a nova nota no final da área de notas (container2)

    // Adiciona efeito ao passar o mouse (scale aumenta o tamanho)
    node0.addEventListener("mouseenter", function () {
        node0.style.transform = "scale(1.1)"; // Aumenta a nota ao passar o mouse
    });
    node0.addEventListener("mouseleave", function () {
        node0.style.transform = "scale(1)"; // Retorna ao tamanho original quando o mouse sai
    });
    node0.addEventListener("dblclick", function () {
        node0.remove(); // Remove a nota ao clicar duas vezes
    });

    document.getElementById("note-text").value = ''; // Limpa o campo de entrada após criar a nota
}

// Função que retorna uma margem aleatória para a nota
function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"]; // Array com valores de margem

    return random_margin[Math.floor(Math.random() * random_margin.length)]; // Retorna um valor aleatório da margem
}

// Função que retorna uma rotação aleatória para a nota
function rotate() {
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"]; // Array com valores de rotação

    return random_rotate[Math.floor(Math.random() * random_rotate.length)]; // Retorna um valor aleatório da rotação
}

// Função que retorna uma cor aleatória para a nota
function color() {
    var random_color = ["#FFA4A4", "#D4ABF1", "#D6F3E8", "#F9FFB6", "#D3D3FF", "#FFA4F1"]; // Array com cores

    // Se o índice "i" for maior que o número de cores, reinicia
    if (i > random_color.length - 1) {
        i = 0; // Reseta para a primeira cor
    }
    return random_color[i++]; // Retorna a cor atual e incrementa "i" para a próxima
}


