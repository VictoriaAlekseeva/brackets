module.exports = function check(str, bracketsConfig) {
  let bracketPairs = {};
  let closedBrackets = [];

  for (let item of bracketsConfig) {
    bracketPairs[item[1]] = item[0];
    closedBrackets.push(item[1]);
  };

  console.log(bracketPairs, closedBrackets)

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (closedBrackets.indexOf(current) > -1) {
      if (bracketPairs[current] != stack.pop()) return false;
     } else {
        stack.push(current);
      }
  }

  return (stack.length == 0);

  // your solution
}
