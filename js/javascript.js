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
const container = document.querySelector('.container');

let scale = 1; // Inicialmente, o zoom é 1x
let translateX = 0; // Posição horizontal inicial
let translateY = 0; // Posição vertical inicial
let qtdZoom=0;
// Função para aplicar transformações na imagem
function updateTransform() {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const imageWidth = zoomImage.offsetWidth * scale;
  const imageHeight = zoomImage.offsetHeight * scale;
  
  // Restrições de movimento para a esquerda e para a direita
  if (translateX > 0) {
    translateX = 0;
    
  } else if (translateX < -qtdZoom*10 ){
    translateX = -qtdZoom*10 ;
    ;

  }
  
  // Restrições de movimento para cima e para baixo
  if (translateY > 0) {
    translateY = 0;
  } else if (translateY < -qtdZoom*10) {
    translateY = -qtdZoom*10;
  }
  console.log(imageWidth);
  console.log(translateY);
  console.log(translateX)
  console.log("Zoom: " + qtdZoom);
  zoomImage.style.transform = `scale(${scale})`;
  zoomImage.style.left=`${translateX}%`;
  zoomImage.style.top=`${translateY}%`;
}

// Event listener para o botão de zoom in
zoomOutButton.addEventListener('click', () => {

  scale += 0.2; // Aumenta o zoom em 0.1x\
  qtdZoom+=1;
  updateTransform(); 
});

// Event listener para o botão de zoom out
zoomInButton.addEventListener('click', () => {
  scale -= 0.2;
  qtdZoom-=1;
  // Não permita zoom negativo
  if (scale < 1) {
    qtdZoom=0;
    scale = 1;
  }
  updateTransform(); 
});

// Event listener para o botão de mover para a esquerda
leftButton.addEventListener('click', () => {
  translateX -= 1;
  updateTransform(); 
});

// Event listener para o botão de mover para cima
upButton.addEventListener('click', () => {
  translateY -= 1; 
  updateTransform(); 
});

// Event listener para o botão de mover para baixo
downButton.addEventListener('click', () => {
  translateY += 1; 
  updateTransform(); 
});

// Event listener para o botão de mover para a direita
rightButton.addEventListener('click', () => {
  translateX += 1; 
  updateTransform(); 
});