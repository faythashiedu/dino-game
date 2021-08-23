let character = document.querySelector("#character"); // character variable
let myBlock = document.querySelector("#block");  // block variable

function jump () {
    //adding the animation for the charater
    character.classList.add("animate");
   
    //revoming the animation
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500);
}

function gameOver() {
    let characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
        );

    let blockLeft = parseInt(
        window.getComputedStyle(myBlock).getPropertyValue("left")
    );

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        alert("You lost! Its game over");
        myBlock.style.animation = "none"
    }
}
// Run the number function every 50ms to check if there is a collision
setInterval (gameOver,50);
// Setup eventlistener for the document
document.addEventListener("keypress",jump); //makes the character jump