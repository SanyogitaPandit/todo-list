import { id } from "date-fns/locale";
import Todo from "./todo";
import deleteTodo from "./deleteTodo";

export default loadHome;

function loadHome() {
    let home = document.createElement("section");
    let heading = document.createElement("h1")
    heading.textContent = "Upcoming ToDos";
    heading.style.marginBottom = "10px";

    home.appendChild(heading);

    /* const projList = JSON.parse(localStorage.getItem("MyProjects"));
     
     projList.forEach(proj => {
         let li = document.createElement("li");            
         li.textContent = proj.title;
         list.appendChild(li);
     }); */

    if (localStorage.getItem("MyToDos")) {
        let list = document.createElement("ul");
        list.setAttribute("id", "todoList");
        const todoList = JSON.parse(localStorage.getItem("MyToDos"));

        todoList.forEach(todo => {
            let li = document.createElement("li");

            let mdalHeader = document.createElement("div");
            mdalHeader.classList.add("modal-header");
            
            let title = document.createElement("h3");
            title.textContent = todo.title;
            mdalHeader.appendChild(title);

            let close = document.createElement("div");
            close.setAttribute("id", "close");
            close.textContent = "×";
            
            close.onclick = (event) => {
                deleteTodo(todo);                
                const main = document.getElementById('main');
                main.removeChild(main.childNodes[0]);
                main.appendChild(loadHome());
            };            

            mdalHeader.appendChild(close);
            li.appendChild(mdalHeader);

            let pr = document.createElement("p");
            pr.textContent = "Priority: " + todo.priority;
            li.appendChild(pr);
            if(todo.priority === "0"){
                li.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            }else if (todo.priority === "1") {
                li.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            } else {
                li.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            }

            let p = document.createElement("p");
            p.textContent = todo.description;
            li.appendChild(p);
            
            let due = document.createElement("p");
            due.textContent = "Due on: " + todo.due;
            li.appendChild(due);

            let note = document.createElement("p");
            note.textContent = todo.notes;
            li.appendChild(note);

            let proj = document.createElement("p");
            proj.textContent = "Proj: " + todo.proj;
            li.appendChild(proj);

            list.appendChild(li);    
        });

        home.appendChild(list);
    }
    else {
        let p = document.createElement("p")
        p.textContent = "No ToDOs!";
        home.appendChild(p);
    }

    return home;
}