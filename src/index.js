document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    makeToDo(e.target.querySelector('#new-task-description').value)
    form.reset()
  })
});

function makeToDo(todo) {
  const li = document.createElement('li')
  const btn = document.createElement('button')
  btn.addEventListener('click', handleButton)
  btn.textContent = 'x'
  li.textContent = `${todo }`
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleButton(e) {
  e.target.parentNode.remove()
}