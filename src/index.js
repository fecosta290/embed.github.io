// Captura o botão e o menu suspenso
const dropdownBtn = document.querySelector('.dropdown-btn');

// Adiciona um evento de clique ao botão dropdown
dropdownBtn.addEventListener('click', () => {
    // Alterna a classe 'active' no botão dropdown
    dropdownBtn.classList.toggle('active');
});

function changeCode(product) {
    let command;

    switch (product) {
        case 'tef':
            command = 'git clone https://github.com/org-dev-embed/example-lib-embed-python-tef';
            break;
        case 'pos':
            command = 'git clone https://github.com/org-dev-embed/example-lib-embed-python-pos';
            break;
        case 'pix':
            command = 'git clone https://github.com/org-dev-embed/example-lib-embed-python-pix';
            break;
        case 'xml':
            command = 'git clone https://github.com/org-dev-embed/example-lib-embed-python-xml';
            break;
        default:
            command = '// Comando não definido para este produto.';
    }

    const codeElement = document.getElementById('repoCommand');
    typeWriter(command, codeElement);
}

function typeWriter(text, element) {
    let charIndex = 0;

    // Utiliza setInterval para adicionar caracteres gradualmente
    const intervalId = setInterval(() => {
        if (charIndex <= text.length) {
            element.textContent = text.slice(0, charIndex);
            charIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 50); // Intervalo de tempo entre cada caractere (em milissegundos)
}

// Função para abrir o modal com a imagem clicada
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
