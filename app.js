function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let messageImg = document.getElementById('message-img');
    let messageTitle = document.getElementById('message-title');
    let messageText = document.getElementById('message-text');
    let copyButton = document.getElementById('copy-button');

    if (inputText.trim() === "") {
        // Se o campo estiver vazio, mostrar a imagem(avata.png) e a mensagem padrão
        messageImg.style.display = 'block';
        messageTitle.textContent = "Nenhuma mensagem encontrada";
        messageText.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        copyButton.style.display = 'none';
    } else {
        // Mostrar a mensagem criptografada
        let encryptedText = inputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
        messageImg.style.display = 'none';
        messageTitle.textContent = "Mensagem Criptografada";
        messageText.textContent = encryptedText;
        copyButton.style.display = 'block';
    }
}

function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let messageImg = document.getElementById('message-img');
    let messageTitle = document.getElementById('message-title');
    let messageText = document.getElementById('message-text');
    let copyButton = document.getElementById('copy-button');

    if (inputText.trim() === "") {
        // Se o campo estiver vazio, mostrar a imagem(avata.png) e a mensagem padrão
        messageImg.style.display = 'block';
        messageTitle.textContent = "Nenhuma mensagem encontrada";
        messageText.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        copyButton.style.display = 'none';
    } else {
        // Mostrar a mensagem descriptografada
        let decryptedText = inputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
        messageImg.style.display = 'none';
        messageTitle.textContent = "Mensagem Descriptografada";
        messageText.textContent = decryptedText;
        copyButton.style.display = 'block';
    }
}

function copiarTexto() {
    let messageText = document.getElementById('message-text').textContent;
    let inputText = document.getElementById('inputText');

    inputText.value = messageText;
    inputText.select();
    document.execCommand("copy");
}
