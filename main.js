// base

const baseOfTasks = ['poklik', 'kiopl']

// pritn tasks


const printTasks = () => {
  const ul = document.querySelector('ul')
  ul.textContent = "";
  baseOfTasks.map(task => {
    const li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li)
  })
}

// dodawanie zadań

const input = document.querySelector('input')
const btn = document.querySelector('button')
const addTask = (e) => {
  e.preventDefault()
  baseOfTasks.push(input.value)
  printTasks()
  input.value = ""
}

btn.addEventListener('click', addTask)









// wywołania print task
printTasks()