const dismissButton = document.getElementById('dismiss');

dismissButton.addEventListener('click', () => {
  document.getElementsByClassName('main')[0].classList.remove('hide');
  document.getElementsByClassName('success')[0].classList.add('hide');
});
