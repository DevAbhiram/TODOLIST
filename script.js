const inputPanel = document.getElementById("input");
const listBox =  document.getElementById("list");
function add() {
  const task = inputPanel.value.trim();

  if (task === "") {
    alert("You must add some task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <span class="material-symbols-outlined delete-btn">delete</span>
  `;

  listBox.appendChild(li);
  inputPanel.value = "";
}
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");

  list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove(); // Remove the <li>
    }
  });
});

