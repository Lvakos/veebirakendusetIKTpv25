
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return this.pealkiri + " - " + this.autor + ", " + this.aasta;
    },

    muudaAasta(uusAasta) {
        let vanaAasta = this.aasta;
        this.aasta = uusAasta;
        console.log("Aasta muudetud: " + vanaAasta + " -> " + this.aasta);
        console.log(this.kirjeldus());
    }
};

let raamatukogu = {
    raamatud: [
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Puhastus", autor: "Sofi Oksanen", aasta: 2008 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J. K. Rowling", aasta: 1997 }
    ],

    kuvaRaamatud() {
        console.log("Kõik raamatud:");
        this.raamatud.forEach((r, i) => {
            console.log((i + 1) + ". " + r.pealkiri + " | " + r.autor + " | " + r.aasta);
        });
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log("Lisatud: " + pealkiri + " (" + autor + ", " + aasta + ")");
    },

    koguarv() {
        return this.raamatud.length;
    },

    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    otsiAutori(autor) {
        return this.raamatud.filter(r =>
            r.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }
};

console.log(raamat.kirjeldus());
raamat.muudaAasta(2012);
raamatukogu.kuvaRaamatud();
raamatukogu.lisaRaamat("Kolm Kuningat", "Indrek Hargla", 2012);
raamatukogu.kuvaRaamatud();
console.log("Raamatute koguarv: " + raamatukogu.koguarv());
console.log("Pärast 2000. aastat: " + raamatukogu.parast2000());
console.log("Otsing 'Kivirähk':", raamatukogu.otsiAutori("Kivirähk"));

function naitaKirjeldust() {
    document.getElementById("raamatVastus").innerHTML = raamat.kirjeldus();
}

function muudaAastat() {
    let uus = Number(document.getElementById("uusAasta").value);
    if (!uus) {
        document.getElementById("raamatVastus").innerHTML = "Sisesta aasta!";
        return;
    }
    raamat.muudaAasta(uus);
    document.getElementById("raamatVastus").innerHTML = "Aasta muudetud! " + raamat.kirjeldus();
}

function naitaRaamatud() {
    raamatukogu.kuvaRaamatud();
    let tekst = "";
    raamatukogu.raamatud.forEach((r, i) => {
        tekst += (i + 1) + ". " + r.pealkiri + " | " + r.autor + " | " + r.aasta + "<br>";
    });
    document.getElementById("raamatukoguVastus").innerHTML = tekst;
}

function naitaKoguarv() {
    let arv = raamatukogu.koguarv();
    console.log("Raamatute koguarv: " + arv);
    document.getElementById("raamatukoguVastus").innerHTML = "Raamatute koguarv: " + arv;
}

function naitaParast2000() {
    let arv = raamatukogu.parast2000();
    console.log("Pärast 2000. aastat: " + arv);
    document.getElementById("raamatukoguVastus").innerHTML = "Pärast 2000. aastat on ilmunud " + arv + " raamatut";
}

function lisa() {
    let pealkiri = document.getElementById("pealkiri").value;
    let autor = document.getElementById("autor").value;
    let aasta = Number(document.getElementById("aasta").value);

    if (pealkiri === "" || autor === "" || !aasta) {
        document.getElementById("lisaVastus").innerHTML = "Täida kõik väljad!";
        return;
    }

    raamatukogu.lisaRaamat(pealkiri, autor, aasta);
    document.getElementById("lisaVastus").innerHTML = "Lisatud: " + pealkiri + " (" + autor + ", " + aasta + ")";
}

function otsi() {
    let autor = document.getElementById("otsiAutor").value;
    let leitud = raamatukogu.otsiAutori(autor);
    console.log("Otsing '" + autor + "':", leitud);

    if (leitud.length === 0) {
        document.getElementById("otsiVastus").innerHTML = "Ei leitud ühtegi raamatut";
        return;
    }

    let tekst = "";
    leitud.forEach(r => {
        tekst += r.pealkiri + " (" + r.aasta + ")<br>";
    });
    document.getElementById("otsiVastus").innerHTML = tekst;
}