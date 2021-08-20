console.log('[Foguete-games] Bat attack');

const sprites = new Image ();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.get('2d');

const BatAtack = {
    spriteX:18,
    spriteY:29,
    largura: 75,
    altura: 67,    
    x: 10,
    y: 50,
}

function loop() {
    contexto.drawImage(
        sprites,
        BatAtack.spriteX, BatAtack.spriteY,
        BatAtack.largura, BatAtack.altura,
        BatAtack.x, BatAtack.y,
        BatAtack.largura, BatAtack.altura,
         
        );
    requestAnimationFrame(loop);
}