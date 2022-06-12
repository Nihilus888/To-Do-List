const addBtn = document.querySelector('#todo-form button')
const thingsTodoContainer = document.querySelector('#list-things-todo ul')
const doneContainer = document.querySelector('#list-done-todo ul')

addBtn.onclick = function() {
    const input = document.querySelector('#new-todo')
    if (input.value === "") {
        return
    }

    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'pending')

    const listItemP = document.createElement('p')
    listItemP.innerText = input.value

    const completedBtn = document.createElement('button')
    completedBtn.setAttribute('type', 'button')
    completedBtn.innerText = "Completed"

    listItem.append(listItemP)
    listItem.append(completedBtn)

    thingsTodoContainer.append(listItem)

    input.value = ""

}

const listThingsDone = document.querySelector('#list-done-todo ul')
const listThingsTodo = document.querySelector('#list-things-todo')
listThingsTodo.onclick = function(event) {
    if (event.target.tagName === 'BUTTON') {
        const itemToMove = event.target.parentElement

        const doneItem = document.createElement('li')
        itemToMove.setAttribute('class', 'done')

        listThingsDone.append(itemToMove)
        event.target.innerText = "Remove"
        listThingsDone.append(itemToMove)
    }
}

listThingsDone.onclick = function(event) {
    if (event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove()
    }
}