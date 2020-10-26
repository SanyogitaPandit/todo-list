import addTodo from "./addTodo";
import loadHome from "./home";

export default loadNavbar;

function onHome(e) {
}

function onNewProject(e) {

}

function onNewTodo(e) {
    const todoMod = document.getElementById('newPanel');
    todoMod.style.display = 'block';
    const close = document.getElementById('close');
    // When the user clicks anywhere outside of the modal, close it
    close.onclick = (event) => {
        todoMod.style.display = 'none';
    };

    const submit = document.getElementById('todoSubmit');
    submit.onclick = (event) => {

        // Inputs
  const titleInput = document.getElementById('title-input');
  const descInput = document.getElementById('desc-input');
  const lowPrioInput = document.getElementById('low-prio');  
  const medPrioInput = document.getElementById('med-prio');  
  const highPrioInput = document.getElementById('high-prio');  
  const noteInput = document.getElementById('note-input');
  const dueInput = document.getElementById('due-input');  

        
        // Grab selected priority
        const selectedPrio = [lowPrioInput, medPrioInput, highPrioInput]
            .filter((input) => input.checked === true);
        // Add todo with given inputs
        if (selectedPrio.length === 0) {
            selectedPrio.push(lowPrioInput);
        }

        addTodo(titleInput.value, descInput.value, selectedPrio[0].value,
            noteInput.value, dueInput.value);

        // Clean input fields
        titleInput.value = '';
        descInput.value = '';
        selectedPrio[0].checked = false;
        noteInput.value = '';
        dueInput.value = '';
        todoMod.style.display = 'none';        
    }
}

function loadNavbar() {
    let navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    let title = document.createElement("a");
    title.textContent = "The ToDo List";
    title.addEventListener("click", onHome);
    navbar.appendChild(title);

    let menubar = document.createElement("ul");
    let menuitem = document.createElement("li");
    menuitem.textContent = "New Project";
    menuitem.addEventListener("click", onNewProject);
    menubar.appendChild(menuitem);

    menuitem = document.createElement("li");
    menuitem.textContent = "New Task";
    menuitem.addEventListener("click", onNewTodo);
    menubar.appendChild(menuitem);

    navbar.appendChild(menubar);

    return navbar;
}