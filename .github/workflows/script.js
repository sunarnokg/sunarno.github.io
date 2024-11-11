document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addresInput = document.getElementById('addres');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm()) {
        form.reset();
        thankYouMessage.style.display = 'block';
        setTimeout(() => {
          thankYouMessage.style.display = 'none';
        }, 3000);
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Nama harus diisi');
        isValid = false;
      } else {
        hideError(nameInput);
      }
  
      if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Masukkan email yang valid');
        isValid = false;
      } else {
        hideError(emailInput);
      }
  
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Pesan harus diisi');
        isValid = false;
      } else {
        hideError(messageInput);
      }
  
      return isValid;
    }
  
    function showError(input, message) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
      input.classList.add('error');
    }
  
    function hideError(input) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');
      errorMessage.style.display = 'none';
      input.classList.remove('error');
    }
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    }
  });
  