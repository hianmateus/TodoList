const button = document.querySelector('.Button')
const input = document.querySelector('.InputTask')
const ListTasks = document.querySelector('.ListTask')

let mylisttask = []

function TakeInput(params) {

    if (input.value < 1) {
        alert("Sua Caixa esta vazia!");
    } else {

        mylisttask.push({
            task: input.value,
            checked: false
        })
        
        input.value = ''
    
    
        showtasks()
    }


}

function showtasks(params) {

    let newli = ''

    mylisttask.forEach((item, position) => {

        newli = newli + `<li class="Task ${item.checked && "done"}">
        <img src="./img/checked.png" alt="checked-png" onclick="check(${position})" >
        <p>${item.task}</p>
        <img src="./img/trash.png" alt="trash-png" onclick="deletetask(${position})">
    </li>`

    })

    ListTasks.innerHTML = newli

}

function check(position) {
    mylisttask[position].checked = !mylisttask[position].checked

    showtasks()
}

function deletetask(position) {
    mylisttask.splice(position, 1)

    showtasks()
}


button.addEventListener('click', TakeInput)