
document.addEventListener('DOMContentLoaded', function(){
  const bioButtons = document.querySelectorAll('.trainer-bio');
  bioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const bio = btn.dataset.bio;
      const modalTitle = document.getElementById('trainerModalLabel');
      const modalBody = document.getElementById('trainerModalBody');
      if(modalTitle && modalBody){
        modalTitle.textContent = name;
        modalBody.textContent = bio;
        const modalEl = document.getElementById('trainerModal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    });
  });

  const nameInput = document.getElementById('name');
  if(nameInput){
    const saved = localStorage.getItem('donegalgym_name');
    if(saved) nameInput.value = saved;
    nameInput.addEventListener('blur', () => {
      localStorage.setItem('donegalgym_name', nameInput.value);
    });
  }
});
