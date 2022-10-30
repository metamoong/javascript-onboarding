function returnCount(money, coin) {
  console.log(money, coin, Math.floor(money / coin));
  return Math.floor(money / coin);
}

function problem5(money) {
  var answer = [];

  const coinArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (coin of coinArray) {
    if (money <= 0) {
      answer.push(0);
      continue;
    }

    answer.push(returnCount(money, coin));
    money = money - coin * answer[answer.length - 1];
  }

  return answer;
}

module.exports = problem5;
