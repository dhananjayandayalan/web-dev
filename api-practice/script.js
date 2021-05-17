//Select the Elements and store it in a variable
var quote = document.querySelector('.quotes');
var btn = document.querySelector('.btn');

//Check
// console.log(quote);
// console.log(btn);


//Fetch gives us promise
const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
        .then((res) => {
            const joke = res.value;
            // console.log(joke);
            quote.innerText = joke;
        });
};

btn.addEventListener('click', getJoke);

