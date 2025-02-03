const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";
    
    const colorOptions = document.getElementById("colorOptions");
    colorOptions.innerHTML = "";
    
    colors.forEach(color => {
        const btn = document.createElement("button");
        btn.classList.add("color-option");
        btn.style.backgroundColor = color;
        btn.setAttribute("data-testid", "colorOption");
        btn.addEventListener("click", () => checkGuess(color));
        colorOptions.appendChild(btn);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").textContent = "Correct! 🎉";
        score++;
        document.getElementById("score").textContent = score;
    } else {
        document.getElementById("gameStatus").textContent = "Wrong! Try Again.";
    }
}

document.getElementById("newGameButton").addEventListener("click", startGame);

startGame();