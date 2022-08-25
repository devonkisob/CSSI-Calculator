let display = document.getElementById('display');
let btn = Array.from(document.getElementsByClassName('buttons'));

btn.map( buttons=>{
  buttons.addEventListener('click', (e) =>{
    switch(e.target.innerText){
      case 'C':
        display.innerText = "";
        break;

      case '=':
        try{
          //eval function evaluates string text and returns the numeric value
          display.innerText = eval(display.innerText);
        } catch{
          display.innerText = "ERROR";
        }
        break;

      case '←':
        if(display.innerText){
          display.innerText = display.innerText.slice(0,-1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
        
    }
  });
});

//Reference taken from: https://github.com/javascriptacademy-stash/calculator/commit/c55cf8332c750b71f932d493853a7b501d3a8e11#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346