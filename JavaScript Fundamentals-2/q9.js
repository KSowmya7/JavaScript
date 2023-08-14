function uniqueCharactersCheck(username) {
  const charSet = new Set();
  for (const char of username) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
if (uniqueCharactersCheck("anurag")) {
  console.log("The input string contains unique characters.");
} else {
  console.log("The input string contains duplicate characters.");
}

