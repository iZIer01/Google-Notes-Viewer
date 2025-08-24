# Google Notes Viewer  

## Intro  
I create this small app to test and learn **Google Authentication** + **Async Fetching** in JavaScript.  
When you login with Google, you see your profile info (name, email, picture). After that, the app fetch notes from API and show them. When you logout, everything clear.  

---

## Level 1 – Login With Google  

### Case Study  
First part of this app is the login. Without login, nothing show. Only the button. When you login, Google give back your profile details.  

### Goal  
- Show login button.  
- After login → show profile info (name, email, image).  
- Show logout button.  

### Steps  
- Add Google Identity script.  
- Put your client ID.  
- Initialize Google accounts login.  
- Handle callback → get user data.  

---

## Level 2 – Fetch Notes After Login  

### Case Study  
When user is inside (logged in), the app must bring notes from internet API. Without login, notes not load.  

### Goal  
- Fetch 5 notes from `https://jsonplaceholder.typicode.com/posts`.  
- Show notes (title + body) on screen.  
- Keep design simple.  

### Steps  
- Use `fetch(url)` and `await` JSON.  
- Loop through results.  
- Append note elements to DOM.  

---

## Level 3 – Logout Flow  

### Case Study  
User press logout → app reset. No profile info, no notes. Button come back.  

### Goal  
- Clear all notes.  
- Clear profile.  
- Show login button again.  

### Steps  
- Add logout button.  
- On click → clear DOM, reset state.  

---

## Level 4 – Optional Additions  

### Case Study  
I don’t like boring apps. Add extra.  

### Goal  
- Add **Fetch More Notes** button (load next 5).  
- Save user info inside `localStorage` → stay after refresh.  

### Steps  
- Create “Load More” button with click event.  
- Increase notes count.  
- Store and retrieve user profile from localStorage.  

---

## Visual Design  

