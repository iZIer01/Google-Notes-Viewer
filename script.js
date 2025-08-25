const newNotes = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(resp => resp.json())
  .then(data => {
    newNotes.push(...data);
    randomNoteSelector();
  })
  .catch(() => console.log("Sorry, didn't manage to get data"));

function randomNoteSelector() {
  let noteCount = Math.floor(Math.random() * 5) + 1;
  const usedIndexes = new Set();

  while (usedIndexes.size < noteCount && usedIndexes.size < newNotes.length) {
    let randomIndex = Math.floor(Math.random() * newNotes.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      displayNote(newNotes[randomIndex]);
    }
  }
}

function displayNote(note) {
  const ul = document.querySelector(".noteContainer ul"); // safer selector
  const li = document.createElement("li");
  li.classList.add("noteDetails");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="detailSubContainer"> 
        <label class="title"></label>
        <h4 class="IDNum"></h4>
    </div>
    <p class="noteText"></p>
  `;

  const title = div.querySelector(".title");
  const idNum = div.querySelector(".IDNum");
  const noteText = div.querySelector(".noteText");

  title.innerText = note.title;
  idNum.innerText = `ID: ${note.id}`;
  noteText.innerText = note.body;

  li.appendChild(div);
  ul.appendChild(li);
}

// Google Sign-In
google.accounts.id.initialize({
  client_id: "YOUR_GOOGLE_CLIENT_ID_HERE",
  callback: handleCredentialResponse
});

function decodeJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  const userObject = decodeJwt(response.credential);

  document.getElementById("userInfo").innerHTML = `
    <p><b>Name:</b> ${userObject.name}</p>
    <p><b>Email:</b> ${userObject.email}</p>
    <img src="${userObject.picture}" alt="Profile Picture" />
  `;
}

document.getElementById("loginBtn").addEventListener("click", () => {
  google.accounts.id.prompt();
});
