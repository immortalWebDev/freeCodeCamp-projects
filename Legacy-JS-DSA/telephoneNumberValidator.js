function telephoneCheck(str) {
  const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return validPhoneRegex.test(str);
}

telephoneCheck("555-555-5555");

/*
  
  ^ and $: These match the beginning and end of the string, ensuring the entire string matches the pattern.
  (1\s?)?:Matches the optional country code 1.
  \s? allows for an optional space after 1.
  (\(\d{3}\)|\d{3}):Matches the area code:
  \(\d{3}\): Matches the area code enclosed in parentheses, e.g., (555).
  \d{3}: Matches the area code without parentheses, e.g., 555.
  [\s-]?: Matches an optional space or hyphen between parts of the phone number.
  \d{3}: Matches the 3 digits after the area code.
  [\s-]?: Matches an optional space or hyphen again.
  \d{4}: Matches the last 4 digits of the phone number.
  
  */
