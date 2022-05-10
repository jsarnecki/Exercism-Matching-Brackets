
export const isPaired = (str) => {
  const brackets = {
    "(": {
      opposite: ")",
      closed: false
    },
    "{": {
      opposite: "}",
      closed: false
    },
    "[": {
      opposite: "]",
      closed: false
    },
    ")": {
      opposite: "(",
      closed: true
    },
    "}": {
      opposite: "{",
      closed: true
    },
    "]": {
      opposite: "[",
      closed: true
    } 
  }

  // Break string into indiv chars
  let braketArr = str.split("");
  const removedNonBrackets = [];

  for (let i = 0; i < braketArr.length; i++) {
    // If the string had more than brackets in it, go through and remove them
    if (brackets[braketArr[i]]) {
      removedNonBrackets.push(braketArr[i]);
    }
  }

  if (removedNonBrackets.length) {
    braketArr = removedNonBrackets;
  }

  if (braketArr[0] && brackets[braketArr[0]]?.closed) {
    // Checks if the first bracket is closed, auto false
    return false;
  }

  const closed = [];
  let count = 0;

  // When a bracket opens add the closing bracket to closed arr, unless it closes directly after
  for (let i = 0; i < braketArr.length; i++) {
    if (brackets[braketArr[i]]) {
      // Checks if bracket exists
      count++;
      let temp = brackets[braketArr[i]].opposite;
      // Temp holds on to the opposite of current bracket to compare with the next index
      if (!brackets[braketArr[i]].closed && temp !== braketArr[i + 1]) {
        // If this bracket is the opening bracket, and the next bracket is not its closing bracket
        closed.push(brackets[braketArr[i]].opposite);
      }
    }
  }
  
  // When brackets begin closing, they must close in the same order they were added to braketArray
  for (let i = 0; i < braketArr.length; i++) {
    if (brackets[braketArr[i]]?.closed) {
      // Find closed brackets
      let temp = brackets[braketArr[i]].opposite;
      // Temp holds on to the opposite of current bracket to compare with the next index
      if (temp !== braketArr[i - 1] && braketArr[i] === closed[0]) {
          // If this closed bracket was not open the index before && this closed bracket is next in line in closed arr
        closed.shift();
      }
    }
  }

  const isEven = count % 2 === 0;
  // Checks if there were even amount of brackets

  if (closed.length === 0 && isEven) {
    // To have matched up all the brackets, the closed arr should be empty
    return true;
  }
  return false;
};
