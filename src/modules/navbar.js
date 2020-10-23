export default loadNavbar;

function loadNavbar()
{
    let navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    let title = document.createElement("a");
    title.textContent = "The ToDo List";
    navbar.appendChild(title);

    let menubar = document.createElement("ul");
    let menuitem = document.createElement("li");
    menuitem.textContent = "New Project";
    menubar.appendChild(menuitem);

    menuitem = document.createElement("li");
    menuitem.textContent = "New Task";
    menubar.appendChild(menuitem);

    navbar.appendChild(menubar);

    return navbar;
}