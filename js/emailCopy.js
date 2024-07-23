document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const emailText = document.querySelector("#emailCopy p").textContent;

  copyButton.addEventListener("click", () => {
    // Copy the email text to the clipboard
    navigator.clipboard.writeText(emailText).then(() => {
      // Change button text and color
      copyButton.textContent = "Copiado!";
      copyButton.style.backgroundColor = "#cfde73";

      // After 3 seconds, change it back to original state
      setTimeout(() => {
        copyButton.textContent = "Copiar";
        copyButton.style.backgroundColor = "";
      }, 3000);
    });
  });
});
