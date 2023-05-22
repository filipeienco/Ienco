function revelar() {
    var logo = document.querySelector('svg.logo');
    var txtdisplay = document.querySelector('p.txtdisplay');
    var nav = document.querySelector('div.nav');
    var circle = document.querySelector('.circle');
  
    txtdisplay.classList.toggle('visible');
    logo.classList.toggle('margin');
    nav.classList.toggle('color');
    circle.classList.toggle('color');
  }

  function acessar() {
    var projeto_01 = document.querySelector('div.projeto_01')
    var btn = document.querySelector('.btn')

    btn.classList.toggle('ativo');
  }