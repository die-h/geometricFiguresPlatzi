function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

function perimetroTriangulo (lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo (lado1, lado2, lado3) {
    let semiPerimetro = perimetroTriangulo(lado1, lado2, lado3) / 2;

    return Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3));
}

function perimetroCirculo (radio) {
    return Math.PI * (radio * 2);
}

function areaCirculo (radio) {
    return Math.PI * (radio ** 2);
}

function calcularCuadrado () {
    const element = document.getElementById("InputCuadrado");
    const value = parseFloat(element.value);

    let perimetro = perimetroCuadrado(value);
    let area = areaCuadrado(value);

    document.getElementById("ResultadoCuadrado").innerText = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}

function calcularTriangulo () {
    const elemento1 = document.getElementById("InputTriangulo1");
    const lado1 = parseFloat(elemento1.value);
    const elemento2 = document.getElementById("InputTriangulo2");
    const lado2 = parseFloat(elemento2.value);
    const elemento3 = document.getElementById("InputTriangulo3");
    const lado3 = parseFloat(elemento3.value);

    let perimetro = perimetroTriangulo(lado1, lado2, lado3);
    let area = areaTriangulo(lado1, lado2, lado3);

    document.getElementById("ResultadoTriangulo").innerText = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}

function calcularCirculo () {
    const element = document.getElementById("InputCirculo");
    const value = parseFloat(element.value);

    let perimetro = perimetroCirculo(value);
    let area = areaCirculo(value);

    document.getElementById("ResultadoCirculo").innerText = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}