// Grab Modal Related Items From DOM
var modalButton = document.getElementById("modal-btn");
var modalCloseButton = document.getElementById("modal-close-btn");
var modalBox = document.getElementById("modal-box");

// When View Rules button or Modal Opening button is clicked
modalButton.addEventListener("click", (e) => {
  e.preventDefault(); //Preventing default behaviour
  modalBox.classList.remove("hide"); //Remove hide class from modal
  modalBox.classList.add("show"); //Add show class from modal to show modal
});

// When Modal close button is clicked
modalCloseButton.addEventListener("click", (e) => {
  e.preventDefault(); //Preventing default behaviour
  modalBox.classList.remove("show"); //Remove show class from modal to show modal
  modalBox.classList.add("hide"); //Add hide class from modal
});
