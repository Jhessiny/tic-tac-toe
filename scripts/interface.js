document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        winMove.forEach((e)=>[
            document.getElementById(e).classList += " win-move"
        ])


        let winer ;
        if(playerTime == 0){
            winer = player1;
            matchs1++
        }else {
            winer = player2;
            matchs2++
        }
        scoreboard()
        setTimeout(()=>{
            alert(winer + " venceu!")
        }, 10)
    }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = "<div class='"+ symbol +"'></div>"
}

function updateSquares(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.innerHTML = "<div class=''></div>"
    })
}

function newMatch(){
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    winMove.forEach((e)=>[
        document.getElementById(e).classList.remove("win-move")
    ])
    winMove = [] 
    updateSquares();
}

function resetGame(){
    newMatch();
    matchs1 = 0;
    matchs2 = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
}

document.getElementById("playMode").addEventListener('change', (e)=>{
    let playMode = e.target.value
    let song = document.getElementById("gameSong");
    let audio = document.querySelector('audio')
    let body = document.querySelector('body');
    console.log(song.src)
    if(playMode == "classic"){
        symbols = ['o', 'x']
        player1 = "Jogador 'o'";
        player2 = "Jogador 'x'";
        body.style.backgroundImage = 'url(img/bg-classic.jpg)';
        song.src = "music/Classic.mp3"
        audio.load()
    }
    if(playMode == "plantsvszombie"){
        symbols = ['p', 'z']
        player1 = "Plants";
        player2 = "Zombies";
        body.style.backgroundImage = 'url(img/bg-pz.jpg)';
        song.src = "music/pz.mp3"
        audio.load()
    }
    if(playMode == "supermario"){
        symbols = ['m', 'b']
        console.log(symbols)
        player1 = "Mario";
        player2 = "Bowser";
        body.style.backgroundImage = 'url(img/bg-mario.jpg)';
        song.src = "music/sm.mp3"
        audio.load()
    }
    if(playMode == "sonic"){
        symbols = ['so', 'sh']
        player1 = "Sonic";
        player2 = "Shadow";
        body.style.backgroundImage = 'url(img/bg-sonic.png)';
        song.src = "music/Sonic.mp3"
        audio.load()
    }
    newMatch()
})

function scoreboard(){
   score1.innerHTML = matchs1
   score2.innerHTML = matchs2
}
