function kytuseArvutus() {
    let kytusValik=document.getElementById('kytusValik');
    let vastus= document.getElementById("vastus3");
    let km=document.getElementById("km");
    let kulu=document.getElementById("kulu");
    let img = document.getElementById("img1");

    const bensiin95=1.65;
    const bensiin98 = 1.75;
    const diisel = 1.55;

    let liitrid = km.value * kulu.value / 100;

    if (kytusValik.selectedIndex===1) {
        vastus.innerHTML = 'Bensiin 95 sõidu hind on '+liitrid * bensiin95+'€';
        vastus.style.backgroundColor = "green";
        img.src="https://egoglobalpetroleum.com/wp-content/uploads/2024/06/RIAN_6229302.jpg";
    } else if (kytusValik.selectedIndex===2){
        vastus.innerHTML = 'Bensiin 98 sõidu hind on '+liitrid * bensiin98+'€';
        vastus.style.backgroundColor = "yellow";
        img.src="https://www.orlen.pl/content/dam/internet/orlen/pl/en/for-business/fuel-wholesale-prices/images/unleaded-98-petrol.jpg";
    }
    else if (kytusValik.selectedIndex===3){
        vastus.innerHTML = 'Diisli sõidu hind on '+liitrid * diisel+'€';
        vastus.style.backgroundColor = "orange";
        img.src="https://img.magnific.com/premium-vector/fuel-diesel-icon-logo-vector-design-template_827767-83.jpg";
    }
    else{
        vastus.innerHTML = " Vali kütus"
    }
}