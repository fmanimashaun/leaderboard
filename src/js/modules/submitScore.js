import postScore from './postScore.js';

// DOM elements
const scoreForm = document.querySelector('.add__score-form');

const submitScore = async () => {
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
};

export default submitScore;