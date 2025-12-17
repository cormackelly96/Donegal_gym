document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.class-card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if(filter === 'all' || card.dataset.category === filter){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
