const tooltipTriggerList = document.querySelectorAll('[data-bs-placement="bottom"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');
    const alertMessage = document.getElementById('alertMessage');
  
    alertButton.addEventListener('click', function() {
        if (alertMessage.style.display === 'none') {
            alertMessage.style.display = 'block';
        } else {
            alertMessage.style.display = 'none';
        }
    });
});


const myDate = document.getElementById('my-date');
myDate.innerHTML = `My date of birth:<br/>${moment('2003-09-01').format('ll')}`;


const alertTrue = document.getElementById('alertMessageCorrect'), alertFalse = document.getElementById('alertMessageIncorrect');
const userBirth = document.getElementById('user-birth');
const confirnBtn = document.getElementById('btn-confirn').addEventListener('click', ()=> {
    let date = userBirth.value;

    if (/(0[1-9]|1[1-9]|2[1-9]|3[0-1])\.(0[1-9]|1[0-2])\.([1-2]\d{3})/gm.test(date)) {
        alertTrue.innerHTML = `Ваша дата народження в іншому форматі:<br/> ${moment(date, 'DD.MM.YYYY').format('LL')}`
        alertTrue.style.display = 'block';
        alertFalse.style.display = 'none';
    } else {
        alertTrue.style.display = 'none';
        alertFalse.style.display = 'block';
    }
    date = '';
})

const resetBtn = document.getElementById('btn-reset').addEventListener('click', () => {
    userBirth.value = '';
    alertTrue.style.display = 'none';
    alertFalse.style.display = 'none';
});