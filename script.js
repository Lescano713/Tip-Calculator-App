const main = document.querySelector('main');
const form = document.querySelector('.tip-calculator');
const inputs = document.querySelectorAll('input');
const buttonOption = document.querySelectorAll('button[type="button"]')
const reset = document.querySelector('button[type=reset]');

reset.addEventListener('click', e=>{
    buttonOption.forEach(button =>{
        button.classList.remove("active");
    })
    showTotal("tip-amount", 0);
    showTotal("total-amount", 0);
    reset.classList.remove('available');
});

function queryInput(id){
    const input = parseFloat(document.querySelector(`#${id}`).value);
    return input;
}

function inputEvent(){
    inputs.forEach(input=>{
        input.addEventListener("input", uploadDiscount);
        showTotal("tip-amount", 0);
        showTotal("total-amount", 0);
    })
}

function uploadDiscount(){
    const people = queryInput("people");
    const bill = queryInput("bill") || 0;
    const custom = queryInput("custom") || 0;
    const button = parseFloat(document.querySelector('button.active')?.value) || 0;
    const discount = custom > 0 ? custom : button;
    if(discount === custom){
        buttonOption.forEach(button =>{
            button.classList.remove("active");
        })
    }
    const tip = calculateDiscount(discount,bill);
    if(people === 0 || isNaN(people)){
        showTotal("tip-amount", 0);
        showTotal("total-amount", 0);
    }else{
        showTotal("tip-amount", personTip(tip,people));
        showTotal("total-amount", personTotal(tip,bill,people));
        reset.classList.add("available")
    }
}

function buttonEvent(){
    buttonOption.forEach(button=>{
        button.addEventListener('click',e => {
            document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            document.querySelector('#custom').value = "";
            uploadDiscount()
        })
    })
}

//function total descount
function calculateDiscount(percent,bill){
    const divide = ((percent/ 100) * bill)
    return divide;
}
//function descount per person
function personTip(discount,people){
    const divide = discount/people
    return divide;
}

//function to calculate the amount of total per person
function personTotal(tip,bill,people){
    return (bill + tip)/people
}

//function to show the total
function showTotal(id, value){
    const h1 = document.querySelector(`#${id}`);
    h1.textContent = `$${value.toFixed(2)}`;
}
inputEvent()
buttonEvent()





//bton reset
//al inicio el boton estará bloqueado, luego cuando se haya iniciado una cuenta el botón tendrá el estilo de los demás botones

//validaciones
//solo números
//en people no puede ser ni 0 ni vacío, si no es así se lanza un mensaje de error con su estilo

