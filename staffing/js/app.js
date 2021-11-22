let openBtn = document.querySelector(".open-menu")
openBtn.addEventListener('click', ()=> {
  document.querySelector('.nav-mobile').classList.toggle('active')
  document.querySelector('.wrapper').classList.toggle('menu')
})
let menus = document.querySelectorAll(".mobile-ul-inner")
let id = ''
function menu(index){

  id = index
  document.querySelector(".mobile-ul").classList.add('left')
  menus[index - 1].classList.add('right')
}
function back(){
  document.querySelector(".mobile-ul").classList.remove('left')
  menus[id - 1].classList.remove('right')
}