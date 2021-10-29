// Ejercicio 1
var e1 = n =>
{
    let c = n;
    for (i = 0; i < c; i++){
        console.log('welcome to this land')
    }
}
e1(5);


// Ejercicio 2
var e2 = (n,m) => 
{
    if (n > m){
        console.log(`${n} es mayor`)
    }else {
        console.log(`${m} es mayor`)
    }
}
e2(6,10)


// Ejercicio 3
var e3 = (n1,n2,n3) => {
    let p = (n1 + n2 + n3) / 3
    console.log(`El promedio es ${p}`);
}
e3(10,10,10)


// Ejercicio 4
// function e4 (){
//     let numero = parseInt(prompt('Ingrese su nota', ''),10);
//     let guardaNumero = numero;
//     let contador = 1;
//     while (numero != -1){
//         numero = parseInt(prompt('Ingrese otra nota', ''),10);
//         guardaNumero = guardaNumero + numero;
//         contador = contador + 1;
//     }
//     guardaNumero = guardaNumero / contador;
//     console.log(`El promedio de tus nota es ${guardaNumero}`);
// }
// e4()


// Ejercicio 5
var e5 = x => {
    Math.round(x);
    x = x + 1;
    return x;
}
e5(-2);


// Ejercicio 6
var e6 = x => {
    Math.round(x)
    x = x * 2;
    return x;
}
e6(5);


//Ejercicio 7
var e7 = x => {
    Math.round(x);
    x = x * x;
    return x;
}
e7(10)


//Ejercicio 8
function imprimirValores(num){
    console.log(`El siguiente de ${num} es ${e5(num)}.\nEl doble de ${num} es ${e6(num)}. \nEl cuadrado de ${num} es ${e7(num)}. `);
}
imprimirValores(105);


//Ejercio 9
function dobleDelSiguiente(num){
    num = e6(num);
    console.log(`El siguiente del doble es ${e5(num)}`)
}
dobleDelSiguiente(2);


//Ejercicio 10
function elDobleDelSiguienteAlCuadrado (num){
    num = e5(num)
    num = e6(num);
    console.log(`El doble del siguiente al cuadrado es ${e7(num)}`)
}
elDobleDelSiguienteAlCuadrado(4)


//Ejercicio 11
function areaCuadrado (x) {
    area = x * x
    console.log(`El area de un cuadrado que tiene sus lados de ${x}cm es de ${area}cm2`);
}
areaCuadrado(6);


//Ejercicio 12
function perimetroCuadrado (x) {
    perimetro = x * 4
    console.log(`El perimetro de un cuadrado que tiene sus lados de ${x}cm es de ${perimetro}cm`)
}
perimetroCuadrado(5);


//Ejercicio 13
function perimetroCirculo (x){
    perimetro = 3.14 * (x * 2);
    console.log(`El perimetro de un circulo que tiene radio ${x} es de ${perimetro}`);
}
perimetroCirculo(3);


//Ejercicio 14
function areaCirculo (x){
    area = 3.14 * (x*x)
    console.log(`El area de un circulo que tiene radio ${x}cm es de ${area}cm2`)
}
areaCirculo(9);


//Ejercicio 15
function diasMes(x) {
    switch(x){
        case 1:
            console.log('Enero tiene 31 dias')
            break;
        case 2:
            console.log('Febrero tiene 28 dias')
            break;
        case 3:
            console.log('Marzo tiene 31 dias')
            break;
        case 4:
            console.log('Abril tiene 30 dias')
            break;
        case 5:
            console.log('Mayo tiene 31 dias')
            break;
        case 6:
            console.log('Junio tiene 30 dias')
            break;
        case 7:
            console.log('Julio tiene 31 dias')
            break;
        case 8:
            console.log('Agosto tiene 31 dias')
            break;
        case 9:
            console.log('Septiembre tiene 30 dias;')
            break;
        case 10:
            console.log('Octubre tiene 31 dias')
        case 11:
            console.log('Noviembre tiene 30 dias')
        case 12:
            console.log('Diciembre tiene 31 dias')
    }  
}
diasMes(5)


//Ejercicio 16
function añoBisiesto(x){
    let estado = false
    if (x % 4 == 0){
        if (x % 100 == 0){
            if(x % 400 == 0){
                console.log(`${x} es bisiesto.`)
                estado = true;
                return estado;
            }else {
                console.log(`${x} no es bisiesto.`)
            }
        }else {
            console.log(`${x} es bisiesto`)
            estado = true;
            return estado;
        }
    }else {
        console.log(`${x} no es bisiesto`)
    }
}
añoBisiesto(2100)



//Ejercicio 17
function añoDias(año,mes){
    if (añoBisiesto(año) == true){
        if(mes == 2){
            console.log('Febrero tiene 29 dias')
        }else {
            diasMes(mes);
        }
    }else {
        diasMes(mes);
    }
}
añoDias(2100,2);


//Ejercicio 18
function ultimoDiaMes (año,mes){
    if(añoBisiesto(año) == true){
        if(mes == 2){
            console.log('El ultimo dia es 29')
        }else if (mes % 2 == 0){
            console.log('El ultimo dia es 30')
        }else {
            console.log('El ultimo dia es 31')
        }
    }else if (mes == 2){
        console.log('El ultimo dia es 28')
    }else if(mes % 2 == 0){
        console.log('El ultimo dia es 30')
    }else {
        console.log('El ultimo dia es 31')
    }
}
ultimoDiaMes(2100,1)


//Ejercicio 19
var edades = [10,13,15,13]
for (i in edades){
    console.log(`Los estudiantes tienen edades de ${edades[i]}`)
}


//Ejercicio 20
var edades_2 = [10,20,13,15,18]
for (i in edades_2){
    if(edades_2[i] % 2 == 0){
        console.log(`Las edades pares son ${edades_2[i]}`);
    }
}


//Edades 21
var numeros = [10,3,6,4]
const asc = function(a, b){
    return a - b;
}
function numeroChico(x) {
    numeros = x.sort(asc)
    console.log(`El numero mas bajo del array es ${numeros[0]}`)
}
numeroChico(numeros);


//Ejercicio 22
var numeros_2 = [20,3,1000,5]
const desc = function(a,b){
    return b - a
}
function numeroGrande(x){
    numeros_2 = x.sort(desc)
    console.log(`El numero mas grande del array es ${numeros_2[0]}`)
}
numeroGrande(numeros_2)


//Edades 23
var posiciones = [10,30,2,36,87,1,32]
function posicionesIndice (array,indice){
    console.log(array[indice])
}
posicionesIndice(posiciones, 5);


//Edades 24
var repeticiones = [10,10,3,5,3,2,1,5,10,5,3,8,9,6,9,35123,612,612,754,8654]
var xe = []
for (i = 0; i < repeticiones.length; i++){
    
    x = i - 1
    if(repeticiones[i] == repeticiones[x]){
        xe.push(repeticiones[i
        ]);
        console.log(i)
        console.log(x)
    }
}
console.log(xe)