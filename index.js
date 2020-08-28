document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  
  
  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value
    
    if(username === "") return;
    fetchJoke().then(jokeData => {
      const newJokeLi = document.createElement('li')
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${jokeData.joke}
      `
      jokeList.appendChild(newJokeLi)
      form.reset()
      
    })
  })
})