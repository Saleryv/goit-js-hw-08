import  throttle from 'lodash.throttle'; 


const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
const formData = {};


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', event => {
formData[event.target.name] = event.target.value;
});

populateTextarea();


function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(JSON.stringify(formData));
}


function onTextareaInput() {
    const message = JSON.stringify(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, message);
}




function populateTextarea() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}