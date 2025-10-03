var circles = document.querySelectorAll('.circle');
var scoreDisplay = document.getElementById('score');
var input = document.getElementById('input')
var resultTable = document.getElementById('results')
var hammer = document.getElementById("hammer");

var score = 0;

function startGame() {
    hammer.style.display = "block";
    document.body.style.cursor = "none";

    userName = input.value;
    score = 0;
    updateScore();
    nextCircle();

    document.addEventListener("mousemove", (e) => {
        hammer.style.left = e.pageX + "px";
        hammer.style.top = e.pageY + "px";
    });
    document.addEventListener("mousedown", () => {
        hammer.style.transform = "translate(-50%, -50%) rotate(20deg)";
    });
    document.addEventListener("mouseup", () => {
        hammer.style.transform = "translate(-50%, -50%) rotate(0deg)";
    });
    setTimeout(() => {
        circles.forEach(circle => {
            circle.classList.remove('active');
            circle.onclick = null;
        });
        resultTable.insertAdjacentHTML('beforeend', `<tr><td>${userName}</td><td>${score}</td></tr>`);
    }, 20000);

}

function nextCircle() {
    circles.forEach(circle => {
        circle.classList.remove('active');
        circle.onclick = null;
    });

    var randomIndex = Math.floor(Math.random() * circles.length);
    var activeCircle = circles[randomIndex];
    activeCircle.classList.add('active');

    activeCircle.onclick = () => {
        activeCircle.onclick = null;
        activeCircle.classList.remove('active');
        score++;
        updateScore();
        setTimeout(nextCircle, 300);
    };
}
function updateScore() {
    scoreDisplay.textContent = score;
}