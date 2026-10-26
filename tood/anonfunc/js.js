//1-Erinevad funktsioonid
console.log("--Erinevad funktsioonid--");
function minuNimi() {
    console.log("Maksimilian");
}
const minuNimi2 = () => console.log("Maksimilian");

minuNimi();
minuNimi2();

//2-Argumendiga funktsioon
console.log("--Argumendiga funktsioon--");
function kuupaevEesti(kuupaev) {
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"];
    const paev = kuupaev.substring(0, 2);
    const kuu = kuupaev.substring(3, 5);
    const aasta = kuupaev.substring(6, 8);
    console.log(`${paev}. ${kuud[kuu - 1]} 20${aasta}`);
}
kuupaevEesti("19.07.25");

//3-Teadmata hulk
console.log("--Teadmata hulk--");
const statistika = arvud => {
    let summa = 0;
    arvud.forEach(arv => summa += arv);
    const kogus = arvud.length;
    const keskmine = kogus > 0 ? summa / kogus : 0;
    return { kogus: kogus, keskmine: keskmine };
};

console.log(statistika([4, 8, 15, 16, 23, 42]));

//4-Salajane sõnum
console.log("--Salajane sõnum--");
const salajaneSonum = sonum => {
    const vokaalid = "aeiouõäöü";
    let tulemus = "";
    for (let i = 0; i < sonum.length; i++) {
        const taht = sonum[i];
        tulemus += vokaalid.includes(taht.toLowerCase()) ? "*" : taht;
    }
    return tulemus;
};

console.log(salajaneSonum("Tere tulemast!"));

//5-Unikaalsed nimed
console.log("--Unikaalsed nimed--");
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];
    nimed.forEach(nimi => {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    });
    return unikaalsed;
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));