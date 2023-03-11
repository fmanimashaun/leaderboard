const postScore = (url, scoreObj) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreObj),
  });
};

export default postScore;