document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      form.classList.add('was-validated');
      message.textContent = 'Please correct the highlighted fields.';
      message.className = 'error';
      return;
    }

    const dateInput = form.date;
    const chosen = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0,0,0,0);
    if(isNaN(chosen.getTime()) || chosen < today){
      message.textContent = 'Please select today or a future date.';
      message.className = 'error';
      dateInput.classList.add('is-invalid');
      return;
    }

    message.textContent = 'Form validated — demo submission successful!';
    message.className = 'success';
    form.reset();
    form.classList.remove('was-validated');
    localStorage.removeItem('pulsefit_name');
  });
});
