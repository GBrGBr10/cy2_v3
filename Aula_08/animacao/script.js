const mario = document.querySelector(".mario");

function jump() {
    mario.classList.add('jump');

    setTimeout( function() {
        mario.classList.remove('jump')
    }, 800 )
}

document.addEventListener ( 'keydown', jump );