// Grab Modal Related Items From DOM
var modalButton = document.getElementById("modal-btn");
var modalCloseButton = document.getElementById("modal-close-btn");
var modalBox = document.getElementById("modal-box");

modalButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalBox.classList.remove("hide");
  modalBox.classList.add("show");
});

modalCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalBox.classList.remove("show");
  modalBox.classList.add("hide");
});

modalBox.addEventListener("blur", (e) => {
  e.preventDefault();
  modalBox.classList.remove("show");
  modalBox.classList.add("hide");
});
