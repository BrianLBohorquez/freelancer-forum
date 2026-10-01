/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function randoFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, randoFreelancer);

function getAvgRate(array) {
  let total = 0;
  for (const freelancer of array) {
    total = total + freelancer.rate;
  }
  return total / array.length;
}

const averageRate = getAvgRate(freelancers);
