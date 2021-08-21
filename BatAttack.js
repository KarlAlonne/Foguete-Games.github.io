console.log('[Foguete-games] Bat attack');

const sprites = new Image ();
sprites.src = './Images';

const canvas = document.querySelector('canvas');
const contexto = canvas.get('2d');

const fundo3 = {
    spriteX:0,
    spriteY:0,
    largura:401,
    altura:801,
    x:0,
    y: canvas.height - 801,
    desenha () {
        contexto.drawImage (
            sprites,
            fundo3.spriteX, fundo3.spriteY,
            fundo3.largura, fundo3.altura,
            fundo3.x, fundo3.y,
            fundo3.largura, fundo3.altura,
        ); 

        contexto.drawImage (
            sprites,
            fundo3.spriteX, fundo3.spriteY,
            fundo3.largura, fundo3.altura,
            (fundo3.x + fundo3.largura), fundo3.y,
            fundo3.largura, fundo3.altura,
        ); 
    }
}

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


const Bat = {
    spriteX:18,
    spriteY:29,
    largura: 75,
    altura: 67,    
    x: 10,
    y: 50,
   desenha () {
     contexto.drawImage(
        sprites,
        Bat.spriteX, Bat.spriteY,
        Bat.largura, Bat.altura,
        Bat.x, Bat.y,
        Bat.largura, Bat.altura,
        );
     }
    }

function loop() {
    fundo3.desenha();
    chao.desenha();
    Bat.desenha();

    
    requestAnimationFrame(loop);
}

loop();