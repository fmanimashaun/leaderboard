const getScores = async (url) => {
  // get scores from API
  const response = await fetch(url);

  // parse response to JSON
  const data = await response.json();

  // add scores to local storage
  localStorage.setItem('score', JSON.stringify(data.result));
};

export default getScores;