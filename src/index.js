document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    makeTodo(e.target.querySelector("#new-task-description").value);
    form.reset();
  });
});

function makeTodo(todo) {
  if (!todo.trim()) return; // Prevent adding empty tasks

  const li = document.createElement("li"); // Use <li> instead of <p>
  const btn = document.createElement("button");

  btn.addEventListener("click", makebutton);
  btn.textContent = "x";

  li.textContent = `${todo} `;
  li.appendChild(btn);

  document.querySelector("#tasks").appendChild(li); // Ensure it appends to #tasks

 // console.log("Task Added:", document.querySelector("#tasks").innerHTML); // Debugging
}

function makebutton(e) {
  e.target.parentNode.remove();
}
