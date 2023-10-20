const mailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('formSubmitBtn');

mailInput.addEventListener('input', toggleSubmitBtn);
messageInput.addEventListener('input', toggleSubmitBtn);

submitBtn.setAttribute('disabled', true);

function toggleSubmitBtn() {
    if (mailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true);
    }
}
