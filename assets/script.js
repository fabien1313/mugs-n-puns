const QuestionOne = document.getElementById("myPelementQuestionOne");
const AnswerOne = document.getElementById("myPelementAnswerOne");
const QuestionTwo = document.getElementById('myPelementQuestionTwo');
const AnswerTwo = document.getElementById('myPelementAnswerTwo');
const QuestionThree = document.getElementById('myPelementQuestionThree');
const AnswerThree = document.getElementById('myPelementAnswerThree');
const QuestionFour = document.getElementById('myPelementQuestionFour');
const AnswerFour = document.getElementById('myPelementAnswerFour');
const QuestionFive = document.getElementById('myPelementQuestionFive');
const AnswerFive = document.getElementById('myPelementAnswerFive');
const qone = document.getElementById('qone');
const qtwo = document.getElementById('qtwo');
const qthree = document.getElementById('qthree');
const qfour = document.getElementById('qfour');
const qfive = document.getElementById('qfive');
const photo = document.getElementById('photo');


//Buttons
const jokeBtn = document.getElementById("search-jokebtn");





jokeBtn.addEventListener("click", function() {
fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart&amount=10')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        jokeBtn.addEventListener("click", function(e) {
          e.preventDefault()  
          if (data.jokes[0].setup == undefined) {
          QuestionOne.innerText = "There is no Jokes. Try again!";
          AnswerOne.innerText = "There is no punch line. Try again!"
          QuestionTwo.innerText = "There is no Jokes. Try again!";
          AnswerTwo.innerText = "There is no punch line. Try again!"
          QuestionThree.innerText = "There is no Jokes. Try again!";
          AnswerThree.innerText = "There is no punch line. Try again!"
          QuestionFour.innerText = "There is no Jokes. Try again!";
          AnswerFour.innerText = "There is no punch line. Try again!"
          QuestionFive.innerText = "There is no Jokes. Try again!";
          AnswerFive.innerText = "There is no punch line. Try again!"
          }else {
            QuestionOne.innerText = data.jokes[0].setup
            AnswerOne.innerText = data.jokes[0].delivery
            QuestionTwo.innerText = data.jokes[1].setup
            AnswerTwo.innerText = data.jokes[1].delivery
            QuestionThree.innerText = data.jokes[2].setup
            AnswerThree.innerText = data.jokes[2].delivery
            QuestionFour.innerText = data.jokes[3].setup
            AnswerFour.innerText = data.jokes[3].delivery
            QuestionFive.innerText = data.jokes[4].setup
            AnswerFive.innerText = data.jokes[4].delivery
            qone.classList.remove('hide');
            qtwo.classList.remove('hide');
            qthree.classList.remove('hide');
            qfour.classList.remove('hide');
            qfive.classList.remove('hide');
            photo.classList.remove('hide');
          }
          
          console.log(data);
        });

    });
});

function format(phoneString) {
  if (!phoneString || phoneString.length !== 10) return phoneString;

  const areaCode = phoneString.substring(0, 3);
  const second = phoneString.substring(3, 6);
  const third = phoneString.substring(6, 10);
  return `(${areaCode}) ${second}-${third}`;

}
function searchBreweries(event) {
  event.preventDefault();
  fetch('https://api.openbrewerydb.org/breweries?by_state=texas&per_page=20')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    const breweryElements = json.filter(brewery => brewery.name && brewery.phone && brewery.website_url).map(brewery => `<h2>${brewery.name}</h2><p>${format(brewery.phone)}</p><p>${brewery.website_url}</p>`);
    const breweryString = breweryElements.reduce( (acc, current) => acc + current, '')
    document.getElementById('brewry-list').innerHTML = breweryString;

  })
  .catch(e => console.log(e));
}