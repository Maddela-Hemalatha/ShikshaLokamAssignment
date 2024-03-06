const printShortestSubstrings = (s, x) => {
  const n = s.length;

  if(n < x) {
    console.log("not-found");
    return;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
      for (let j = i + x - 1; j < n; j++) {
          if (s[i] == s[j]) {
              if (j - i + 1 >= x) {
                  result.push(s.substring(i, j + 1));
                  break;
              }
          }
      }
  }

  if (result.length == 0) {
      console.log("not-found");
  } else {
      const shortestLen = Math.min(...result.map(str => str.length));
      const shortestSubstrings = result.filter(str => str.length == shortestLen);
      console.log(`x: ${x} Answer: ${shortestSubstrings.join(' ')}`);
  }
}

printShortestSubstrings("abccdbacca", 3);
printShortestSubstrings("abccdbacca", 4);
printShortestSubstrings("abccdbacca", 5);
printShortestSubstrings("abccdbacca", 6);
printShortestSubstrings("abccdbacca", 7);
printShortestSubstrings("abccdbacca", 8);
