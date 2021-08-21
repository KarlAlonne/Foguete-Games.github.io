console.log('[Foguete-games] Bat attack');

const sprites = new Image ();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.get('2d');

const chao = {
    spriteX:0,
    spriteY:0,
    largura:401,
    altura:112,
    x:0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage (
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
            
        );

        contexto.drawImage (
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    }
}


const BatAtack = {
    spriteX:18,
    spriteY:29,
    largura: 75,
    altura: 67,    
    x: 10,
    y: 50,
   desenha () {
     contexto.drawImage(
        sprites,
        BatAtack.spriteX, BatAtack.spriteY,
        BatAtack.largura, BatAtack.altura,
        BatAtack.x, BatAtack.y,
        BatAtack.largura, BatAtack.altura,
        );
     }
    }

function loop() {
    BatAtack.desenha();
    chao.desenha();

    
    requestAnimationFrame(loop);
}