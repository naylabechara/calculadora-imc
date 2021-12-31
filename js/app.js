

let altura = parseFloat(document.getElementById("altura").value);
let peso = parseFloat(document.getElementById("peso").value);
let resultado = (peso / (altura * altura));
infoImc = informacion;
let sexo;
let edad;



                
    let i = 0;
    let option;

    for (i = 15; i <= 90; i++) {
        option = document.createElement("option");
        option.text = i;
        document.getElementById("edadSelect").appendChild(option);
    }

let buttonCalculo = document.getElementById("buttonCalculo");
buttonCalculo.addEventListener("click", calcular);

function calcular() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);   
    let resultado = (peso / (altura * altura));
    edad = edadSelect.options[edadSelect.selectedIndex].text;
    document.getElementById("infoImc").innerHTML = infoImc(resultado.toFixed(2));
    console.log(infoImc(resultado.toFixed(2)));


    if(document.getElementById('masc').checked) {
        sexo = 0; // masculino
    }else if(document.getElementById('fem').checked) {
        sexo = 1; // femenino
    }

        if(sexo === 0) {
            tmb = 66 + ( 13.7 * peso ) + ( 5 * (altura*100)) - ( 6.8 * edad );
            document.getElementById("infoTmb").innerHTML =  Math.round(tmb) + " kcal";

    // Math.round(tmb) + " cal"
        } else if (sexo === 1) {
            tmb = 655 + ( 9.6 * peso ) + ( 1.8 * (altura*100)) - ( 4.7 * edad );
            document.getElementById("infoTmb").innerHTML =  Math.round(tmb) + " kcal";
        }

        function Persona(peso, altura, edad, sexo) {
            this.peso = peso;
            this.altura = altura;
            this.edad = edad;
            this.sexo = sexo;
            }

        const persona1 = new Persona(56, 1.65, 18, 1);
        const usuario = new Persona(peso, altura, edad, sexo);
        const arrayDatos = [];
        arrayDatos.push(persona1);
        arrayDatos.push(usuario);

        localStorage.setItem("usuario", arrayDatos[1]);
        console.log(arrayDatos[1])
        
    };


function informacion(resultado) {
        if (resultado < 16) {
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene una delgadez severa`)
        }
        else if (resultado < 17) {
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene una delgadez moderada`)
        }
        else if (resultado < 18.5) {
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene una delgadez aceptable`)
        }
        else if (resultado < 25) {
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene un peso saludable`)
        }
        else if (resultado < 30) { 
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene un leve sobrepeso`)
        }
        else if (resultado < 35) { 
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene obesidad tipo I (riesgo moderado)`)
        }
        else if (resultado < 40) { 
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene obesidad tipo II (riesgo severo)`)
        }
        else if (resultado >= 40){ 
            document.getElementById("infoImc").innerHTML = (`Su IMC es de ${resultado}, usted tiene obesidad tipo III (riesgo muy severo)`)
        }
    }

