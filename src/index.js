document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskDescription = e.target.querySelector("#new-task-description").value.trim();

    if (taskDescription !== "") {
      makeToDo(taskDescription);
      form.reset();
    }
  });
});

function makeToDo(todo) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.textContent = "x";
  btn.addEventListener("click", handleButton);

  li.textContent = todo + " "; // Adding space before button for better spacing
  li.appendChild(btn);

  document.querySelector("#tasks").appendChild(li);
}

function handleButton(e) {
  e.target.parentNode.remove();
}
