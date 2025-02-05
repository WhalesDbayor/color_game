let targetColor;
let score = 0;

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function startNewGame() {
    targetColor = generateRandomColor();
    document.getElementById("colorBox").style.display = "none";
    document.getElementById("score").textContent = "0";
    score = 0;
    document.getElementById("gameStatus").textContent = "";
    updateColorOptions();
}

function updateColorOptions() {
    const options = document.querySelectorAll(".color-option");
    const randomIndex = Math.floor(Math.random() * options.length);

    options.forEach((btn, index) => {
        const color = generateRandomColor();
        btn.style.backgroundColor = color;
        btn.setAttribute("data-color", color);
        btn.onclick = () => handleGuess(color);
        if (index === randomIndex) {
            targetColor = color;
        }
    });
}

function handleGuess(selectedColor) {
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("colorBox").style.display = "block";

    if (selectedColor === targetColor) {
        document.getElementById("colorBox").classList.add("correct");
        document.getElementById("gameStatus").textContent = "Correct! 🥳🎉";
        score++;
        document.getElementById("score").textContent = score;
    } else {
        document.querySelector(`[data-color="${selectedColor}"]`).classList.add("wrong");
        document.getElementById("gameStatus").textContent = "Wrong, try again! 😞😞";
    }

    setTimeout(() => {
        document.getElementById("colorBox").style.display = "none";
        document.getElementById("colorBox").classList.remove("correct");
        document.querySelectorAll(".wrong").forEach(btn => btn.classList.remove("wrong"));
        updateColorOptions();
    }, 3000);
}

document.getElementById("newGameButton").addEventListener("click", startNewGame);
startNewGame();