var btn = document.getElementById('addTodoBtn');
btn.addEventListener('click', ()=>{
	var text = document.getElementById('newTodoInput');
	var value = text.value;
    if(value!=""){
    // console.log(text);
	let ui = `<li>${value}</li>`;
	let list = document.getElementById('todoList');
	list.innerHTML+=ui;
	
	document.getElementById('newTodoInput').value = "";
    } else{
        console.log("invalid!!");
    }
	
	
});


