console.log("Hello World!")
alert("Bienvenido a JavaScript"); 
/*let nombre=prompt("cual es tu nombre?");
comsole.log(nombre)
console.log(parseInt(nombre))
console/log(typeof(nombre))*/
let numerouno=prompt("ingresar un numero");
let numerodos=prompt("ingresa otro numero");

let resultadoSuma=parseInt(numerouno)+ parseInt(numerodos);
        let resultadoResta=parseInt(numerouno)- parseInt(numerodos);
        let resultadoMulti= parseInt(numerouno)*parseInt(numerodos);
        let resultadodiv= parseInt(numerouno)/parseInt(numerodos);
        console.log(`el resultado de la suma es: ${resultadoSuma}`);
        console.log(`el resultado de la resta es: ${resultadoResta}`);
        console.log(`el resultado de la multiplicacion es: ${resultadoMulti}`);
        console.log(`el resultado de la division es: ${resultadodiv}`);