function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML = "Sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "red";

    return nimi.value;
}

function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl = document.getElementById("vinüülplaat");

    let valik="";
    if(spotify.checked){
        valik = spotify.value;
    } else if(raadio.checked){
        valik= raadio.value;
    } else if(vinyl.checked){
        valik= vinyl.value;
    } else{
        valik="Palun tee oma valik!"
    }
    vastus2.innerHTML = "Valik: " + valik;

    return valik;
}

function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let radiohead=document.getElementById("radiohead");
    let rollingstones=document.getElementById("rollingstones");
    let thesmiths = document.getElementById("thesmiths");
    let thesmashingpumpkins = document.getElementById("thesmashingpumpkins");


    let valik2="";
    if(radiohead.checked){
        valik2+=radiohead.value +', <br>';
    } if(rollingstones.checked){
        valik2+=rollingstones.value +', <br>';
    } if(thesmiths.checked){
        valik2+=thesmiths.value +', <br>';
    } if(thesmashingpumpkins.checked){
        valik2+=thesmashingpumpkins.value +', <br>';}
    vastus3.innerHTML = "Sinu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "Blue";

    return valik2;
}

function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let stiil=selectvalik();
    let valik2 = checkboxValik();
    let tund = rangeValik();

    vastusKoik.innerHTML="Sinu nimi on: "+nimi+'<br>'+
    'Sinu lemmikud on : ' + valik2 + '<br>'+
    'Sa kasutad ' + valik + '<br>'+
    'Sa kuuled muusika '+tund+' tundi' + '<br>' +
    'Sinu lemmik muusikastiil on: '+stiil;

}
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat: "+tund.value + " tundi";

    return tund.value;
}

function selectvalik(){
    let vastus5=document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if(stiil.selectedIndex !== 0){
        vastus5.innerHTML="Sa valisid " + stiil.value;
    } else{
        vastus5.innerHTML="Palun tee oma valik";
    }
    return stiil.value;
}

function puhasta(){
    let vastusKoik = document.getElementById("vastusKoik");
    let vastus1=document.getElementById("vastus1");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastusKoik.innerHTML="";
}