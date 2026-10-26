// Raamatu loomine
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kuva(tekst) {
        console.log(tekst.replaceAll("<br>", "\n"));
        document.getElementById("raamatVastus").innerHTML = tekst;
    },


    // Kirjeldus vaatamine metood. Tagastab raamatu pealkiri, autor ja aasta
    kirjeldus(eel = "") {
        this.kuva(eel + this.pealkiri + " - " + this.autor + ", " + this.aasta);
    },

    /* Aasta muutmine metood. Võtab vana aasta objektidest, loob muutuja "vanaAasta" ja lisab raamatu vana aasta.
    Pärast seda, muutub raamatu aasta, ja siis kuvab konsoolis, et aasta muudetud ja kirjeldus*/
    muudaAasta() {
        let uusAasta = Number(document.getElementById("uusAasta").value);
        if (!uusAasta) return this.kuva("Sisesta aasta!");

        let vanaAasta = this.aasta;
        this.aasta = uusAasta;
        this.kirjeldus("Aasta muudetud: " + vanaAasta + " -> " + this.aasta + "<br>");
    }
};

// Raamatukogu loomine raamatudega loendis.
let raamatukogu = {
    // Abimeetod: kuvab teksti konsoolis ja lehel (id - koht lehel, kuhu tekst läheb)
    kuva(id, tekst) {
        console.log(tekst.replaceAll("<br>", "\n"));
        document.getElementById(id).innerHTML = tekst;
    },

    raamatud: [
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Puhastus", autor: "Sofi Oksanen", aasta: 2008 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J. K. Rowling", aasta: 1997 }
    ],

    // kuvab kõik raamatud forEach'iga (r - raamat loendist, i - järjekorranumber)
    kuvaRaamatud() {
        let tekst = "";
        this.raamatud.forEach((r, i) => {
            tekst += (i + 1) + ". " + r.pealkiri + " | " + r.autor + " | " + r.aasta + "<br>";
        });
        this.kuva("raamatukoguVastus", tekst);
    },

    // lisab uue raamatu väljadelt raamatute loendisse (push lisab raamatu loendi lõppu)
    lisaRaamat() {
        let pealkiri = document.getElementById("pealkiri").value;
        let autor = document.getElementById("autor").value;
        let aasta = Number(document.getElementById("aasta").value);
        if (!pealkiri || !autor || !aasta) return this.kuva("lisaVastus", "Täida kõik väljad!");

        this.raamatud.push({ pealkiri, autor, aasta });
        this.kuva("lisaVastus", "Lisatud: " + pealkiri + " (" + autor + ", " + aasta + ")");
    },

    // loeb kokku kõik raamatud loendis (length)
    koguarv() {
        this.kuva("raamatukoguVastus", "Raamatute koguarv: " + this.raamatud.length);
    },

    // filtreerib raamatud, mis on ilmunud pärast 2000. aastat, ja kuvab nende arvu
    parast2000() {
        let arv = this.raamatud.filter(r => r.aasta > 2000).length;
        this.kuva("raamatukoguVastus", "Pärast 2000. aastat on ilmunud " + arv + " raamatut");
    },

    // otsib raamatud autori nime järgi (suur- ja väiketähti ei eristata)
    otsiAutori() {
        let autor = document.getElementById("otsiAutor").value.toLowerCase();
        let tekst = "";
        this.raamatud
            .filter(r => r.autor.toLowerCase().includes(autor))
            .forEach(r => tekst += r.pealkiri + " (" + r.aasta + ")<br>");
        this.kuva("otsiVastus", tekst || "Ei leitud ühtegi raamatut");
    }
};