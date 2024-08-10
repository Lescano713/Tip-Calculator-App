const inputs = document.querySelectorAll('input');
const buttonOption = document.querySelectorAll('button[type="button"]')
const reset = document.querySelector('button[type=reset]');
const sectionPeople = document.querySelector('.people-section');
const sectionBill = document.querySelector('.bill-section');

reset.addEventListener('click', e=>{
    removeStyle("active")
    showTotal("tip-amount", 0);
    showTotal("total-amount", 0);
    reset.classList.remove('available');
    sectionPeople.classList.remove('error');
    sectionBill.classList.remove('error');
});


function queryInput(id){
    const input = parseFloat(document.querySelector(`#${id}`).value);
    return isNaN(input) ? 0 : input;
}

function inputEvent(){
    inputs.forEach(input=>{
        input.addEventListener("input", uploadDiscount);
    })
}

function uploadDiscount(){
    const people = queryInput("people");
    const bill = queryInput("bill") || 0;
    const custom = queryInput("custom") || 0;
    const button = parseFloat(document.querySelector('button.active')?.value) || 0;
    const discount = custom > 0 ? custom : button;
    const tip = calculateTip(discount,bill);

    if(discount === custom){
        removeStyle('active');
    }

    if(people <= 0){
        showTotal("tip-amount", 0);
        showTotal("total-amount", 0);
        sectionPeople.classList.add('error');
    }else if(bill < 0){
        sectionBill.classList.add('error');
        sectionPeople.classList.remove('error');
    }else{
        sectionPeople.classList.remove('error');
        sectionBill.classList.remove('error');
        showTotal("tip-amount", tipPerPerson(tip,people));
        showTotal("total-amount", totalPerPerson(tip,bill,people));
        reset.classList.add("available");
    }
}

//add eventsListener to buttons
function buttonEvent(){
    buttonOption.forEach(button=>{
        button.addEventListener('click',e => {
            removeStyle("active");
            e.target.classList.add('active');
            document.querySelector('#custom').value = "";
            uploadDiscount()
        })
    })
}

function removeStyle(style){
    buttonOption.forEach(button =>{
        button.classList.remove(`${style}`);
    })
}

//function total tip
function calculateTip(percent,bill){
    return ((percent/ 100) * bill)
}
//function to calculate tip per person
function tipPerPerson(discount,people){
    return discount/people
}

//function to calculate the total amount per person
function totalPerPerson(tip,bill,people){
    return (bill + tip)/people
}

//function to show the total
function showTotal(id, value){
    const h1 = document.querySelector(`#${id}`);
    h1.textContent = `$${value.toFixed(2)}`;
}
inputEvent()
buttonEvent()

