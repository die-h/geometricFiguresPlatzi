function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

function perimetroTriangulo (lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo (base, altura) {
    return base * altura / 2;
}

function perimetroCirculo (diametro) {
    return Math.PI * diametro;
}

function areaCirculo (radio) {
    return Math.PI * radio ^ 2;
}

const lado = document.getElementById("InputCuadrado").value;
console.log(lado);