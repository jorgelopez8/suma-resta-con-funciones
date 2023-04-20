calcular();
function calcular() {
    let num1 = parseInt(prompt("Escribe el primer número:"));
    let num2 = parseInt(prompt("Escribe el segundo número:"));

    sumar(num1, num2);
    restar(num1, num2);
    multiplicar(num1, num2);
    dividir(num1, num2);
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`La suma es: ${resultado}`);
    alert("La solución de la suma es: " + suma);
}


function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`La resta es: ${resultado}`);
    alert("La solución de la resta es: " + resta);
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log(`La multiplicación es: ${resultado}`);
    alert("La solución de la multiplicación es: " + multiplicación);
}


function dividir(num1, num2) {
    let resultado = num1 / num2;
    console.log(`La división es: ${resultado}`);
    alert("La solución de la división es: " + división);

}