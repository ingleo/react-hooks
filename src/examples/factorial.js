console.log(">>>>>Factorial no memo>>>>>");
console.time("factorial-no-memo");
const factorialNoMemo = (n) => {
  if (n === 1) {
    console.log(`return 1`);
    return 1;
  } else {
    console.log(`return ${n} * factorial(${n} - 1)`);
    return n * factorialNoMemo(n - 1);
  }
};
const resultNoMemo = factorialNoMemo(10);
console.timeEnd("factorial-no-memo");
console.log(resultNoMemo);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("");
console.log("");
console.log(">>>>>>>Factorial-MEMO>>>>>>");
console.time("factorial-memo");
const memo = [, , 2, 6, 24, 120, 720];

const factorialMemo = (n) => {
  if (n === 1) {
    console.log(`return 1`);
    return 1;
  } else if (memo[n]) {
    console.log(
      `factorialMemo(${n + 1} - 1) está memoizado en memo[${n}] (${memo[n]})`
    );
  } else if (!memo[n]) {
    console.log(`memo[${n}] = ${n} * factorialMemo(${n} - 1)`);
    memo[n] = n * factorialMemo(n - 1);
  }
  return memo[n];
};
const resultMemo = factorialMemo(10);
console.timeEnd("factorial-memo");
console.log(resultMemo);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
