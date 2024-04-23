function toggleInfo() {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.toggle('active'); 

    if (infoPanel.classList.contains('active')) {
        infoPanel.addEventListener('transitionend', () => {
            // Exibe o conteúdo quando a transição termina
            document.getElementById('Information').style.display = 'flex';
        }, { once: true }); // Remove o ouvinte após ser disparado
    } else {
        // Oculta o conteúdo quando o painel é recolhido
        document.getElementById('Information').style.display = 'none';
    }
}
const fullscreenButton = document.getElementById('fullscreenButton');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
fullscreenButton.addEventListener('click', () => {

    document.body.classList.toggle('fullscreen-mode');
    header.classList.toggle('fullscreen-mode');
    footer.classList.toggle('fullscreen-mode');
    if (document.fullscreenEnabled) {
        // Se não estiver no modo de tela cheia, entra no modo de tela cheia
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } 
        // Se já estiver no modo de tela cheia, sai do modo de tela cheia
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    } else {
        alert('Fullscreen mode is not supported by your browser.');
    }
});

/*ZOOM*/
const zoomImage = document.getElementById('zoomImage');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const leftButton = document.getElementById('left');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const rightButton = document.getElementById('right');

let scale = 1; // Inicialmente, o zoom é 1x
let translateX = 0; // Posição horizontal inicial
let translateY = 0; // Posição vertical inicial

// Função para aplicar transformações na imagem
function updateTransform() {
  zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}

// Event listener para o botão de zoom in
zoomOutButton.addEventListener('click', () => {
  scale += 0.1; // Aumenta o zoom em 0.1x
  updateTransform(); 
});

// Event listener para o botão de zoom out
zoomInButton.addEventListener('click', () => {
  scale -= 0.1;
  // Não permita zoom negativo
  if (scale < 0.1) {
    scale = 0.1;
  }
  updateTransform(); 
});

// Event listener para o botão de mover para a esquerda
leftButton.addEventListener('click', () => {
  translateX -= 10; 
  updateTransform(); 
});

// Event listener para o botão de mover para cima
upButton.addEventListener('click', () => {
  translateY -= 10; 
  updateTransform(); 
});

// Event listener para o botão de mover para baixo
downButton.addEventListener('click', () => {
  translateY += 10; 
  updateTransform(); 
});

// Event listener para o botão de mover para a direita
rightButton.addEventListener('click', () => {
  translateX += 10; 
  updateTransform(); 
});