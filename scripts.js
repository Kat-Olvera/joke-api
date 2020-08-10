const app  = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);




const joke_api_url = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke(){
    
    const response = await fetch(joke_api_url);
    const data = await response.json();
    const { setup, punchline } = data;

   document.getElementById('setup-element').textContent = setup;
   document.getElementById('punch-element').textContent = punchline;
};




getJoke();







// const request = new XMLHttpRequest();

// // request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.open('GET', 'https://official-joke-api.appspot.com/random_joke', true);

// request.onload = function () {
//     //begin accessing json here
//     const data = JSON.parse(this.response); // json is now parsed in the variable data
    
//     if (request.status >= 200 && request.status < 400) {
         
//         for(let i = 0; i < data.length; i++){
//             console.log(data.textContent)
            
//         }
        
//       } else {
//         console.log('error')
//       }
    

// }
// request.send();