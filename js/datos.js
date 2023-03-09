const inputTextModa = document.querySelector('#moda');
const inputTextMediana = document.querySelector('#mediana');
const inputTextPromedio = document.querySelector('#promedio');
const txtModa = document.querySelector('.resultado-moda');
const txtMediana = document.querySelector('.resultado-mediana');
const txtPromedio = document.querySelector('.resultado-promedio');
const btnResultModa = document.querySelector('.btn-moda');
const btnResultMediana = document.querySelector('.btn-mediana');
const btnResultPromedio = document.querySelector('.btn-promedio');


btnResultModa.addEventListener('click', calculoModa);
btnResultMediana.addEventListener('click', calculoMedina);
btnResultPromedio.addEventListener('click', calculoPromedio);


function calculoModa() {
    let datos = inputTextModa.value;
    let arrDatos = datos.split(',');
    // console.log(arrDatos);
    // tranformToNumberList(arrDatos);
    let numberDatos = tranformToNumberList(arrDatos);
    // console.log(numberDatos);
    let resultModa = EstMath.calcularModa(numberDatos);
    txtModa.innerText = 'La moda es: ' + resultModa;
}

function calculoMedina() {
    let datos = inputTextMediana.value;
    let arrDatos = datos.split(',');
    // console.log(arrDatos);
    // tranformToNumberList(arrDatos);
    let numberDatos = tranformToNumberList(arrDatos);
    //console.log(numberDatos);
    let resultMediana = EstMath.calcularMediana(numberDatos);
    txtMediana.innerText = 'La mediana es: ' + resultMediana;
}

function calculoPromedio() {
    let datos = inputTextPromedio.value;
    let arrDatos = datos.split(',');
    // console.log(arrDatos);
    // tranformToNumberList(arrDatos);
    let numberDatos = tranformToNumberList(arrDatos);
    //console.log(numberDatos);
    let resultPromedio = EstMath.calcularPromedio(numberDatos);
    txtPromedio.innerText = 'El promedio es: ' + resultPromedio;
}

function tranformToNumberList(list) {
    let listaDatos = [];
    for (elemento of list) {
        listaDatos.push(Number(elemento));
    }
    return listaDatos;
}