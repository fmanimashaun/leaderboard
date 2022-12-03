const API_ID = 'U4zk4ejShEyXU8v5W6X4';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_ID}/scores/`;

const fetchList = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchList;