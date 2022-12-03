import scoreList from './scoreList.js';
import renderScores from './renderScore.js';
import fetchList from './fetchList.js';

// DOM elements
const refreshBtn = document.querySelector('.scoreboard__refresh-btn');

const refreshList = async () => {
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
};

export default refreshList;