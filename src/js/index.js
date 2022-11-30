import 'reset-css';
import '../scss/styles.scss';
import scoreList from './modules/scoreList.js';
import renderScores from './modules/renderScore.js';

const scores = [
  {
    user: 'Name',
    score: 100,
  },
  {
    user: 'Name',
    score: 20,
  },
  {
    user: 'Name',
    score: 50,
  },
  {
    user: 'Name',
    score: 78,
  },
  {
    user: 'Name',
    score: 125,
  },
  {
    user: 'Name',
    score: 77,
  },
  {
    user: 'Name',
    score: 42,
  },
];

renderScores(scoreList(scores));
