const scoreList = (list) => {
  if (list.length === 0) {
    return '<p class="scoreboard__score-item">Name: 100</p>';
  }
  return list.map((item) => `<p class="scoreboard__score-item">${item.user}: ${item.score}</p>`).join('');
};

export default scoreList;