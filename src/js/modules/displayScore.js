const displayScore = () => {
  // get scoreborad container dom element
  const scoreboardContainer = document.querySelector('.scoreboard__score');

  // get score from local storage
  const scores = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : [];

  if (scores.length === 0) {
    // create scoreboardcontainer innerHTML
    const scoreHtml = '<p class="scoreboard__score-item empty">No scores yet</p>';

    // set scoreboardcontainer innerHTML
    scoreboardContainer.innerHTML = scoreHtml;
  } else {
    // create scoreboardcontainer innerHTML
    const scoreHtml = scores.map((score) => `<p class="scoreboard__score-item">${score.user}: ${score.score}</p>`).join('');

    // set scoreboardcontainer innerHTML
    scoreboardContainer.innerHTML = scoreHtml;
  }
};

export default displayScore;