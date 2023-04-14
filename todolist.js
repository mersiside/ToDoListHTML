const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = input.value.trim();
    button.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

    input.value = "";
  }
});

list.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
});
