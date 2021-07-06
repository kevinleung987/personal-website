const lorem = (length: number): String => {
  const ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let output = "";

  let num = length;
  while (num > 0) {
    if (num >= ipsum.length) {
      output += ipsum;
      num -= ipsum.length;
    } else {
      output += ipsum.substring(0, num);
      num = 0;
    }
  }
  return output;
};
export default lorem;
