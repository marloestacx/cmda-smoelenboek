const links = document.querySelectorAll(".teacherLink");
const closes = document.querySelectorAll(".close");
const pop_ups = document.querySelectorAll(".pop-up");
console.log(pop_ups);

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.remove("hidden");  
    })
})

closes.forEach(close => {
    close.addEventListener("click", function(event) {
        event.preventDefault();
        pop_ups.forEach(pop_up => {
                pop_up.classList.add("hidden");
        })
    })
})

/* keyboard voor zoekveld */

const Keyboard = window.SimpleKeyboard.default;

const keyboardSimple = document.getElementById("keyboard");
const keyboardWrapper = document.getElementById("keyboardWrapper");
const keyboardBackground = document.getElementById("keyboard-bg");

console.log(keyboardWrapper);

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});


document.getElementById("zoek").addEventListener("click", (d) => {
    keyboardWrapper.style.display = "block";
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
