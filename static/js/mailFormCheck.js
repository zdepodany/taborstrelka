const mailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('formSubmitBtn');

mailInput.addEventListener('input', toggleSubmitBtn);
messageInput.addEventListener('input', toggleSubmitBtn);

function toggleSubmitBtn() {
    if (mailInput.ariaValueMax.trim() !== '' && messageInput.ariaValueMax.trim() !== '') {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true);
    }
}