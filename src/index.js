import loadNavbar from './modules/navbar';
import loadHome from './modules/home';
import Project from './modules/project';

function pageLoad()
{    
    let projArr = JSON.parse(localStorage.getItem("MyProjects"));
    if(projArr == null)
    {
        projArr = [];
        projArr.push(new Project("MyToDos"));
        localStorage.setItem("MyProjects", JSON.stringify(projArr));
    }    

    const container = document.getElementById('container'); 
    container.appendChild(loadNavbar());

    const main = document.createElement('main');
    main.setAttribute("id", "main");
    container.appendChild(main);
    main.appendChild(loadHome());
}

pageLoad();