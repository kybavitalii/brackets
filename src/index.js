const config1 = [['(', ')']];
const config2 = [
  ['(', ')'],
  ['[', ']'],
];
const config3 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
];
const config4 = [['|', '|']];
const config5 = [
  ['(', ')'],
  ['|', '|'],
];
const config6 = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8'],
];
const config7 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['|', '|'],
];

module.exports = function check(str, bracketsConfig) {
  let arr = [...str];
  const configLength = bracketsConfig.length;
  let result = false;

  function checkRemItem(p) {
    return arr.splice(p, 2);
  }

  function checkLength() {
    if (arr.length === 0) {
      result = true;
      return result;
    } else {
      loop();
    }
  }

  function loop() {
    let anticyclic = 0;
    for (let k = 1; k < arr.length; k++) {
      let acc = arr[k - 1];
      let curr = arr[k];
      for (let i = 0; i < configLength; i++) {
        if (acc === bracketsConfig[i][0] && curr === bracketsConfig[i][1]) {
          let prewIndex = k - 1;
          checkRemItem(prewIndex);
          anticyclic++;
        }
      }
    }
    if (anticyclic === 0) {
      result = false;
      return result;
    } else {
      checkLength();
    }
  }

  checkLength();

  return result;
};
