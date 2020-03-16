export default () => {
  function showMenu() {
    document.querySelector('.menu__overlay').style.display = 'block';
    document.querySelector('.menu__wrapper').classList.add('active');
    document.querySelector('html').style.overflowY = 'hidden';
  }

  function closeMenu() {
    document.querySelector('.menu__overlay').style.display = 'none';
    document.querySelector('.menu__wrapper').classList.remove('active');
    document.querySelector('html').style.overflowY = 'auto';
  }

  document.querySelector('.menu__button').addEventListener('click', showMenu);
  document.querySelector('.menu__close').addEventListener('click', closeMenu);

  window.addEventListener(`resize`, event => {
    if (document.documentElement.clientWidth > 1023) {
      closeMenu();
    }
  }, false);

  let overlay = document.querySelector('.menu__overlay');


  document.addEventListener('click', function(e){
    if (e.target == overlay) {
      closeMenu();
    }
  })
};
