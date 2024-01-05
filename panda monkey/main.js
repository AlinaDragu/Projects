const panda = document.getElementById("panda")
const monkey = document.getElementById("monkey")

function movePanda() {
    panda.style.right = "200px"
    setTimeout(moveMonkey, 1000)
}

function moveMonkey() {
    monkey.style.left = "200px"
}

window.onload = movePanda