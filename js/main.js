// styles of subscriptions blocks
qsa('.subscription').forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    qsa('.subscription').forEach(el => {
      el.classList.remove('sub-active')
    })
    item.classList.add('sub-active')
  })
});

let RotateY = 330//5
let RotateX = 40//15
//if (document.querySelector('.scene')) {
  let Scene = document.querySelector('.scene') //подключение сцены к js
//}

// функция движения сцены при нажатии стрелок
document.onkeydown = function(e){
  if (e.keyCode === 37) RotateY -=4
  else if (e.keyCode === 38) RotateX +=4
  else if (e.keyCode === 39) RotateY +=4
  else if (e.keyCode === 40) RotateX -=4
  Scene.style.transform = 'RotateY(' + RotateY + 'deg) ' + 'RotateX(' + RotateX + 'deg)'
}

// функция движения сцены при движении мышкой
document.onmousemove = function(){
  if (document.querySelector('.scene')) {
    Scene.style.transform = 'RotateY(' + (RotateY + event.clientX/50) + 'deg) ' + 'RotateX(' + (RotateX - event.clientY/50) + 'deg)'
  }
}
