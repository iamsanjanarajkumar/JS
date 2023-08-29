let formId = document.getElementById('update-todo');
let fTodo = document.getElementById('todo');
let fCompleted = document.getElementById('completed');

 let URL  = "https://dummyjson.com";

 //generating random user id
function genRanId(){
    return Math.floor(Math.random()*100);
}

//to read params from the URL address
let urlIns  = new URLSearchParams(window.location.search);// create instance to read url address
const params = new Proxy(urlIns,{ // to separate the url parameters and get their values
    get: (searchParams ,prop ) => searchParams.get(prop)
});

console.log('params todoId =' , params.id);
console.log('params status= ', params.status);

//read single data from server
const readSingle = async (id) =>{
    await fetch (`${URL}/todos/${id}`,{
        method: 'GET',
        headers:{ "Content-Type": "application/json"}
    }).then(res => res.json())
    .then(res => {
        console.log('todo =',res);
        fTodo.value = res.todo;
        fCompleted.value = res.completed? "true": "false";
}).catch(err => console.log(err.message));
}

//update handler 
formId.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let status = fCompleted.value === "true"? true : false;
    let data= {
        todo: fTodo.value,
        completed:status,
        userId: genRanId()
    };
    console.log('Updated  todo',data);
  
    //patch request
    await fetch(`${URL}/todos/${params.id}`,{
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then (res=> res.json())
    .then(res => {
        window.alert("Todo updated successfully");
        window.location.href = "/12-PROJECTS/CRUD USING API/index.html";
    
    }).catch(err => console.log(err.message));
});



(function (){
    readSingle(params.id)
})();