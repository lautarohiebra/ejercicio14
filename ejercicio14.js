function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  let string = str;
  return string;
}

devolverString("Hola");

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let resultadoSuma = x + y;
  console.log(resultadoSuma);
}

suma(2, 4);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resultadoResta = x - y;
  console.log(resultadoResta);
}

resta(5, 3);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let resultadoMult = x * y;
  console.log(resultadoMult);
}

multiplica(2, 5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultadoDiv = x / y;
  console.log(resultadoDiv);
}

divide(10, 2);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y) {
    console.log(true);
  } else {
    console.log(false);
  }
}

sonIguales(1, 1);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let string1 = str1;
  let length1 = string1.length;
  let string2 = str2;
  let length2 = string2.length;

  console.log(length1);
  console.log(length2);
  if (length1 == length2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

tienenMismaLongitud("hola", "hola");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    console.log(true);
  } else {
    console.log(false);
  }
}

menosQueNoventa(89);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}

mayorQueCincuenta(62);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto = x % y;
  console.log(resto);
}

obtenerResto(11, 2);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

esPar(6);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

esImpar(11);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = Math.pow(num, 2);
  console.log(cuadrado);
}

elevarAlCuadrado(4);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo = Math.pow(num, 3);
  console.log(cubo);
}

elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resultado = Math.pow(num, exponent);
  console.log(resultado);
}

elevar(2, 3);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let resultado = Math.round(num);
  console.log(resultado);
}

redondearNumero(2.6);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let resultado = Math.ceil(num);
  console.log(resultado);
}

redondearHaciaArriba(1.4);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let resultado = Math.random();
  console.log(resultado);
}

numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (numero > 0) {
    console.log("Es positivo");
  } else if (numero == 0) {
    console.log(false);
  } else {
    console.log("Es negativo");
  }
}

esPositivo(2);
esPositivo(0);
esPositivo(-1);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hola mundo" pasaría a ser "hola mundo!"
  // Tu código:
  let string = str + "!";
  console.log(string);
}

agregarSimboloExclamacion("Hola mundo");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Maxi" -> "Soy Maxi"
  // Tu código:
  let string = "Soy" + " " + nombre + " " + apellido;
  console.log(string);
}

combinarNombres("Lautaro", "Hiebra");
combinarNombres("Brian", "Klehr");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Maxi" -> "Hola Maxi!"
  // Tu código:
  let string = `Hola ${nombre}, bienvenido de nuevo.`;
  console.log(string);
}

obtenerSaludo("Pedro");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let resultado = alto * ancho;
  console.log(`El área del rectángulo es de ${resultado} metros cuadrados.`);
}

obtenerAreaRectangulo(2, 4);

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let resultado = lado * 4;
  console.log(`El perimetro del cuadrado es de ${resultado} metros`);
}

retornarPerimetro(5);

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let resultado = (base * altura) / 2;
  console.log(`El área del tiángulo es de ${resultado} metros cuadrados.`);
}

areaDelTriangulo(5, 4);

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let resultado = euro * 1.2;
  console.log(`Total U$D: ${resultado}.`);
}
deEuroAdolar(1500);

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  let x = letra;

  if (
    x == "a","e","i","o","u","A","E","I","O","U"
  ) {
    console.log("Es vocal");
  } else if (x.length > 1) {
    console.log("Dato incorrecto");
  } else {
    console.log("Dato incorrecto");
  }
}

//El "else if" es innecesario debido a que la sentencia del else es similar, sin embargo se dejará por temas de consigna.

esVocal("e");
