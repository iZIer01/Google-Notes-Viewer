 const notes = []

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        notes.push(data)
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
    let randomNumber = Math.floor(Math.random()*100) 

    //selecting the notes

    for(let i = 1; i <= notes.length; i++){
        console.log(notes[0][randomNumber].userId)
    }

}

//display the notes
function displayNote(){

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
    title.innerText = "The Bible Introduction";
    idNum.innerText = "By: Joao nkunku"
    noteText.innerText = "For God who so loved this world,not only did He give up his son to die for our sin's but forgives us for them and loves us."

    // appending the following 
    li.appendChild(div)
    ul.appendChild(li)


}

displayNote()