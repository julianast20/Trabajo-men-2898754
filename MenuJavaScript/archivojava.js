function mostrarFormulario() {
  let opciones = document.getElementById("opciones").value;
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  document.getElementById("formulario").style.display = "none";

  // OPERADORES
  if (opciones === "operadores") {
    let ejercicio = prompt("Elija un ejercicio:\n1. Área de un triángulo\n2. Suma de dos números\n3. Número elevado al cuadrado\n4. Convertir de euros a dólares\n5. Lado de un cuadrado y mostrar el valor del área y del perímetro\n6. Área y el volumen de un cilindro\n7. Radio de una circunferencia, la longitud de la misma y el área\n8. Promedio de tres números");
// Ejercicio 1
    if (ejercicio === "1") {
      let base = parseFloat(prompt("Ingrese la base del triángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
      let area = (base * altura) / 2;
      resultado.innerHTML = "El área del triángulo es: " + area;
    } else if (ejercicio === "2") {
      // Ejercicio 2
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));
      let suma = num1 + num2;
      resultado.innerHTML = "La suma es de: " + suma;
    } else if (ejercicio === "3") {
      // Ejercicio 3
      let num = parseFloat(prompt("Ingrese el número a elevar al cuadrado"));
      let multi = Math.pow(num, 2);
      resultado.innerHTML = "El número que usted ingresó elevado al cuadrado es: " + multi;
    } else if (ejercicio === "4") {
      // Ejercicio 4
      let euros = parseFloat(prompt("Ingrese la cantidad de euros que quiere convertir: "));
      let conversion = euros * 1.83;
      resultado.innerHTML = "El total de los euros en dólares es: " + conversion;
    } else if (ejercicio === "5") {
      // Ejercicio 5
      let ladoC = parseFloat(prompt("Ingrese el lado del cuadrado"));
      let area5 = ladoC * ladoC;
      let perimetro = 4 * ladoC;
      resultado.innerHTML = "El perímetro es de: " + perimetro + " y el área es: " + area5;
    } else if (ejercicio === "6") {
      // Ejercicio 6
      let radio6 = parseFloat(prompt("Ingrese el valor del radio: "));
      let altura6 = parseFloat(prompt("Ingrese el valor de la altura: "));
      let area6 = 2 * Math.PI * radio6 * altura6 + 2 * Math.PI * Math.pow(radio6, 2);
      let vol = Math.PI * Math.pow(radio6, 2) * altura6;
      resultado.innerHTML = "El área es: " + area6 + " el volumen es de: " + vol;
    } else if (ejercicio === "7") {
      // Ejercicio 7
      let radio7 = parseFloat(prompt("Ingrese el valor del radio: "));
      let longitud = 2 * Math.PI * radio7;
      let area7 = Math.PI * Math.pow(radio7, 2);
      resultado.innerHTML = "El área es: " + area7 + "  la longitud es de: " + longitud;
    } else if (ejercicio === "8") {
      // Ejercicio 8
      let n1 = parseFloat(prompt("Ingrese el primer número: "));
      let n2 = parseFloat(prompt("Ingrese el segundo número: "));
      let n3 = parseFloat(prompt("Ingrese el tercer número: "));
      let promedio = (n1 + n2 + n3) / 3;
      resultado.innerHTML = "El promedio de los tres números ingresados es de: " + promedio;
    } else {
      alert("Ejercicio inválido");
    }

    document.getElementById("formulario").style.display = "block";
  }
  // CONDICIONALES
  else if (opciones === "condicionales") {
  let resultado = document.getElementById("resultado");
  let ejercicio = prompt("Elija un ejercicio:\n1. Número positivo o negativo\n2. Números mayor y menor\n3. Tres números donde se verá el menor y el mayor\n4. Números A y B, sumar si A es menor que B o sino restar\n5. Números A y B encontrar el cociente entre A y B\n6. Números A y B, sumar si al menos uno de ellos es negativo, si no multiplicar\n7. Determinar si un año es bisiesto o no");

  //ejercicio 1
  if (ejercicio === "1") {
    let npn = parseFloat(prompt("Ingrese un número negativo o positivo: "));
    if (npn > 0) {
      resultado.innerHTML = "El número ingresado es positivo";
    } else if (npn < 0) {
      resultado.innerHTML = "El número ingresado es negativo";
    }
  }
  //ejercicio 2
  else if (ejercicio === "2") {
    let numer1 = parseFloat(prompt("Ingrese el primer número: "));
    let numer2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (numer1 > numer2) {
      resultado.innerHTML = "El número mayor es: " + numer1 + " y el menor es: " + numer2;
    } else if (numer1 < numer2) {
      resultado.innerHTML = "El número mayor es: " + numer2 + " y el menor es: " + numer1;
    }
  }
  //ejercicio 3
  else if (ejercicio === "3") {
    let numero1 = parseFloat(prompt("Ingrese el primer número: "));
    let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
    let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

    encontrarMinMax = () => {
      let min = Math.min(numero1, numero2, numero3);
      let max = Math.max(numero1, numero2, numero3);
      return { min, max };
    }
    const { min, max } = encontrarMinMax(numero1, numero2, numero3);
    resultado.innerHTML = "El número menor es: " + min + " el número mayor es: " + max;
  }
  //ejercicio 4
  else if (ejercicio === "4") {
    let x = parseFloat(prompt("Ingrese el primer número: "));
    let y = parseFloat(prompt("Ingrese el segundo número: "));
    if (x < y) {
      resultado.innerHTML = "La suma de los dos numeros es: " + (x + y);
    } else if (x > y) {
      resultado.innerHTML = "La resta de los dos números es: " + (x - y);
    }
  }
  //ejercicio 5
  else if (ejercicio === "5") {
    let j = parseFloat(prompt("Ingrese el primer número: "));
    let d = parseFloat(prompt("Ingrese el segundo número: "));
    if (j !== 0 && d !== 0) {
      let respuesta = j / d;
      resultado.innerHTML = "El cociente entre: " + j + " y " + d + " es " + respuesta;
    } else {
      resultado.innerHTML = "La división no es posible ya que alguno de los dos números es igual a cero";
    }
  }
  //ejercicio 6
  else if (ejercicio === "6") {
    let c = parseFloat(prompt("Ingrese el primer número: "));
    let v = parseFloat(prompt("Ingrese el segundo número: "));
    if (c < 0 || v < 0) {
      resultado.innerHTML = "La suma de los números es: " + (c + v);
    } else {
      resultado.innerHTML = "La multiplicación de los números es: " + (c * v);
    }
  }
  //ejercicio 7
  else if (ejercicio === "7") {
    let year = parseFloat(prompt("Ingrese un año: "));
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
      resultado.innerHTML = year + " es un año bisiesto";
    } else {
      resultado.innerHTML = year + " no es un año bisiesto";
    }
  } else {
    alert("Ejercicio inválido");
  }

  document.getElementById("formulario").style.display = "block";
}
// CICLOS
else if (opciones === "ciclos") {
  let resultado = document.getElementById("resultado");
  let ejercicio = prompt("Elija un ejercicio:\n1. Múltiplos de 3 del 1 al 100\n2. Números impares del 0 al 100\n3. Números pares del 1 al 100\n4. Cuadrados de los números del 1 al 30\n5. Suma de los cuadrados de los 100 primeros números naturales\n6. Secuencia ascendente de dos numeros\n7. Suma de números mientras no sea cero");

  //ejercicio 1
  if(ejercicio === "1") {
    let resultadoHTML = "";
    for (let i = 3; i < 101; i += 3) {
      resultadoHTML += i + "<br>";
    }
    resultado.innerHTML = resultadoHTML;
  }
  //ejercicio 2
  else if(ejercicio === "2") {
    let resultadoHTML = "";
    for (let i = 1; i < 101; i += 2) {
      resultadoHTML += i + "<br>";
      }
      resultado.innerHTML = resultadoHTML;
    }
  //ejercicio 3
  else if(ejercicio === "3") {
    let resultadoHTML = "";
    for (let i = 2; i < 101; i +=2) {
      resultadoHTML += i + "<br>";
      }
      resultado.innerHTML = resultadoHTML;
    }
  //ejercicio 4
  else if(ejercicio === "4") {
    let resultadoHTML = "";
    for (let i = 1; i < 31; i++) {
      resultadoHTML += "El cuadrado de " + i + " es: " + (i * i) + "<br>";
    }
    resultado.innerHTML = resultadoHTML;
  }
  //ejercicio 5
  else if(ejercicio === "5") {
    let resultadoHTML = "";
    let suma = 0; 
    for (let i = 1; i <= 100; i++) {
      suma += i * i; 
    }
    resultadoHTML = "La suma de los cuadrados de los cien primeros números naturales es: " + suma;
    resultado.innerHTML = resultadoHTML;
  }
  //ejercicio 6
  else if(ejercicio === "6") {
    let o = parseFloat(prompt("Ingrese un número: "));
    let q = parseFloat(prompt("Ingrese un número (este debe ser mayor que el anterior): "));
    let resultadoHTML = "Los números naturales comprendidos entre " + o + " y " + q + " en secuencia ascendente son: ";
    for (let i = o; i <= q; i++) {
      resultadoHTML += i + "<br> ";
    }  
    resultado.innerHTML = resultadoHTML;
  
  } else {
    alert("Ejercicio inválido");
  }

  document.getElementById("formulario").style.display = "block";
}
}
