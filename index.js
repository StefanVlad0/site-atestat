   window.onload = function () {
      var feluri=[document.getElementById('Pizza'),
      document.getElementById('Paste'),
      document.getElementById('Ciorbe'),
      document.getElementById('Gratar'),
      document.getElementById('Garnituri'),
      document.getElementById('Salate'),
      document.getElementById('Deserturi'),
      document.getElementById('Bauturi')]

      var butoane=[document.getElementById('pizzaButton'),
      document.getElementById('pasteButton'),
      document.getElementById('ciorbeButton'),
      document.getElementById('gratarButton'),
      document.getElementById('garnituriButton'),
      document.getElementById('salateButton'),
      document.getElementById('deserturiButton'),
      document.getElementById('bauturiButton')]

      setInterval(highlight,100);

      function highlight() {
          let i;
          let j;
          
          for(i=0; i<feluri.length; i++)
          {
            const box = feluri[i].getBoundingClientRect();
              if(box.top < window.innerHeight-500 && box.bottom >= 0)
              {
                  for(j=0; j<feluri.length; j++)
                  {
                    butoane[j].style.backgroundColor = '#007099';
                  }
                  
                butoane[i].style.backgroundColor = '#27B3E6';
              }
                
          }
      }

  }
var scroll = window.requestAnimationFrame;
var elementsToShow = document.querySelectorAll('.element'); 

function loop() {
  let p;
    for(p=0; p<elementsToShow.length; p++){
      const box = elementsToShow[p].getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom >= 0) {
        elementsToShow[p].classList.add('is-visible');
      } 
    };
    scroll(loop);
}

loop();
