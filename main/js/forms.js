const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


// Array for input elements
const inputs = [username, email];


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs(); // Kalder funktionen til validering
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

//bruger en loop til at validere hvert input i arrayet
const validateInputs = () => {
    inputs.forEach(input => {
        const inputValue = input.value.trim();

        if(input === username) {
            // Her valideres brugernavn 
            if(inputValue === '') {
                setError(input, 'Brugernavn er påkrævet');
            } else {
                setSuccess(input);
            }
        } else if(input === email) {
            // Her valideres Email
            if(inputValue === '') {
                setError(input, 'Email er påkrævet');
            } else if (!isValidEmail(inputValue)) {
                setError(input, 'Angiv en gyldig email adresse');
            } else {
                setSuccess(input);
            }
        }
    });
};









// Javascript for menu
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







const triggerImage = document.getElementById('calender');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-button');

// Show modal when clicking on the image
triggerImage.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Close modal when clicking outside of the modal content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});