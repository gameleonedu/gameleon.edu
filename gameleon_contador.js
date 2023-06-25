var tempo = document.querySelector('h1');
let segundo = 60;

function mostrador (second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    tempo.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
}

function contador () {
    var contador = setInterval(()=>{
        segundo--;
        mostrador (segundo);
        if (segundo <= 0 || segundo < 1) {
            fim();
            clearInterval(contador);        
        }
        },1000)
    }

function fim () {
    tempo.innerHTML = 'O TEMPO ACABOU!'
    tempo.style.fontSize = "10vh"
    tempo.style.color ="black"
}

function repor () {
    location.reload();
}
