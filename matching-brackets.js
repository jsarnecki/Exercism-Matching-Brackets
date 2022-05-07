
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
  const arr = str.split("");


  if (arr[0] && brackets[arr[0]].closed) {
    return false;
  }

  const closed = [];
  let count = 0;
  
  // Loop thru and keep track of open brackets, finding the closing pairs
  // When a bracket opens add the closing bracket to arr
  for (const b of arr) {
    if (brackets[b]) {
      count++;
      if (!brackets[b].closed) {
        closed.push(brackets[b].opposite);
        console.log("pushed", closed);
      }
    }
  }
  
  // When brackets begin closing, they must close in the same order they were added to array
  for (const b of arr) {
    if (brackets[b]) {
      if (brackets[b].closed && closed[0] === b) {
        console.log("to shift", closed);
        closed.shift();
      }
    }
  }

  let isEven = count % 2 === 0;

  console.log("closed after", closed);
  console.log("isEven", isEven);

  if (closed.length === 0 && isEven) {
    return true;
  }
  return false;
};
