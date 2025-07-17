
const hour = new Date().getHours();


let greetingText = "";

if (hour < 12) {
  greetingText = "Good morning!";
} else if (hour < 18) {
  greetingText = "Good afternoon!";
} else {
  greetingText = "Good evening!";
}


document.getElementById("greeting").textContent = greetingText;
