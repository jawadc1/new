// JavaScript to handle the button click event
document.getElementById('greetButton').addEventListener('click', function () {
  const messageElement = document.getElementById('message');
  messageElement.textContent = "Hello, thank you for visiting my website!";
  messageElement.style.color = "#4CAF50";
});
