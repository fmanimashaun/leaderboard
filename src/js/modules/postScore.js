const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

const postScore = async (score) => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postScore;