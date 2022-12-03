import scoreList from './scoreList.js';
import renderScores from './renderScore.js';

const pageLoad = async () => {
  // add event listen to page reload event
  window.addEventListener('load', () => {
    // check if there is a local storage
    const scoreListArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];

    // call the renderScores function to render the scores
    renderScores(scoreList(scoreListArray));
  });
};

export default pageLoad;