// import modules
import 'reset-css';
import '../scss/styles.scss';
import scoreList from './modules/scoreList.js';
import renderScores from './modules/renderScore.js';
import fetchList from './modules/fetchList.js';
import postScore from './modules/postScore.js';

// DOM elements
const scoreForm = document.querySelector('.add__score-form');
const refreshBtn = document.querySelector('.scoreboard__refresh-btn');

// add listeners to the refresh button
refreshBtn.addEventListener('click', () => {
  // calling the api through the fetchList function
  fetchList().then((data) => {
    // calling the renderScores function to render the scores
    renderScores(scoreList(data.result));
    // update the local storage
    localStorage.setItem('scores', JSON.stringify(data.result));
  });
});

scoreForm.addEventListener('submit', (e) => {
  // prevent the default behaviour of the form
  e.preventDefault();

  // get the values from the form
  const userName = scoreForm.querySelector('#name').value;
  const userScore = scoreForm.querySelector('#score').value;

  // create a new object with the values
  const scoreObj = {
    user: userName,
    score: userScore,
  };

  // call the postScore function to post the score to api
  postScore(scoreObj);

  // clear the form
  scoreForm.reset();
});

// add event listen to page reload event
window.addEventListener('load', () => {
  // check if there is a local storage
  const scoreListArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];

  // call the renderScores function to render the scores
  renderScores(scoreList(scoreListArray));
});
