const notes = []
const newNotes = []

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        notes.push(data)
    })
    .then(()=>{
        notes.forEach(group=>{
            group.forEach(object=>{
                newNotes.push(object)   
                            
            })
        })
    })
    .then(()=>{
        randomNoteSelector()
        
    })
    .catch(()=>{
        console.log("Sorry didn't manage to get data")
    })

// Random note selector

function randomNoteSelector(){

    //Provide a random number
    let randomNumber = Math.floor(Math.random() * newNotes.length) + 1  

    //use the random number to select a note
    let selectedNote = newNotes[randomNumber]

    //Now deciding a random number of how many notes get displayed
    let repeatCount = Math.floor(Math.random() * 5) + 1    
    


    for(let i = 0; i <= repeatCount; i++){
        displayNote(selectedNote)
    }

}

//display the notes
function displayNote(newNotes){

    //create html element
    const ul = document.querySelector("ul")    
    const li = document.createElement("li");
        li.classList.add("noteDetails")
    const div = document.createElement("div")
        div.innerHTML = 
        `
        <div class="detailSubContainer"> 
            <label id="title"></label>
            <h4 id="IDNum"></h4>
        </div>
        <p class="noteText"></p>

        `
    // setting the variables to ID/class 
    const title = div.querySelector("#title")
    const idNum = div.querySelector("#IDNum")
    const noteText = div.querySelector(".noteText");
 
    // Passing value
    title.innerText = newNotes.title
    idNum.innerText = `ID:${newNotes.id}`
    noteText.innerText = newNotes.body
    // appending the following 
    li.appendChild(div)
    ul.appendChild(li)


}

