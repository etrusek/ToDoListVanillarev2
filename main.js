// base

const baseOfTask = [
  { id: 1, text: 'Pierwsze zadanie abcde', complete: false },
  { id: 2, text: 'Drugie zadanie abcd', complete: false },
  { id: 3, text: 'Trzecie zadanie abc', complete: false },
  { id: 4, text: 'Czwarte zadanie ab', complete: false },
  { id: 5, text: 'Piąte zadanie a', complete: false },
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

//add tasks

const formAdd = document.querySelector('form.addTask');
const addTask = e => {
  e.preventDefault()
  const newTask = {
    id: baseOfTask.length,
    text: e.target[1].value,
    complete: false
  };
  e.target[1].value = "";
  baseOfTask.push(newTask);
  const filterValue = document.querySelector('input#filter').value;
  printTasks(filterValue);

}
formAdd.addEventListener('submit', addTask);


//First Print on site

printTasks()