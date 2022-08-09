includeHTML();

// Modal
// ===========================

window.onload = function() {

    // Get the modal elements
    var modal = document.getElementById("portfolioModal");
    var span = document.getElementsByClassName("close")[0];

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('#image-grid .item');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
          modal.style.display = "flex";
        });

        // when the user clicks on the button, 
        button.onclick = function() {

          
          // Retrieve the modal content
          let modalTitleContent = getContent(button.id, '.title');
          let modalDescriptionContent = getContent(button.id, '.description');
          let modalImageContent = getContent(button.id, '.image-container');


          let modalTitle = document.querySelector('#portfolioModal .title');
          modalTitle.innerHTML = modalTitleContent;

          let modalDescription = document.querySelector('#portfolioModal .description');
          modalDescription.innerHTML = modalDescriptionContent;

          let modalImage = document.querySelector('#portfolioModal .image-container');
          modalImage.innerHTML = modalImageContent;

          // Open the modal
          modal.style.display = "flex";

        }


    });
    //When the user clicks on <span> (x), close the modal
     span.onclick = function() {
       modal.style.display = "none";
     }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}


function getContent(itemID, selector) {

  // Let's get the full selector name
  let valueID = '#' + itemID + ' ' + selector;

  // Get the value of the target selector
  let value = document.querySelector(valueID).innerHTML;

  // Return the content
  return(value);
}

