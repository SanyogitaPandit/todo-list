export default deleteTodo;
import Todo from './todo';

function deleteTodo (todo) {
    let todoArr = JSON.parse(localStorage.getItem("MyToDos"));         
    let newArr = todoArr.filter(function(ele){ return ele.id != todo.id; });    
    localStorage.setItem("MyToDos", JSON.stringify(newArr));
}