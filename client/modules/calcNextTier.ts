const calcNextTier = (score: number) => {
  let nextScore = 2;

  while (score >= nextScore) {
    console.log(score, nextScore);
    nextScore *= 2;
  }

  return nextScore - score;
};

export default calcNextTier;
