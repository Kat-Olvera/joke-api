// const app  = document.getElementById('root');
// const logo = document.createElement('img');
// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);




const joke_api_url = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke(){
    // const app = document.getElementById('root')
    // getting and parsing the data
    const response = await fetch(joke_api_url);
    const data = await response.json();
    const { setup, punchline } = data;


    //grabbing the spans that will hold setup and punchline
//    document.getElementById('setup-element').textContent = setup;
//    document.getElementById('punch-element').textContent = punchline;

    //creating and setting classes to new elements that will appear after you press the button
    const jokeBoxH1 = document.createElement('h1')

    const setupSpan = document.createElement('span')
    setupSpan.setAttribute('class', 'setup')

    const punchlineSpan = document.createElement('span')
    punchlineSpan.setAttribute('class', 'punchline')

    //putting the api data into the elements i just made
    setupSpan.textContent = data.setup
    punchlineSpan.textContent = data.punchline

    //appending those elements to the html
    document.body.appendChild(jokeBoxH1)
    document.body.jokeBoxH1.appendChild(setupSpan)


};

document.querySelector('#jokebutton').addEventListener('click', getJoke())










// document.getElementById('setup-element').textContent = setup;
// document.getElementById('punch-element').textContent = punchline;