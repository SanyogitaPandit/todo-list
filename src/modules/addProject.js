import Project from "./project";

export default addProject;

function addProject(title) {
    const proj = new Project(title);
    proj.save();
}