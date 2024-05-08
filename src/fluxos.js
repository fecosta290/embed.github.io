const imgFluxos = {
    pix: [
        'base64.png',
        'chvPix.png',
        'reembolso.png',
        'status.png'
    ],
    pos: [
        'credito.png',
        'debito.png'
    ],
    tef: [
        'cancelar.png',
        'credito.png',
        'debito.png',
    ]
};

function changeCode(productType) {
    const images = imgFluxos[productType]; // Obtemos o array de imagens correspondente ao tipo de produto selecionado
    const imgContainer = document.getElementById('imgs'); // Elemento onde as imagens serão exibidas

    // Limpar conteúdo anterior
    imgContainer.innerHTML = '';

    // Iterar sobre o array de imagens e criar elementos <img> para cada uma delas
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `../imgFluxos/${productType}/${image}`;
        imgElement.alt = 'Imagem do Produto';
        imgContainer.appendChild(imgElement); // Adiciona a imagem ao contêiner
    });
}
