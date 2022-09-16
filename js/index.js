const profit = document.getElementById("profit");
const array = [44, 30, 24, 32, 35, 30, 40, 38, 15];
const challengeToken = "gvthuljp21da";
const total = [];

const ArrayChallenge = (arr) => {
  let max = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    const current = arr[i] - min;
    if (current > max) {
      max = current;
    }
  }

  const result = max + challengeToken;
  for (let k = 0; k < result.length; k++) {
    if (k % 3 == 0 && k !== 0) {
      total.push("_");
    }
    total.push(result[k]);
  }
  return total.join("");
};

profit.innerHTML = ArrayChallenge(array);
