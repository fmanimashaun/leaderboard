// import modules
import 'reset-css';
import '../scss/styles.scss';
import displayScore from './modules/displayScore.js';
import postScore from './modules/postScore.js';
import getScores from './modules/getScores.js';
import apiKey from './modules/config.js';

// call displayScore function when page loads
document.addEventListener('DOMContentLoaded', displayScore);

// listen to click event on page
document.addEventListener('click', (e) => {
  // Check if the click target is a form submit button or form element
  if (e.target.type === 'submit' || e.target.tagName === 'FORM') {
    // Prevent the default form submit action
    e.preventDefault();

    // Get the form element
    const form = e.target.tagName === 'FORM' ? e.target : e.target.form;

    // Check if the form is valid
    const nameInput = form.querySelector('#name');
    const scoreInput = form.querySelector('#score');

    // regex to check if input is a number
    const regex = /^\d+$/;

    if (nameInput.value === '' || nameInput.value === null) {
      // set the custom validity message
      nameInput.setCustomValidity("Please enter player's name");

      // display the custom validity message to the user
      nameInput.reportValidity();
    } else if (scoreInput.value === '' || scoreInput.value === null) {
      // set the custom validity message
      scoreInput.setCustomValidity("Please enter player's score");

      // display the custom validity message to the user
      scoreInput.reportValidity();
    } else if (!regex.test(scoreInput.value)) {
      // set the custom validity message
      scoreInput.setCustomValidity('Please enter number only');

      // display the custom validity message to the user
      scoreInput.reportValidity();
    } else {
      // get form data
      const formData = new FormData(form);

      // create score object
      const scoreObj = {
        user: formData.get('name'),
        score: formData.get('score'),
      };

      // post score to API
      const APL_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

      // call postScore function
      postScore(APL_URL, scoreObj)
        .then(() => form.reset())
        .then(() => displayScore());
    }
  } else if (e.target.id === 'refresh-btn') {
    // get scores from API
    const APL_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

    // call getScores function
    getScores(APL_URL).then(() => displayScore());
  }
});
