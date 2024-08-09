const main = document.querySelector('main');
const form = document.querySelector('.tip-calculator');
const inputs = document.querySelectorAll('input');
const buttonOption = document.querySelectorAll('button[type="button"]')


buttonValue()

function addEvent(id){
    const input = parseInt(document.querySelector(`#${id}`).value);
    return input
}

function buttonValue(){
    buttonOption.forEach(button=>{
        button.addEventListener('click',e => {
            const bill = addEvent("bill");
            const custom = addEvent("custom");
            const people = addEvent("people");
            const button = parseInt(e.target.value);
            const descaunt = personTip(button,bill,people);
            showTotal("tip-amount", descaunt);
            showTotal("total-amount", personTotal(descaunt,bill,people));
            // console.log(descaunt(button,bill))
        })
    })
}

//funcion descuento por persona
function personTip(percent,bill,people){
    const divide = ((percent/ 100) * bill)/people
    return divide;
}

//funcion de cuenta total dividida

function personTotal(descaunt,bill,people){
    return (descaunt + bill)/people
}

//funcion para mostrar el total
function showTotal(id, value){
    const h1 = document.querySelector(`#${id}`);
    h1.textContent = value;
}




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

