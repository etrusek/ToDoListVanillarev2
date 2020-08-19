// base

const baseOfTask = [
  { id: 1, text: 'Piąte zadanie a', complete: false },
  { id: 2, text: 'Czwarte zadanie ab', complete: false },
  { id: 3, text: 'Trzecie zadanie abc', complete: false },
  { id: 4, text: 'Drugie zadanie abcd', complete: false },
  { id: 5, text: 'Pierwsze zadanie abcde', complete: false },
];

//Deleting Tasks

const removeTask = e => {
  const liToDelete = e.target.className;

  let id = 1;
  const newBaseOfTask = [...baseOfTask]
  // console.log("1", baseOfTask);
  // console.log("1", newBaseOfTask);
  baseOfTask.length = 0;
  // console.log("2", baseOfTask);
  // console.log("2", newBaseOfTask);
  newBaseOfTask.map(task => {
    if (`task_${task.id}` !== liToDelete) {
      console.log(task.id, liToDelete);
      baseOfTask.push({
        id,
        text: task.text,
        complete: task.complete
      })
      id++;
    };
    console.log(id);
  });
  console.log("ok3", baseOfTask);
  console.log("ok3", newBaseOfTask);
  const filterValue = document.querySelector('input#filter').value;
  printTasks(filterValue);
}

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
    const btn = document.createElement('button');
    li.textContent = task.text;
    btn.textContent = "Usuń";
    li.classList.add(`task_${task.id}`);
    btn.classList.add(`task_${task.id}`);
    btn.addEventListener('click', removeTask)
    li.appendChild(btn)
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