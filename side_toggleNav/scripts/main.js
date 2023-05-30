//TOGGLE MENU
const toggleBtn = document.querySelector('.navToggle');
const body = document.body;


toggleBtn.addEventListener('click', _ => {
   body.classList.toggle('offScreenOpen');
})
