const API_ID = 'U4zk4ejShEyXU8v5W6X4';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_ID}/scores/`;

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