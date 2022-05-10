
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
    // Checks if the first bracket is closed, auto false
    return false;
  }

  let closed = [];
  let count = 0;

  
  // Loop thru and keep track of open brackets, finding the closing pairs
  // When a bracket opens add the closing bracket to arr



  //the next bracket can not be the closing bracket of this current bracket

  for (let i = 0; i < arr.length; i++) {
    if (brackets[arr[i]]) {
      count++;
      let temp = brackets[arr[i]].opposite;
      // The next bracket can not close the current bracket, skip it
      if (!brackets[arr[i]].closed && temp !== arr[i + 1]) {
        
        closed.push(brackets[arr[i]].opposite);
      }
    }
  }
  
  // When brackets begin closing, they must close in the same order they were added to array
  // for (const b of arr) {

  //   if (brackets[b]) {

  //     if (brackets[b].closed && closed[0] === b) {

  //       closed.shift();
  //     }
  //   }
  // }


  for (let i = 0; i < arr.length; i++) {

    if (brackets[arr[i]].closed) {
      // find closed brackets
      let temp = brackets[arr[i]].opposite;

      if (temp !== arr[i - 1] && arr[i] === closed[0]) {
          // Check if bracket before was open
        closed.shift();
      }
    }
  }






  let isEven = count % 2 === 0;

  console.log("closed after", closed);
  // console.log("isEven", isEven);

  if (closed.length === 0 && isEven) {
    return true;
  }
  return false;
};
