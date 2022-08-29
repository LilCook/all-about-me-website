function btnclick(event) {
    event.target.textContent = !event.target.classList.contains('opened') ? 'Closed' : 'Opened'
    event.target.classList.toggle('opened')
  }
  
  // Adding individual listeners is inefficient, this would more correctly be done with event delegation
  document.addEventListener('DOMContentLoaded', function() {
    for(let button of document.getElementsByClassName('enc-btn'))
      button.addEventListener('click', btnclick);
  })