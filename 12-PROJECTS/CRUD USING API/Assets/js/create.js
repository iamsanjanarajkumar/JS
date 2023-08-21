let formId = document.getElementById('create-todo');
let fTodo = document.getElementById('todo');
let fCompleted = document.getElementById('completed');
let URL ='https://dummyjson.com';

//generating random user id
function genRanId(){
    return Math.floor(Math.random()*100);
}
//form submit handler function
formId.addEventListener('submit', async(event)=>{
    event.preventDefault();

    let data= {
        todo: fTodo.value,
        completed:fCompleted.value,
        userId: genRanId()
    };
    console.log('new todo',data);

    await fetch(`${URL}/todos/add`,{
        method: 'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json())
       .then(res => {
        alert("New Todo Data was added successfully");
        window.location.href="/12-PROJECTS/CRUD USING API/index.html";
       }).catch(err => alert(err.message));
})