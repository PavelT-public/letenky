function srovnaniRozpoctuCeny() {
    let rozpocet = document.getElementById("rozpocet").value;
    let rozdil = cenaCelkem - rozpocet;
    if (rozpocet > cenaCelkem) {
        document.getElementById("srovnani").innerHTML = "...ještě ušetříte (" + rozdil + " Kč) :-)";
    } else if (rozpocet < cenaCelkem) {
        document.getElementById("srovnani").innerHTML = "Rozpočet bohužel nestačí. Chtělo by to trošku (" + rozdil + " Kč) přihodit :-)";
    } else if (rozpocet == "" || rozpocet == " "|| rozpocet == null || rozpocet == undefined || isNaN(rozpocet)){
        document.getElementById("srovnani").innerHTML = "Jestli chcete porovnat, musíte zadat číslo :-)";
    } else if (parseInt(rozpocet == 0)){
        document.getElementById("srovnani").innerHTML = "Do diskuse, jestli je 0 číslo se raději pouště nebudu :-)";
    } else if (rozpocet == cenaCelkem) {
        document.getElementById("srovnani").innerHTML = "Těsný, ale akorát :-)";
    }
}