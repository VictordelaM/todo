let inputText = document.getElementById("textInput")
let button = document.getElementById("addButton")
let output = document.getElementById("output")
let array = []


const refresh = () => {
    output.innerHTML = ""
    array.forEach(element =>{
        let index = 0
        output.innerHTML += `<div class="outputBox">
        <input type="checkbox" id="checkbox${index}">
        <label>${element.text}</label>
        <button onclick="remove()">x</button>
        </div>`
        index += 1 
    })
}

const check = () => {
    array.forEach(element => {
        let index = 0
        let checkbox = document.getElementById(`checkbox${index}`)
        console.log(checkbox);
        if (checkbox.checked){
            removeAll(element)
            console.log("check");
        }
        else {
            console.log(checkbox);
        }
    })
}

button.addEventListener("click", () =>{
    let object = {
        text : inputText.value,
        done : false,
    }
    array.push(object)
    console.log(array);
    refresh()
    check()
})




