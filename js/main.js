
// Modal
// ===========================

// Get the modal elements
var modal = document.getElementById("portfolioModal");
var span = document.getElementsByClassName("close")[0];


// Get the button that opens the modal
//var btn = document.getElementById("image-grid");

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('#image-grid .item');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      modal.style.display = "flex";
    });
    // when the user clicks on the button, open the modal
    button.onclick = function() {
      modal.style.display = "flex";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}