const main = document.querySelector('main');
const form = document.querySelector('.tip-calculator');
const inputs = document.querySelectorAll('input');
const buttonOption = document.querySelectorAll('button[type="button"]')

captureEvents()
buttonValue()

function addEvent(id){
    const input = document.querySelector(`#${id}`)
    input.addEventListener('input', e=> valor(input.value, input.id))
}

function captureEvents() {
    addEvent("bill");
    addEvent("custom");
    addEvent("people");
}

function valor(button,input,idInput) {
    const numValido = parseFloat(input);
    const buttonValido = parseInt(button);
    console.log(button);
    if (idInput === "bill"){
        console.log(descaunt(button,numValido));
    }else{
        console.log("otros inputs");
    }
}
function buttonValue(){
    buttonOption.forEach(button=>{
        button.addEventListener('click',e => valor(button.value))
    })
}



// funcion de descuento
function descaunt(percent,bill){
    const divide = (percent/ 100) * bill
    return divide;
}

//funcion para mostrar el total
function showTotal(id, value){
    const h1 = document.querySelector(`#${id}`);
    h1.textContent = value;
}

// function showBill(){
//     showTotal("tip-amount",descaunt())
// }

// console.log(buttonValue)

// inputValue()

// function inputValue(){
//     inputs.forEach(input=>{
//         input.addEventListener('input', e=>{
//             if(input.id === "bill"){
//                 const valor = input.value;
//                 console.log(valor - 5)
//             }else{
//                 console.log(input.value + " " + input.id);
//             }
//         });
//     })
// }


// console.log();
// en input bill agregar la cantidad del monto
//capturar bill
//en select tip capturar el evento de click en cada boton y guardad el valor
//hacer un if si el usuario ingresasu propio valor
//capturar el valor del input custom
//capturar el valor de people
//Todos lo valores capturados serán usados para ejecutar una operación
//la primera operación sacará la cuenta por persona de la propina
//la segunda operación saacará la cuenta del total + propina incluida, por persona.


//operación
//Se pide la cuenta, luego se le aplica el descuento
//se pide el número de personas y se divide la cuenta


//bton reset
//al inicio el boton estará bloqueado, luego cuando se haya iniciado una cuenta el botón tendrá el estilo de los demás botones

//validaciones
//solo números
//en people no puede ser ni 0 ni vacío, si no es así se lanza un mensaje de error con su estilo

