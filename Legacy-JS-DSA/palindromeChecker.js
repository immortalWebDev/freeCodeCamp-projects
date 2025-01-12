function palindrome(str) {
  const isAlphaNumeric = (char) => {
    char = char.toLowerCase();
    let isAlpha = char >= "a" && char <= "z";
    let isNumeric = char >= "0" && char <= "9";

    return isAlpha || isNumeric;
  };

  let start = 0,
    end = str.length - 1;

  while (start < end) {
    let moveStart = !isAlphaNumeric(str[start]);
    if (moveStart) {
      start++;
      continue;
    }

    let moveEnd = !isAlphaNumeric(str[end]);
    if (moveEnd) {
      end--;
      continue;
    }

    let endsEqual = str[start].toLowerCase() === str[end].toLowerCase();

    if (!endsEqual) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

palindrome("eye");
