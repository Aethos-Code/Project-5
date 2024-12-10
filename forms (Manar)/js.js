const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs(); // Kald funktionen til validering
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    // Brugernavn validation
    if(usernameValue === '') {
        setError(username, 'Brugernavn er påkrævet');
    } else {
        setSuccess(username);
    }

    // Email validation
    if(emailValue === '') {
        setError(email, 'Email er påkrævet');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Angiv en gyldig email adresse');
    } else {
        setSuccess(email);
    }
};



// javascript for menu
const dropdowns = document.querySelectorAll('.dropdown');

//en loop gennem alle dropdowns 
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    // addere eventlistere
    select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
    });

//Loop igennem hver option 
options.forEach(option => {
    //addere click event til options 
    option.addEventListener('click', () => {
        // ændre selected indre text til clicked option indre text
        selected.innerText = option.innerText;
        //addere clicked select styles til select element
        select.classList.remove('select-clicked');
        //addere the rotate stil til caret element
        caret.classList.remove('caret-rotate');
        //addere open stil til menu elementet
        menu.classList.remove('menu-open');
        //fjern alle active class fra alle option elementer 
        options.forEach(option => {
            option.classList.remove('active');
        });
        //addere active class til alle clicked option elementer 
        option.classList.add('active');
    });
  });
});