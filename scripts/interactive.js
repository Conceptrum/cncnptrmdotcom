/* interactive.js - CNCPTRM Interactive Elements */

document.addEventListener("DOMContentLoaded", function() { // Dynamic title effect const title = document.querySelector("h1"); let originalText = title.innerText; let alteredText = "CN⚡CPTRM"; let state = false;

setInterval(() => {
    title.innerText = state ? originalText : alteredText;
    state = !state;
}, 2000);

// Background shift effect
document.body.addEventListener("mousemove", (event) => {
    let x = event.clientX / window.innerWidth * 100;
    let y = event.clientY / window.innerHeight * 100;
    document.body.style.backgroundPosition = `${x}% ${y}%`;
});

// Contact form response effect
const form = document.querySelector("#contact form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your thoughts have been acknowledged. Or have they?");
    form.reset();
});

});

