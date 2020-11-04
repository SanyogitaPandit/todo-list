import Project from "./project";
import loadHome from "./home";

export default addProject;

function addProject() {
    const newProjPanel = document.getElementById('newProject');
    
    newProjPanel.style.display = 'block';
  const close = document.getElementById('closep');    
  close.onclick = (event) => {
    newProjPanel.style.display = 'none';
  };

  const submit = document.getElementById('projSubmit');
  submit.onclick = (event) => {

    const title = document.getElementById('proj-title');

    const proj = new Project(title.value);
    proj.save();

    title.value = "";
    newProjPanel.style.display = 'none';  
      
      const main = document.getElementById('main');
      main.removeChild(main.childNodes[0]);
      main.appendChild(loadHome());

  }    
}