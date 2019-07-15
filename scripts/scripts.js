document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
			 para.style.backgroundColor =  prompt("What color should the background be?");
     if (para.textContent = para.style.backgroundColor) {
						para.textContent = para.style.backgroundColor;
					} else {
						para.textContent = "Please Choose a Valid Color";
						para.style.backgroundColor = "red";
						para.style.color = "#fff";
						para.style.borderColor = "red";
						para.style.fontSize = "0.8em";
						para.style.border = "3px solid darkred";
						para.style.opacity = "0.5";
					}
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});
