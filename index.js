let wrapper = document.querySelector('.wrapper');
let form = wrapper.querySelectorAll('.form');
let submitInput = form[0].querySelector('input[type="submit"]');





function getDataForm(e){ 

    e.preventDefault();

    let formData = new FormData(form[0]);

    console.log(formData.get('inputQuestion'))


}

document.addEventListener('DOMContentLoaded', function(){

    submitInput.addEventListener('click', getDataForm, false);

}, false);