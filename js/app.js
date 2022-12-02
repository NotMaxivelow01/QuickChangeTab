const positif = document.getElementById('Pos');
const negatif = document.getElementById('Neg');
const neutral = document.getElementById('Neu');
const button = document.getElementById('button');
const input = document.getElementsByClassName('input')

let counter = input;

function On(btn) {
    btn.style.color = "black";
}

function Off(btn) {
    btn.style.color = "grey"
}

positif.addEventListener("click", () => {
    On(positif);
    Off(negatif);
    Off(neutral);
})

negatif.addEventListener("click", () => {
    On(negatif);
    Off(neutral);
    Off(positif);
})

neutral.addEventListener("click", () => {
    On(neutral);
    Off(negatif);
    Off(positif);
})

button.addEventListener('click', () => {
    if (counter == "1") {
        On(positif);
        Off(neutral);
        Off(negatif);
    } else if (counter == "2") {
        On(negatif);
        Off(positif);
        Off(neutral);
    } else if (counter == "3") {
        On(neutral);
        Off(negatif);
        Off(positif);
    } else if (counter !== "1" || counter !== "2" || counter !== "3") {
        alert('Index is not valid');
    }
})