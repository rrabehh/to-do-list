const input = document.getElementById("todo-input");
const addtask = document.getElementById("add-todo");
const cleartask = document.getElementById("clear-all");
const list = document.getElementById("todo-container");

addtask.addEventListener("click",function(){
    const task = input.value.trim();
    if(task=== ""){
        alert("No Task Entered!");
        return;
    }
    const li = document.createElement("li");
    li.style.fontFamily="Arial, Helvetica, sans-serif";
    li.textContent = task + " ";
    list.appendChild(li);
    input.value="";

    const removebtn = document.createElement("button");
    removebtn.textContent="X";
    removebtn.style.background="black";
    removebtn.style.border="1px solid";
    removebtn.style.color="white";
    removebtn.style.borderRadius="4px";
    removebtn.style.width="20px";
    removebtn.style.height="20px";
    removebtn.style.fontSize="10px"
    removebtn.addEventListener("click",()=>{
        li.remove();
    })
    li.appendChild(removebtn);
});

cleartask.addEventListener("click",()=>{
    alert("Are you sure to clear all the task?");
    list.innerHTML=" ";
})








