
const randomJokeElement = document.querySelector('.random-joke')
const joke_api_url = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke(){
    const response = await fetch(joke_api_url); 
    const data = await response.json();

    const jokeBoxH1 = document.createElement('h1') 

    const setupSpan = document.createElement('span')
    setupSpan.setAttribute('class', 'setup')

    const punchlineSpan = document.createElement('span')
    punchlineSpan.setAttribute('class', 'punchline')

    
    const joke = data.setup + ' ' + data.punchline 
    jokeBoxH1.textContent = joke 
   

    
    document.body.appendChild(jokeBoxH1)
    jokeBoxH1.appendChild(randomJokeElement)
   

};

document.querySelector('#jokebutton').addEventListener('click',getJoke)
