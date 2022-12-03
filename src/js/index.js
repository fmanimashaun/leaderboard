import 'reset-css';
import '../scss/styles.scss';
import scoreList from './modules/scoreList.js';
import renderScores from './modules/renderScore.js';
import fetchList from './modules/fetchList.js';
import postScore from './modules/postScore.js';

const scoreForm = document.querySelector('.add__score-form');
const refreshBtn = document.querySelector('.scoreboard__refresh-btn');

let scoreListArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];

renderScores(scoreList(scoreListArray));

refreshBtn.addEventListener('click', () => {
  fetchList().then((data) => {
    renderScores(scoreList(data.result));
    localStorage.setItem('scores', JSON.stringify(data.result));
  });
});

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = scoreForm.querySelector('#name').value;
  const userScore = scoreForm.querySelector('#score').value;
  const scoreObj = {
    user: userName,
    score: userScore,
  };
  postScore(scoreObj).then(() => {
    fetchList().then((data) => {
      localStorage.setItem('scores', JSON.stringify(data.result));
    }).then(() => {
      scoreListArray = JSON.parse(localStorage.getItem('scores'));
      renderScores(scoreList(scoreListArray));
    });
    scoreForm.reset();
  });
});