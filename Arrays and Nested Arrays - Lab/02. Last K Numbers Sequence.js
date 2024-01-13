function solve(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    result.push(getSum());
  }

  return result

  function getSum() {
    let sum = 0;
    for (let i = result.length - 1, flag = 0; flag != k; i--) {
        if (i >= 0){
            sum += result[i];
            flag++;
        } else {
            break;
        }
    }
    return sum;
  }
}

solve(8, 2);
