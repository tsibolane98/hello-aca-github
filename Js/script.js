let toggle = false;

function togglePrint() {
  toggle = !toggle;
  const messageDisplay = document.getElementById("messageDisplay");
  if (toggle) {
    messageDisplay.textContent = "ACA just taught me about continuous integration and continuous deployment.";
  } else {
    messageDisplay.textContent = "";
  }
}
