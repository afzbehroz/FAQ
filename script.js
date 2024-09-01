// A function that toggles the "active" class on the clicked section and collapses others
function toggle(e) {
  const clickedTitle = e.target;

  clickedTitle.classList.toggle("active");

  document.querySelectorAll(".title").forEach((title) => {
    if (title !== clickedTitle) {
      title.classList.remove("active");
    }
  });
}

// Select all title elements and add event listeners to them
const titleElements = document.querySelectorAll(".title");
titleElements.forEach((title) => {
  title.addEventListener("click", toggle);
});
