// juhuslik pilt - mida võetakse massiivist
function juhuslikPilt(){
    //massiiv pildifailidest
    pildid =[
        '../photos/smile.png',
        '../photos/neutral.png',
        '../photos/kurb.png',
        '../photos/lill.png'
    ];
    const randomPilt = document.getElementById('randomPilt');
    const pilt = pildid[Math.floor(Math.random() * pildid.length)];
    //Math.floor - ümardab täisarvuni
    //Math.random - juhuslik arv
    randomPilt.src=pilt;
}

function selectValik(){
    let valik=document.getElementById('valik');
    let vastus= document.getElementById("vastus");
    let randompilt=document.getElementById("randomPilt");

    if (randompilt.getAttribute('src') == valik.value) {
        vastus.innerHTML = "Õige!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "Vale!";
        vastus.style.color = "red";
    }
}

function radioValik() {
    let piltValik = document.getElementsByName('piltValik');  /*Mitu elementi ühenimega*/
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            break;
        }
    }
}
