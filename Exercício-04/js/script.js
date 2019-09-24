let pinguin1 = {
    "nome": "Brad Pitt",
    "idade": 25,
    "origem": "Alaska"
}

pinguin1.andar = function () {
    console.log("andou");
}


pinguin1.podeVoar = false;
pinguin1.voar = function () {
    if (pinguin1.podeVoar) {
        console.log("ele pode voar")
    } else {
        console.log("Ele nao pode voar")
    }
}
