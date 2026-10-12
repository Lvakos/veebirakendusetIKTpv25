function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); // mitu elementi ühe nimega
    let arv=document.getElementById("arv");
    let img = document.getElementById("img");

    const toll=39.37;
    const meeter=0.0254;

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked ){
            if (valik[i].value==="meeter"){
                vastus.innerHTML=arv.value * toll + 'tolli';
                vastus.style.backgroundColor="green";
                img.src="https://img.icons8.ru/ios7/1200/tape-measure-sewing.jpg";

            } else if (valik[i].value==="tolli"){
                vastus.innerHTML=arv.value * meeter + 'meetri';
                vastus.style.backgroundColor="red";
                img.src="https://www.shutterstock.com/image-illustration/inch-7-symbol-size-vector-260nw-2657782243.jpg";
            }

            else{
                vastus.innerHTML = " Vali ühiku"
            }

        }
    }
}