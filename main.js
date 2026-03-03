let task = document.getElementById("task");
let addBtn = document.getElementById("addTask");
let taskList = document.getElementById("tasklist");
addBtn.addEventListener("click", () => {
  if (task.value === "") {
    alert("enter a task");
  } else {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "10px";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    li.textContent = task.value;

    li.appendChild(deleteBtn);
    taskList.append(li);
    li.classList.add("task-item");
    task.value = "";
  }
});
