// script.js
let lado1, lado2, lado3;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function calcular() {
  lado1 = parseFloat(document.getElementById("lado1").value);
  lado2 = parseFloat(document.getElementById("lado2").value);
  lado3 = parseFloat(document.getElementById("lado3").value);

  // Verificación de datos de entrada
  if (!lado1 || !lado2 || !lado3) {
    alert("Por favor ingresa los tres lados del triángulo.");
    return;
  }

  // Lógica de cálculo de los ángulos usando la Ley de los Cosenos
  let anguloA = Math.acos((Math.pow(lado2, 2) + Math.pow(lado3, 2) - Math.pow(lado1, 2)) / (2 * lado2 * lado3)) * 180 / Math.PI;
  let anguloB = Math.acos((Math.pow(lado1, 2) + Math.pow(lado3, 2) - Math.pow(lado2, 2)) / (2 * lado1 * lado3)) * 180 / Math.PI;
  let anguloC = 180 - anguloA - anguloB;

  // Calcular el tipo de triángulo
  const tipoTriangulo = determinarTipoTriangulo(lado1, lado2, lado3);
  document.getElementById("tipo-triangulo").innerText = "Tipo de Triángulo: " + tipoTriangulo;

  // Mostrar los resultados de los ángulos y lados
  document.getElementById("resultados").innerHTML = `
    Ángulo A: ${anguloA.toFixed(2)}° <br>
    Ángulo B: ${anguloB.toFixed(2)}° <br>
    Ángulo C: ${anguloC.toFixed(2)}°
  `;

  // Redibujar el triángulo
  redraw();
}

function determinarTipoTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

function draw() {
  background(240);

  if (lado1 && lado2 && lado3) {
    let anguloA = Math.acos((Math.pow(lado2, 2) + Math.pow(lado3, 2) - Math.pow(lado1, 2)) / (2 * lado2 * lado3)) * 180 / Math.PI;
    let anguloB = Math.acos((Math.pow(lado1, 2) + Math.pow(lado3, 2) - Math.pow(lado2, 2)) / (2 * lado1 * lado3)) * 180 / Math.PI;
    let anguloC = 180 - anguloA - anguloB;

    let x1 = 100, y1 = 300;
    let x2 = x1 + lado2 * cos(anguloA), y2 = y1 - lado2 * sin(anguloA);
    let x3 = x1 + lado3 * cos(anguloB), y3 = y1 - lado3 * sin(anguloB);

    fill(255, 182, 193); // Color rosa para el triángulo
    stroke(0);
    strokeWeight(2);
    triangle(x1, y1, x2, y2, x3, y3);

    textSize(15);
    fill(0);
    text(`Lado 1: ${lado1}`, x1 - 20, y1 + 20);
    text(`Lado 2: ${lado2}`, x2 - 20, y2 + 20);
    text(`Lado 3: ${lado3}`, x3 - 20, y3 + 20);

    text(`Ángulo A: ${anguloA.toFixed(2)}°`, (x1 + x2) / 2, (y1 + y2) / 2 - 20);
    text(`Ángulo B: ${anguloB.toFixed(2)}°`, (x1 + x3) / 2, (y1 + y3) / 2 - 20);
    text(`Ángulo C: ${anguloC.toFixed(2)}°`, (x2 + x3) / 2, (y2 + y3) / 2 - 20);
  }
}

function resetear() {
  document.getElementById("lado1").value = "";
  document.getElementById("lado2").value = "";
  document.getElementById("lado3").value = "";
  document.getElementById("angulo1").value = "";
  document.getElementById("angulo2").value = "";
  document.getElementById("angulo3").value = "";
  document.getElementById("tipo-triangulo").innerText = "";
  document.getElementById("triangulo").innerHTML = "";
  document.getElementById("resultados").innerText = "";
}

