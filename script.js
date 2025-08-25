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

function randomNoteSelector() {
    // Decide how many notes to show
    let noteCount = Math.floor(Math.random() * 5) + 1; 

    // Track which indexes have been used (to avoid duplicates)
    const usedIndexes = new Set();

    while (usedIndexes.size < noteCount && usedIndexes.size < newNotes.length) {
        let randomIndex = Math.floor(Math.random() * newNotes.length);

        // Only use this note if it's not already picked
        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            let selectedNote = newNotes[randomIndex];
            displayNote(selectedNote);
        }
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

