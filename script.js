const texts  = [
    " CONECTAR",
    " RECONECTAR",
    " POSSIBILITAR"
   ]
let speed = 100;

const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts [textIndex].charAt (charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout (eraseText, 1000);
    }

}

function eraseText(){
    if (textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length    
        charcterIndex = 0;
        setTimeout(typeWriter,500);
    }
}
window.onload = typeWriter

const hamburg = document.querySelector('.hamburg');
  const cancel = document.querySelector('.cancel');
  const dropdown = document.querySelector('.dropdown');

  hamburg.addEventListener('click', () => {
    dropdown.style.transform = 'translateY(10vh)';
    hamburg.style.display = 'none';
    cancel.style.display = 'block';
  });

  cancel.addEventListener('click', () => {
    dropdown.style.transform = 'translateY(-500px)';
    hamburg.style.display = 'block';
    cancel.style.display = 'none';
  });