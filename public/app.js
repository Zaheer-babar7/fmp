// Get the modal
var modal = document.getElementById("myModal");

var modalImage = myModal.children[0].children[1].children[0].children[0];
var modalTitle = myModal.children[0].children[1].children[1].children[0];

// When the user clicks on the button, open the modal
function openModal(e) {
  var cardImage = e.parentNode.parentNode.children[0];
  var cardTitle = e.parentNode.nextElementSibling.children[0].innerHTML;
  modal.style.display = "block";
  modalTitle.innerHTML = cardTitle;
  modalImage.src = cardImage.src;
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
