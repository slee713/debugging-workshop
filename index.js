
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;
  //  
  // function fetchJoke(){
  //   fetch('https://icanhazdadjoke.com/', {
  //     method: "GET",
  //     headers: {
  //       "Accept": "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(jokeData => joke = jokeData.joke)
  // }
  
  // form.addEventListener('submit', () => {
  //   const username = document.getElementById('name-input').value
  //   const newJokeLi = document.createElement('li')
  //   if (username.lenth > 0) {
  //     let joke = fetchJoke()
  //     newJokeLi.innerHTML = `
  //     <span class="username">${username} says:</span> ${joke}
  //     `
  //     jokeList.appendChild(newJokeLi)
      
  //   }
  // })

  form.addEventListener("submit", ()=> {
    const username = document.getElementById("name-input").value
    config = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }
    fetch('https://icanhazdadjoke.com/', config)
    .then(resp => resp.json())
    .then(jokeData =>  postJoke(jokeData.joke))
    
    function postJoke(joke) {
      let li = document.createElement('li')
      li.innerText = `<span class="username"> ${username} says: </span> ${joke}`
      jokeList.append(li)
    }


  })

  


})
