// Typewriter effect for welcome message

let count = 0;
let text = "Welcome, let's build something awesome!";
let speed = 75;
window.addEventListener('DOMContentLoaded', (event) => {
    function WelcomeTTypewriter(){
    if (count < text.length){
        document.getElementById('welcome_msg').innerHTML += text.charAt(count);
        count++;
        setTimeout(WelcomeTTypewriter, speed)
    }
}
WelcomeTTypewriter();
});

