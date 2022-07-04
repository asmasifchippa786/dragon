let musicsound = new Audio('music.mp3');
let gameover = new Audio('gameover.mp3');


score = 0
cross = true;
document.onkeydown = function (e){
    console.log('Key code is: ' , e.keyCode) 
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    else if(e.keyCode==32){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    else if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px'
    }
    else if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px'
    }
}

setInterval(() => {
    musicsound.play();
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx  = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy  = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox  = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy  = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx -ox);
    offsetY = Math.abs(dy -oy);
    if(offsetX< 94 && offsetY< 10){
        dino.style.display = 'none';
        gameover.play();
        gameOver.style.visibility = 'visible' ;
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX< 145 && cross){
        score+=1;
        ubdateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true
        }, 1000)
    }
}, 10);

function ubdateScore(score){
    scorecont.innerHTML = 'Your Score: ' + score
}