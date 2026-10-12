function jookideValik() {
    let joogivalik=document.getElementById('joogiValik');
    let vastus= document.getElementById("vastus2");
    let kogus=document.getElementById("kogus");

    const kohv=1.50;
    const vesi = 0.60;
    const limonaad = 2.2;
    const piim = 1;

    if (joogivalik.selectedIndex===1) {
        vastus.innerHTML = 'Kohvi hind on '+kogus.value * kohv+'€';
        vastus.style.color = "green";
    } else if (joogivalik.selectedIndex===2){
        vastus.innerHTML = 'Vesi hind on '+kogus.value * vesi+'€';
        vastus.style.color = "green";
    }
    else if (joogivalik.selectedIndex===3){
        vastus.innerHTML = 'Limonaadi hind on '+kogus.value * limonaad+'€';
        vastus.style.color = "green";
    }
    else if (joogivalik.selectedIndex===4){
        vastus.innerHTML = 'Piimi hind on '+kogus.value * piim+'€';
        vastus.style.color = "green";
    }
}