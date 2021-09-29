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

function populate() {
  exampleTasks.sort((a,b) => (a.index > b.index ? 1 : 1));
  exampleTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="d-flex">
      <div>
        <input type="checkbox">${task.description}
      </div>
    </div>
    <hr>
    `;

    button.parentElement.insertBefore(li, button);
  });
}

window.addEventListener('load', () => {
  populate();
});
