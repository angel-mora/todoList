import './style.css';

const button = document.querySelector('button');
class Todo {
  constructor(description, index, completed) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const exampleTasks = [
  new Todo('This is a heavy task.', 1, false),
  new Todo('This is a heavy task.', 2, false),
  new Todo('This is a heavy task.', 3, false)
]

const tasksIterator = (exampleTasks) => {
  exampleTasks.forEach(task => {
    // return li {task}
  });
}
