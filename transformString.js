const isValidASCII = (newVal) => {
  if (newVal < 0 || newVal > 127) {
    return 83;
  } else {
    return newVal;
  }
};
const transformString = (s) => {
  const asciiValues = [];
  for (let i = 0; i < s.length; i++) {
    asciiValues.push(s.charCodeAt(i));
  }

  const changedIndices = [];
  for (let i = 0; i < asciiValues.length; i++) {
    const currAscii = asciiValues[i];
    if (currAscii % 2 == 0) {
      const nextIdx = i + 1;
      if (!changedIndices.includes(nextIdx)) {
        const newVal = asciiValues[nextIdx] + (currAscii % 7);
        asciiValues[nextIdx] = isValidASCII(newVal);
        changedIndices.push(nextIdx);
      }
    } else {
      const prevIdx = i - 1;
      if (!changedIndices.includes(prevIdx) && prevIdx >= 0) {
        const newVal = asciiValues[prevIdx] - (currAscii % 5);
        asciiValues[prevIdx] = isValidASCII(newVal);;
        changedIndices.push(prevIdx);
      }
    }
  }

  let result = "";
  for (let i = 0; i < asciiValues.length; i++) {
    result += String.fromCharCode(asciiValues[i]);
  }

  console.log(result);
};

transformString("sHQen}");
