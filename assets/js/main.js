let inputText = document.getElementById("textInput")
let button = document.getElementById("addButton")
let output = document.getElementById("output")
let array = []
let index = 0

const refresh = () => {
    output.innerHTML = ""
    array.forEach(element =>{
        output.innerHTML += `<div id="outputBox${element.id}">
        <input type="checkbox" id="checkbox${element.id}" onchange = "check()">
        <label id="label${element.id}">${element.text}</label>
        <button id="${element.id}" onclick="remove()">x</button>
        </div>`
        index += 1 
    })
}

const check = () => {
    array.forEach(element => {
        let checkbox = document.getElementById(`checkbox${element.id}`)
        console.log(element);
        const checkSwitch = () => {
            console.log(element.id);
            if(checkbox.checked == true){
                console.log("check");
                document.querySelector(`#label${element.id}`).style.textDecoration = "line-through"
                element.done = true
            } else{
                document.querySelector(`#label${element.id}`).style.textDecoration = "none"
                element.done = false
            }
        }
        checkSwitch()
        
    })
}

const remove = () => {
    console.log(event.target.id);
    array.splice(event.target.id)
    document.getElementById(`outputBox${event.target.id}`).innerHTML = ""
}

button.addEventListener("click", () =>{
    let object = {
        id : index,
        text : inputText.value,
        done : false,
    }
    array.push(object)
    console.log(array);
    refresh()
})




