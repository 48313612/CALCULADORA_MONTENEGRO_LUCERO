function validarForm() {
    let num1 = document.getElementById('num1').value;
    let operacion = document.getElementById('operacion').value;
    let num2 = document.getElementById('num2').value;

    let num1Valido = validacion(num1);
    let num2Valido = validacion(num2);
   
    let operacionValida = false;
    if (operacion == '+' || operacion == '-' || operacion == '*' || operacion == '/')
    {
        operacionValida = true;
    }

    document.getElementById('num1').style.backgroundColor = 
        num1 === '' ? '' : (num1Valido ? "#D6E5BD" : "#ff686b");
    
    document.getElementById('num2').style.backgroundColor = 
        num2 === '' ? '' : (num2Valido ? "#D6E5BD" : "#ff686b");
    
    document.getElementById('operacion').style.backgroundColor = 
        operacion === '' ? '' : (operacionValida ? "#D6E5BD" : "#ff686b");

}

function validacion(datoAvalidar) {

    const tieneLetra = /(?:[A-Z])/.test(datoAvalidar) || /(?:[a-z])/.test(datoAvalidar);
    const tieneNum = /(?:\d)/.test(datoAvalidar);

    let esValido = false;

    if (datoAvalidar !== '' && tieneNum && !tieneLetra) {
        esValido = true;
    }

    return esValido;
}

function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('operacion').value;

    let resultado;
    switch(operacion)
    {
        case '+':
        {
            resultado = num1 + num2;
            break;
        }
        case '-':
        {
            resultado = num1 - num2;
            break;
        }
        case '*':
        {
            resultado = num1 * num2;
            break;
        }
        case '/':
        {
            resultado = num1 / num2;
            break;
        }
    }
    let mensaje = `El resultado es ${resultado}`;
    let alertaVerde = document.getElementById('alertaVerde');
    let alertaRojo = document.getElementById('alertaRojo');

    if (resultado >= 0) {
        console.log("verde");
        alertaVerde.innerHTML = mensaje;
        alertaVerde.style.display = "block";
    } else {
        alertaRojo.innerHTML = mensaje;
        alertaRojo.style.display = "block";
    }
}