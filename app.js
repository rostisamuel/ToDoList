const toDoAdd = document.querySelector("form")
const toDoList = document.querySelector("#list")

//Retrieve from storage.
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.Completed = savedTodos[i].completed ? true : false;
    if (newTodo.completed) {
      newTodo.style.textDecoration = "line-through";
      newTodo.style.color = "grey"
    }
    toDoList.appendChild(newTodo);
}
toDoAdd.addEventListener("submit", function(e){
    e.preventDefault();
    const newToDo = document.querySelector('#addItem');
    const toDoItem = document.createElement("li");

    //Code that's commented out here is to add the button for part one. I 

    // const addButton = document.createElement("button");
    toDoItem.innerText = newToDo.value + " ";
    toDoItem.completed = false
    // addButton.innerText = "X";

    // toDoItem.append(addButton);
    toDoList.append(toDoItem);
    toDoAdd.reset();

    //save to storage
    savedTodos.push({ task: toDoItem.innerText, completed: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})

toDoList.addEventListener("click", function(e){
    // if (e.target.tagName === "BUTTON"){
    //     e.target.parentElement.remove();
    // }
    // else if (e.target.tagName === "LI"){
        let clickedListItem = e.target;
        if (!clickedListItem.Completed) {
            clickedListItem.style.textDecoration = "line-through";
            clickedListItem.style.color = "grey";
            clickedListItem.Completed = true;
          } 
          else {
            clickedListItem.style.textDecoration = "none";
            clickedListItem.Completed = false;
            clickedListItem.style.color = "black";
          }
    // }
})