const postScore = (url, scoreObj) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(scoreObj),
}).then(() => {
  // get in local storage
  const scores = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : [];

  // add new score to local storage
  scores.push(scoreObj);

  // set updated scores back to local storage
  localStorage.setItem('score', JSON.stringify(scores));
});

export default postScore;
