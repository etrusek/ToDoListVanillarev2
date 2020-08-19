// base

const baseOfTask = [
  { id: 1, text: 'Pierwsze zadanie', complete: false },
  { id: 2, text: 'Drugie zadanie', complete: false }
];

// print li`s

const printTasks = (filterTasks) => {
  const ul = document.querySelector('ul');
  ul.textContent = '';
  let baseToPrint;
  if (filterTasks === undefined) {
    baseToPrint = baseOfTask;
  } else {

    baseToPrint = baseOfTask.filter(task => task.text.includes(filterTasks))
  }

  baseToPrint.map(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    ul.appendChild(li)
  })
}

//filtering thing
const filter = document.querySelector('input#filter');

const filterTasks = (e) => {
  e.preventDefault()
  const filterValue = e.target.value;
  printTasks(filterValue)
}

filter.addEventListener('input', filterTasks)

//First Print on site

printTasks()