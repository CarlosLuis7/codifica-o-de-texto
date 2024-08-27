// Função para Criptogarfar o texto
function criptografar() {
    const textarea = document.querySelector('#corpo__entrada__texto');
    let texto = textarea.value;

    if (!texto.match(/^[a-z\s]*$/) || texto === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
}

// Função para Descriptogarfar o texto
function descriptografar() {
    const textarea = document.querySelector('#corpo__entrada__texto');
    let textoCriptografado = textarea.value;

    if (!textoCriptografado.match(/^[a-z\s]*$/) || textoCriptografado === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoOriginal = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoOriginal);
}

// Função que exibe o resutado tanmto da Criptografia como da Descriptografa
function mostrarResultado(texto) {
    document.querySelector('#corpo__saida__sem').classList.add('hidden');
    document.querySelector('#corpo__saida__sem__imagem').classList.add('hidden');
    document.querySelector('#corpo__saida__sem__mensagem').classList.add('hidden');
    document.querySelector('#corpo__saida__sem__mensagem__encontrada').classList.add('hidden');
    document.querySelector('#corpo__saida__sem__mensagem__texto').classList.add('hidden');

    const outputControl = document.querySelector('#corpo__saida__controle');
    const result = document.querySelector('#corpo__saida__controle__resultado');
    const copyButton = document.querySelector('#corpo__saida__controle__botao__copiar');

    result.textContent = texto;
    result.classList.remove('hidden');
    copyButton.classList.remove('hidden');
}

// Função do botão coipar
function copiar() {
    const result = document.querySelector('#corpo__saida__controle__resultado');
    navigator.clipboard.writeText(result.textContent).then(() => {
    
        document.querySelector('#corpo__entrada__texto').value = '';
        result.textContent = '';
        result.classList.add('hidden');
        document.querySelector('#corpo__saida__controle__botao__copiar').classList.add('hidden');

        document.querySelector('#corpo__saida__sem').classList.remove('hidden');
        document.querySelector('#corpo__saida__sem__imagem').classList.remove('hidden');
        document.querySelector('#corpo__saida__sem__mensagem').classList.remove('hidden');
        document.querySelector('#corpo__saida__sem__mensagem__encontrada').classList.remove('hidden');
        document.querySelector('#corpo__saida__sem__mensagem__texto').classList.remove('hidden');
    }, () => {
        alert("Erro ao copiar o texto");
    });
}