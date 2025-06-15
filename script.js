const inputPanel = document.getElementById("input");
const listBox = document.getElementById("list");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
renderTasks(); // Initial rendering

// Add new task
function add() {
  const taskText = inputPanel.value.trim();
  if (taskText === "") {
    alert("You must add some task");
    return;
  }

  const task = { text: taskText, checked: false };
  tasks.push(task);
  saveTasks();
  renderTasks();
  inputPanel.value = "";
}

// Render all tasks to the DOM
function renderTasks() {
  listBox.innerHTML = ""; // Clear existing list
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.checked) li.classList.add("checked");

    const span = document.createElement("span");
    span.textContent = "delete";
    span.className = "material-symbols-outlined delete-btn";
    li.appendChild(span);

    listBox.appendChild(li);
  });
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Handle clicks for check and delete
listBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const taskText = e.target.firstChild.textContent.trim();
    tasks = tasks.map(task =>
      task.text === taskText ? { ...task, checked: !task.checked } : task
    );
    saveTasks();
    renderTasks();
  } else if (e.target.classList.contains("delete-btn")) {
    const taskText = e.target.parentElement.firstChild.textContent.trim();
    tasks = tasks.filter(task => task.text !== taskText);
    saveTasks();
    renderTasks();
  }
});

