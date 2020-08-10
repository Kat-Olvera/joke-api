// const app  = document.getElementById('root');
// const logo = document.createElement('img');
// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);



const randomJokeElement = document.querySelector('.random-joke')
const joke_api_url = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke(){
    const response = await fetch(joke_api_url); // getting and parsing the data
    const data = await response.json();

//    document.getElementById('setup-element').textContent = setup;  //grabbing the spans that will hold setup and punchline
//    document.getElementById('punch-element').textContent = punchline;
    
    const jokeBoxH1 = document.createElement('h1') //new elements that will appear after you press the button

    const setupSpan = document.createElement('span')
    setupSpan.setAttribute('class', 'setup')

    const punchlineSpan = document.createElement('span')
    punchlineSpan.setAttribute('class', 'punchline')

    
    const joke = data.setup + ' ' + data.punchline //adding the two values i need into a variable for ease of use
    jokeBoxH1.textContent = joke //making the h1 element i made the content of the api request
   

    //appending those elements to the html
    document.body.appendChild(jokeBoxH1)
    jokeBoxH1.appendChild(randomJokeElement)
   

};

document.querySelector('#jokebutton').addEventListener('click',getJoke)









// document.getElementById('setup-element').textContent = setup;
// document.getElementById('punch-element').textContent = punchline;