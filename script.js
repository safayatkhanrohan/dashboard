

const inputFileds = document.querySelectorAll("input");

inputFileds.forEach((input) => {
  const label = input.nextElementSibling;

  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      label.classList.add("typed");
    } else {
      label.classList.remove("typed");
    }
  });

});


