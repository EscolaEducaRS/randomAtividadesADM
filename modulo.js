
    let inicio1 = {
        "0": " trabalha em uma empresa ",
        "1": " começou a trabalhar em uma empresa ",
        "2": " que trabalha em uma empresa ",
        "3": " em regime de CLT trabala em uma empresa "
    }
    
    let inicio2 = {
        "0": " com um salário de ",
        "1": " com um salário em carteira de ",
        "2": " com o registro salárial de "
    }

    let salarioEmReais = {
        "0": " por mês, ",
        "1": " por hora, ",
        "2": " por semana, "
    }
    
    let salMinimo = {
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

    let grauInsalubridade = {
        "0" : " grau mínimo, ",
        "1" : " grau médio, ",
        "2" : " grau máximo, "
    }

let nomeVar = document.getElementById("nomeInputid")
let anoVar = document.getElementById("anoInputid") // ano
let salVar = document.getElementById("salInputid")
let perVar = document.getElementById("perInputid")
let insVar = document.getElementById("InsInputid")
let anotVar = document.getElementById("anotInputid")
let heVar = document.getElementById("heInputid")
let liquiVar = document.getElementById("liqInputid")
let nivelVar = document.getElementById("nivelInputid")


let finalVar = {
    "0" : " calcule a remuneração do mês de Abril",
    "1" : " calcule a remuneração do mês de Fevereiro",
    "2" : " calcule a remuneração do mês de Setembro",
    "3" : " calcule a remuneração do mês de Outubro",
    "4" : " calcule a remuneração do mês de Dezembro",
    "5" : " calcule a remuneração do mês de Agosto",
    "6" : " calcule a remuneração do mês de Maio",
    "7" : " calcule a remuneração do mês de Janeiro",
    "8" : " calcule a remuneração do mês de Julho",
    "9" : " calcule a remuneração do mês de Junho",
    "10" : " calcule a remuneração do mês de Novembro"
}

let chVar = {
    "0" : " para trabalhar ",
    "1" : " sua carga horária é de "

}

let respVar = document.getElementById("respDivid")





function formularClique() {
    
    let nivelDificuldade = nivelVar.options[nivelVar.selectedIndex].innerHTML

    if (nivelDificuldade == "Nível 1"){ // inicio do nivel 1 da dificulade
    
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
            
            var insalubre = " recebe insalubridade em " + grauInsalubridade[Math.floor(Math.random() * 3)]
        } else {
            var insalubre = ""
        }

        if (anotVar.checked == true) {
            var adnoturno = " faz " + Math.floor(Math.random() * 6 + 3) + " horas noturnas, " // numero rando de 3 a 8
        } else {
            var adnoturno = ""
        }

        if (heVar.checked == true) {
            var horasextra = " faz mensalmente, " + Math.floor(Math.random() * 22 + 5) + " horas extras a 50% e " +
            Math.floor(Math.random() * 14 + 5) + " horas extras a 100%, "
        } else {
            var horasextra = ""
        }

        let finalsinho1 = finalVar[Math.floor(Math.random() * 11)]

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
        + inicio2[0]
        let resultadoLet2 = salarioEmReais[0] + cargahorariaVar + adicionais1 + horasextras1

        respVar.innerHTML = resultadoLet + " R$ " + Math.floor(Math.random() * 3000 + 900) + ",00"
        + resultadoLet2 + finalsinho1 +  "/" + anoTakeLet + finalsinho2 + ": "

    } // fim do nivel 1 =====================================================================
    
    if (nivelDificuldade == "Nível 2"){ // inicio do Nível 2 da dificulade
            
        if (nomeVar.value == ""){
            nomeVar.value = "O Funcionário"
        }
        // aumentar o nivel aqui // pensei em um Objeto com funçao
        
        let salarioBaseObj = {
            hora: function() {
                return Math.floor(Math.random() * 30 + 3);
            },
            semana: function() {
                return Math.floor(Math.random() * 500 + 300);
            },
            mes: function() {
                return Math.floor(Math.random() * 3000 + 900);
            },
        }
       
        // Randorizar o tipode salario
        let salarioTipoSal = salarioEmReais[Math.floor(Math.random() * 3)]
        let salarioBase
        if (salarioTipoSal == " por mês, "){
            salarioBase = salarioBaseObj.mes()

        }
        if (salarioTipoSal == " por semana, "){
            salarioBase = salarioBaseObj.semana()
        }
        if (salarioTipoSal == " por hora, "){
            salarioBase = salarioBaseObj.hora()
        }

        //console.log(salarioBaseObj.a(), salarioTipoSal);



        let anoTakeLet = anoVar.options[anoVar.selectedIndex].text;
        
        if (perVar.checked == true) {
            var periculo = " recebe periculosidade, " // por que aqui nao da para usar o let?
        } else {
            var periculo = ""
        }

        if (insVar.checked == true) {
            var insalubre = " recebe insalubridade em " + grauInsalubridade[Math.floor(Math.random() * 3)]
        } else {
            var insalubre = ""
        }

        if (anotVar.checked == true) {
            var adnoturno = " faz " + Math.floor(Math.random() * 6 + 3) + " horas noturnas, "
        } else {
            var adnoturno = ""
        }

        if (heVar.checked == true) {
            var horasextra = " faz mensalmente, " + Math.floor(Math.random() * 20 + 6) + " horas extras a 50% e " +
            Math.floor(Math.random() * 20 + 6) + " horas extras a 100%, "
        } else {
            var horasextra = ""
        }

        let finalsinho1 = finalVar[Math.floor(Math.random() * 11)]

        if (liquiVar.checked == true) {
            var finalsinho2 = " e o salário Liquido"
        } else {
            var finalsinho2 = ""
        }

        //Carga Horária ------------------------- Nível 2
        let cargahora1 = chVar[Math.floor(Math.random() * 2)]
        let cargahoraTipo = {
            "0" : " horas no mês, ", "1" : " horas no dia, ", "2" : " horas na semana, ",
        }
        let cargahora2 = cargahoraTipo[Math.floor(Math.random() * 3)]
        let valorDaCH
        if (cargahora2 == " horas no mês, "){
            valorDaCH = ((Math.floor(Math.random() * 7)*10)+160)
        }

        if (cargahora2 == " horas no dia, "){
            let valorDaCH2 = "de Segunda a Sexta-feira, "
            let valorDaCH3 = Math.floor(Math.random() * 3 + 6)

            valorDaCH = valorDaCH2 + valorDaCH3
        }
        if (cargahora2 == " horas na semana, "){
            valorDaCH = Math.floor(Math.random() * 9 + 36)
        }

        let cargahorariaVar = cargahora1 + valorDaCH + cargahora2


        //resultado Final ------------------------ Nível 2
        let adicionais1 = periculo + insalubre + adnoturno
        let horasextras1 = horasextra

        //Math.floor(Math.random() * 2)
        
        let resultadoLet = nomeVar.value + inicio1[Math.floor(Math.random() * 2)]
        + inicio2[0]
        let resultadoLet2 = salarioTipoSal + cargahorariaVar + adicionais1 + horasextras1

        respVar.innerHTML = resultadoLet + " R$ " + salarioBase + ",00"
        + resultadoLet2 + finalsinho1 +  "/" + anoTakeLet + finalsinho2 + ": "

    } // fim do nivel 2 =====================================================================


    if (nivelDificuldade == "Nível 3"){ // inicio do nivel 3 da dificulade
        alert("Em Construção!!");
        console.log('nivel 3 em construção!');
    } // fim do nivel 3 =====================================================================

}