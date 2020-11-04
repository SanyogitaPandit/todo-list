import addTodo from "./addTodo";
import addProject from "./addProject";

export default loadNavbar;

function onHome(e) {
}

function onNewProject(e) {
    addProject();
}

function onNewTodo(e) {
    addTodo();
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