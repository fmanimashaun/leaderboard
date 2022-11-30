const scoreBoard = document.querySelector('.scoreboard__score');

const renderScores = (scores) => {
  scoreBoard.innerHTML = '';
  scoreBoard.insertAdjacentHTML('afterbegin', scores);
};

export default renderScores;