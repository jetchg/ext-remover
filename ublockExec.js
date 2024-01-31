/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 15) {
      eval(prompt("Eval:"));
  }
})
