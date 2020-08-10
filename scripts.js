const app  = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);



logo.src = 'logo.png';

var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //begin accessing json here
    var data = JSON.parse(this.response); // json is now parsed in the variable data

    if(request.status >= 200 && request.status < 400){
        data.forEach((movie) => {
            //create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');


            //create an h1 and set the text to content of the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set the text to the film's descriptio
            const p = document.createElement('p')
            p.textContent = movie.description.substring(0, 300) // limits chars to 300
            p.textContent = `${movie.description}...` //end with an ellipses

            // append the cards to the container element
            container.appendChild(card)
            
            // each card contains a h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
        });
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `not working sorry dude`
        app.appendChild(errorMessage)
    }};
    


request.send();

