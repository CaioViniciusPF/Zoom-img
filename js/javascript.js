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