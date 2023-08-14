let cenaCelkem = 0;
function vypocet() {
    let cenaLetenky = 0;
    if (document.getElementById("letenky").value == "Praha") {
        cenaLetenky = 500;
    } else if (document.getElementById("letenky").value == "Frankfurt") {
        cenaLetenky = 3000;
    } else if (document.getElementById("letenky").value == "NewYork") {
        cenaLetenky = 15000;
    } else if (document.getElementById("letenky").value == "Sydney") {
        cenaLetenky = 30000;
    };
    let pocetLetenek = document.getElementById("pocetLetenek").value
    let cena = cenaLetenky * pocetLetenek;
    if (document.getElementById("zpatecniLetenka").checked) {
        cena = cena * 2;
    };
    cenaCelkem = cena;
    if (document.getElementById("business").checked) {
        cenaCelkem = cena * 1.25;
    } else if (document.getElementById("royal").checked) {
        cenaCelkem = cena * 1.5;
    };
    document.getElementById("cenaCelkem").innerHTML = cenaCelkem + " Kč";
}


