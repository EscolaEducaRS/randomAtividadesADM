
    var inicio1 = {
        "0": " trabalha em uma empresa no ano de ",
        "1": " começou a trabalhar em uma empresa no ano de "
    }
    
    var inicio2 = {
        "0": " com um salário de "
    }

    var salarioEmReais = {
        "0": " por mês, ",
        "1": "  ",
        "2": "  ",
        "3": "  ",
        "4": "  "
    }
    
    var salMinimo = {
        "2013" : "622",
        "2014" : "724",
        "2015" : "788",
        "2016" : "880",
        "2017" : "937",
        "2018" : "954",
        "2019" : "998",
        "2020" : "1039",
        "2021" : "1100"

    }

    var grauInsalubridade = {
        "0" : " grau mínimo, ",
        "1" : " grau médio, ",
        "2" : " grau máximo, "
    }

var nomeVar = document.getElementById("nomeInputid")
var anoVar = document.getElementById("anoInputid")
var salVar = document.getElementById("salInputid")
var perVar = document.getElementById("perInputid")
var insVar = document.getElementById("InsInputid")
var anotVar = document.getElementById("anotInputid")
var heVar = document.getElementById("heInputid")
var liquiVar = document.getElementById("liqInputid")

var finalVar = {
    "0" : " calcule a remuneração do mês de Abril",
    "1" : " calcule a remuneração do mês de Fevereiro",
    "2" : " calcule a remuneração do mês de Setembro",
    "3" : " calcule a remuneração do mês de Outubro",
    "4" : " calcule a remuneração do mês de Dezembro",
    "5" : " calcule a remuneração do mês de Agosto",
    "6" : " calcule a remuneração do mês de Maio",
    "7" : " calcule a remuneração do mês de Janeiro",
    "8" : " calcule a remuneração do mês de Julho"
}

var chVar = {
    "0" : " para trabalhar ",
    "1" : " sua carga horária é de "

}




var respVar = document.getElementById("respDivid")


function formularClique() {
    if (nomeVar.value == ""){
        nomeVar.value = "O Funcionário"
    }
    let anoTakeLet = anoVar.options[anoVar.selectedIndex].text;
    

    if (perVar.checked == true) {
        var periculo = " recebe periculosidade, "
    } else {
        var periculo = ""
    }

    if (insVar.checked == true) {
        var insalubre = " recebe insalubridade, " + grauInsalubridade[Math.floor(Math.random() * 3)]
    } else {
        var insalubre = ""
    }

    if (anotVar.checked == true) {
        var adnoturno = " faz, " + Math.floor(Math.random() * 8 + 2) + " horas noturnas, "
    } else {
        var adnoturno = ""
    }

    if (heVar.checked == true) {
        var horasextra = " faz mensalmente, " + Math.floor(Math.random() * 22 + 5) + " horas extras a 50% e " +
        Math.floor(Math.random() * 14 + 5) + " horas extras a 100%, "
    } else {
        var horasextra = ""
    }

    let finalsinho1 = finalVar[Math.floor(Math.random() * 8)]

    if (liquiVar.checked == true) {
        var finalsinho2 = " e o salário Liquido"
    } else {
        var finalsinho2 = ""
    }

    //Carga Horária -------------------------
    let cargahorariaVar = chVar[Math.floor(Math.random() * 2)] + ((Math.floor(Math.random() * 7)*10)+160) + " horas por mês, "
    
    

    //resultado Final ------------------------
    let adicionais1 = periculo + insalubre + adnoturno
    let horasextras1 = horasextra

    //Math.floor(Math.random() * 2)

    let resultadoLet = nomeVar.value + inicio1[Math.floor(Math.random() * 2)]
    + anoTakeLet + inicio2[0]
    let resultadoLet2 = salarioEmReais[0] + cargahorariaVar + adicionais1 + horasextras1
    respVar.innerHTML = resultadoLet + " R$ " + Math.floor(Math.random() * 3000 + 700) + ",00"
    + resultadoLet2 + finalsinho1 + finalsinho2 + ": "

}