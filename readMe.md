# Google Notes Viewer  

## Description  
Google Notes Viewer is a small web app I created to practice **Google Authentication** and **Async Fetching** in JavaScript.  

When a user logs in with Google, the app shows their profile info (name, email, and profile picture).  
After login, the app fetches notes from a public API and displays them.  
When the user logs out, everything is cleared.  

---

## Features  
- Google Login / Logout  
- Display user profile info (name, email, picture)  
- Fetch and display notes from API  
- Hide notes until user logs in  
- Simple logout flow  

---

## Why I Built This  
I built this app to learn:  
- How Google login works in a frontend app.  
- How to fetch data with `async/await`.  
- How to show/hide content in the DOM.  

---

## What I Achieved  
- Implemented Google OAuth with profile info.  
- Used fetch API to load notes only after login.  
- Practiced DOM manipulation with JavaScript.  
- Built a clean logout flow to reset state.  

---

## How to Run  
1. Clone the repo.  
2. Open `index.html` in your browser.  
3. Replace the Google Client ID with your own in the code.  
4. Login with Google → see profile + notes.  
5. Logout to reset.  

---

## API Used  
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for fake notes.  

---
