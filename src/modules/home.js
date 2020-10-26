export default loadHome;

function loadHome()
{
    let home = document.createElement("section");
    let heading = document.createElement("h1")
    heading.textContent = "Upcoming ToDos";

    home.appendChild(heading);    
    let list = document.createElement("ul");
    const projList = JSON.parse(localStorage.getItem("myProjects"));
    
    projList.forEach(proj => {
        let li = document.createElement("li");            
        li.textContent = proj.title;
        list.appendChild(li);
    });

    if(localStorage.getItem("MyToDos"))
    {
        const todoList = JSON.parse(localStorage.getItem("MyToDos"));
        todoList.forEach(todo => {
            let li = document.createElement("li");

            li.textContent = todo.title;
            list.appendChild(li);
        });        
    }        
    else{
        let p = document.createElement("p")
        p.textContent = "No ToDOs!";
        home.appendChild(p);
    }
    home.appendChild(list);
    return home;
}