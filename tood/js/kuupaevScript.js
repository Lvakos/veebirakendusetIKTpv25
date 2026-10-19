const now=new Date();

const paev=now.getDate();
console.log("Tänane päev " +paev+ " päev");

const kuu=now.getMonth()+1;
console.log("Kuu number on "+kuu);

const aasta=now.getFullYear();
console.log("Praegune aasta on "+aasta);

const nadalapaev=now.getDay();
console.log("Nädalapaeva number on "+nadalapaev);

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML= "Täna on "+paev+"."+kuu+"."+aasta;
    aeg();
}

//lisa veel getHours() getMinutes()
// ja lisa veel üks funktsioon mis näitab aeg-kellaaeg
const tundid =now.getHours();

const minutit = now.getMinutes();

function aeg(){
    let aeg=document.getElementById("aeg");
    aeg.innerHTML= "Praegu kell on "+tundid+":"+minutit;
}

//mitu pöeva konsultatsiooni nödalani
const konsultatsioon = new Date(2026,11-1,2); //2.11.2026
const vahe = konsultatsioon.getTime()-now.getTime();
const konspaev=vahe/(1000*60*60*24); //sekundit*minutid*tunnid*päevad

console.log("Konsultatsiooni nädalani "+konspaev.toFixed() +"päeva");

//nupp - Konsultatsiooni nädalani

const sunnipaev = new Date(2027,7,14); //14.08.2027
const vahe2 = sunnipaev.getTime()-now.getTime();
const sunpaev=vahe2/(1000*60*60*24); //sekundit*minutid*tunnid*päevad

console.log("Sünnipaevani on: "+sunpaev.toFixed() +"päeva");

function sunnipaevani(){
    let sunnipaevan=document.getElementById("sunnipaevan");
    sunnipaevan.innerHTML= "Minu sünnipäevani: "+sunpaev.toFixed();
}