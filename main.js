//! Get all gallery items
const galleryItems = document.querySelectorAll(".gallery-item");

//! Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

//! Function to open modal
galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.querySelector("img").src;
  });
});

//! Function to close modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
