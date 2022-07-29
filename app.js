const radioValues = [...document.querySelectorAll(".radioValue")];
const submit = document.querySelector(".submit");
const containers = [...document.querySelectorAll(".container")];
let value = 0;

radioValues.forEach((rvalue) => {
  rvalue.addEventListener("click", () => {
    value = rvalue.id;
  });
});

submit.addEventListener("click", () => {
  if (value != 0) {
    const rated = document.getElementById("add");

    containers[0].classList.add("hidden");
    containers[1].classList.add("show");
    rated.innerHTML = value;
  }
});
