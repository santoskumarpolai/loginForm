const form = document.querySelector('#creat_account_form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confrimPasswordInput = document.querySelector('#confrim_password');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    
    validateForm();

});
function validateForm(){
    // username
    if(usernameInput.value.trim()==''){
      setError(usernameInput, 'Name can not be empty') ;

    }
    // email 
    // password 
    // confrim_password 
    function setError(element, errorMesage) {
        const parent = element.parentElament;
        parent.classList.add('error');
    }
}