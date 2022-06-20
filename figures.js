function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
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

function calcularCuadrado () {
    const element = document.getElementById("InputCuadrado");
    const value = parseInt(element.value);

    let perimetro = perimetroCuadrado(value);
    let area = areaCuadrado(value);

    document.getElementById("ResultadoCuadrado").innerHTML = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}

function calcularTriangulo () {
    const element = document.getElementById("InputTriangulo");
    const value = parseInt(element.value);

    console.log(element);

    let perimetro = perimetroCuadrado(value);
    let area = areaCuadrado(value);

    document.getElementById("ResultadoCuadrado").innerHTML = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}

function calcularCirculo () {
    const element = document.getElementById("InputCirculo");
    const value = parseInt(element.value);

    console.log(element);
    let perimetro = perimetroCuadrado(value);
    let area = areaCuadrado(value);

    document.getElementById("ResultadoCuadrado").innerHTML = `Resultado: Perímetro = ${perimetro}cm - Área = ${area}cm^2`;
}