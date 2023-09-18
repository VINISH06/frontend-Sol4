document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const rate = document.getElementById("rate");
  const container1 = document.querySelector(".container");
  const container2 = document.querySelector(".container2");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedRating = document.querySelector(
      'input[name="myRadio"]:checked'
    );

    if (selectedRating) {
      const ratingValue = selectedRating.value;
      rate.textContent = ratingValue;

      container1.style.display = "none";
      container2.style.display = "flex";
    }
  });
});
