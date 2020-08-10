
const randomJokeElement = document.querySelector('.random-joke') // element that will hold the actual joke 
const joke_api_url = 'https://official-joke-api.appspot.com/random_joke'; // api url variable to fetch at later

async function getJoke(){
    const response = await fetch(joke_api_url); //getting api
    const data = await response.json();  // parsing data?

    randomJokeElement.innerHTML = '' // so after the function is recalled by pressing again the page will delete the previous element
    
    const jokeBoxH1 = document.createElement('h1') //the h1 with the joke
    
    const joke = data.setup + ' ' + data.punchline // variable to hold the joke content easier
    jokeBoxH1.textContent = joke // using that variable and changing the text content to the api data
   

    
    document.body.appendChild(randomJokeElement) //append the section that will hold joke to the document body
    randomJokeElement.appendChild(jokeBoxH1) //then append the h1 to the last element randomJokeElement
   

};

document.querySelector('#jokebutton').addEventListener('click',getJoke) // select the button and on click run the fucntion
