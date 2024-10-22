import '@motion-canvas/player';

document.addEventListener('DOMContentLoaded', () => {
    const player = document.createElement('motion-canvas-player');
    player.setAttribute('src', '/dist/project-54ca9880.js');
    player.setAttribute('width', `${window.innerWidth}`);
    player.setAttribute('height', `${window.innerHeight}`);

    document.body.appendChild(player);
});
