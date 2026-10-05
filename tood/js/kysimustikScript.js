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

    let valik1;
    if(spotify.checked){
        valik1 = spotify.value;
        vastus2.src = "../photos/kysimustik/spotify.png";
    } else if(raadio.checked){
        valik1= raadio.value;
        vastus2.src = "../photos/kysimustik/raadio.png";
    } else if(vinyl.checked){
        valik1= vinyl.value;
        vastus2.src = "../photos/kysimustik/vinuulplaat.png";
    } else{
        valik1="Palun tee oma valik!"
    }

    return valik1;
}

function kuuladRadio(){
    let vastus6 = document.getElementById("vastus6");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let valik6;

    if (jah.checked) {
        valik6 = jah.value;
    } else if (ei.checked) {
        valik6 = ei.value;
    } else {
        valik6 = "Palun tee oma valik!";
    }

    vastus6.innerHTML = "Valik: " + valik6;

    return valik6;
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
    let raadioValik = kuuladRadio();

    vastusKoik.innerHTML="Sinu nimi on: "+nimi+'<br>'+
    'Sinu lemmikud on : ' + valik2 + '<br>'+
    'Sa kasutad ' + valik + '<br>'+
    'Sa kuuled muusika '+tund+' tundi' + '<br>' +
    'Sinu lemmik muusikastiil on: '+stiil+'<br>' +
    'Raadio kuulamine: '+raadioValik;

}
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat: "+tund.value + " tundi";

    return tund.value;
}

function selectvalik() {
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if (stiil.value !== "vali") {
        vastus5.src = stiil.value;
        if (stiil.value === "hiphop"){
            vastus5.src = "../photos/kysimustik/hiphop.png";
        }
        else if (stiil.value === "kantri"){
            vastus5.src = "../photos/kysimustik/kantri.png";
        }
        else if (stiil.value === "rock"){
            vastus5.src = "../photos/kysimustik/rock.png";
        }
        else if (stiil.value === "funk"){
            vastus5.src = "../photos/kysimustik/funk.jpg";
        }
        else if (stiil.value === "metal"){
            vastus5.src = "../photos/kysimustik/metal.png";
        }
        else{
            vastus5.src = "";
        }
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
    let vastus6=document.getElementById("vastus6");
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastusKoik.innerHTML="";
}