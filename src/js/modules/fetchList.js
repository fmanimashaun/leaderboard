const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

const fetchList = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchList;