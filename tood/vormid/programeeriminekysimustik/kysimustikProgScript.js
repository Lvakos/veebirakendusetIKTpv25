/*Milliseid programmeerimiskeeli sa tead?*/
function teadmisedCheck() {
    let vastus1=document.getElementById("vastus1");
    let csharp=document.getElementById("csharp");
    let js=document.getElementById("js");
    let python = document.getElementById("python");
    let php = document.getElementById("php");


    let valik2="";
    if(csharp.checked){
        valik2+=csharp.value +', <br>';
    } if(js.checked){
        valik2+=js.value +', <br>';
    } if(python.checked){
        valik2+=python.value +', <br>';
    } if(php.checked){
        valik2+=php.value +', <br>';}
    vastus1.innerHTML = "Sa tead: " + valik2;
    vastus1.style.backgroundColor = "greenyellow";

    return valik2;
}

/*Mida arvad programmeerimise õppimisest?*/
function arvamuss(){
    let vastus1 = document.getElementById("vastus2");
    let arvamus=document.getElementById("arvamus");

    if(arvamus.value !== ""){
        vastus1.innerHTML = "Sinu arvamus: " + arvamus.value;}
    else{
        vastus1.innerHTML = "Sinu arvamus: ";
    }

    vastus1.style.backgroundColor = "greenyellow";

    return arvamus.value;
}

/*Mitu tundi nädalas tegeled programmeerimisega?*/
function rangeValik(){
    let vastus4=document.getElementById("vastus3");
    let tund = document.getElementById("tund");

    vastus4.innerHTML="Sa tegeled programmeerimisega: "+tund.value + " tundi";
    vastus4.style.backgroundColor = "greenyellow";

    return tund.value;
}

/*Kas sulle meeldib programmeerida?*/
function meeldib(){
    let vastus4 = document.getElementById("vastus4");
    let piltVastus = document.getElementById("piltVastus");
    let jah = document.getElementById("jahh");
    let ei = document.getElementById("eii");

    let valik6;

    if (jah.checked) {
        valik6 = "Programmeerimine meeldib!";
        piltVastus.src = "../../photos/smile.png"
    } else if (ei.checked) {
        valik6 = "Programmeerimine ei meeldi.";
        piltVastus.src = "../../photos/kurb.png"
    } else {
        valik6 = "Palun tee oma valik!";
    }

    vastus4.innerHTML = valik6;

    return valik6;
}

/*Milliseid programmeerimisega seotud tööriistu oskad nimetada?*/
function arvamus2(){
    let vastus5 = document.getElementById("vastus5");
    let progTooristu=document.getElementById("progTooristu");

    vastus5.innerHTML = "Sinu arvamus: " + progTooristu.value;
    vastus5.style.backgroundColor = "greenyellow";

    return progTooristu.value;
}

/*Millist programmeerimiskeelt sooviksid kõige rohkem õppida?*/
function soovitusOpi(){
    let vastus6 = document.getElementById("vastus6");
    let soovitus=document.getElementById("soovitus");

    let valik;
    if (soovitus.value === "vali"){
        valik = "";
    } else{
        valik = soovitus.value;
    }
    vastus6.innerHTML = "Sinu valik: " + valik;
    vastus6.style.backgroundColor = "greenyellow";

    return valik;
}

/*Saada*/
function naitaKoikee(){
    let vastusKoikk = document.getElementById("vastusKoikk");
    let teadmised = teadmisedCheck();
    let arvamus = arvamuss();
    let rangevalik = rangeValik();
    let meeldibb = meeldib();
    let arvamus22 = arvamus2();
    let soovitus = soovitusOpi();

    vastusKoikk.innerHTML="Sa tead: "+teadmised+'<br>'+
        'Sinu arvamus : ' + arvamus + '<br>'+
        'Sa ' + meeldibb + '<br>'+
        'Sa tegeled programmeerimisega '+rangevalik+' tundi' + '<br>' +
        'Sa oskad: '+arvamus22+' tooristad <br>' +
        'Sa soovid kõige rohkem õppida: '+soovitus;

}

/*Puhasta*/
function puhastaa(){
    let vastusKoik = document.getElementById("vastusKoikk");
    let vastus1=document.getElementById("vastus1");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");
    let vastus6=document.getElementById("vastus6");
    let piltVastus=document.getElementById("piltVastus");
    vastus1.innerHTML="Sa tead: ";
    vastus2.innerHTML="Sinu arvamus: ";
    vastus3.innerHTML="Sa tegeled programmeerimisega: ";
    vastus4.innerHTML="";
    vastus5.innerHTML="Sinu arvamus: ";
    vastus6.innerHTML="Sinu valik: ";
    piltVastus.src = "../../photos/neutral.png"
    vastusKoik.innerHTML="";
}
