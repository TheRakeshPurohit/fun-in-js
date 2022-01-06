// adding reverse array, second largest number and isSortedArray methods

let myArray = {};
myArray.length = 0;

const addElement = (value) => {
  myArray[myArray?.length ?? 0] = value;
  myArray.length++;
};

const deleteElement = () => {
  if (myArray?.length > 0) {
    delete myArray[myArray?.length - 1];
    myArray.length--;
  } else {
    throw Error(`Can't pop the empty array`);
  }
};

const maximumElement = () => {
  if (myArray?.length > 1) {
    let maxValue = myArray[0];
    for (let index = 1; index < myArray.length; index++) {
      if (myArray[index] > maxValue) {
        maxValue = myArray[index];
      }
    }
    console.log(maxValue, "is the maximum value!");
  } else {
    throw Error(`I need atleast two elements to find the maximum value`);
  }
};

const secondMaximumElement = () => {
  if (myArray?.length > 1) {
    let firstMax = myArray[0];
    let secondMax;
    for (let index = 1; index < myArray.length; index++) {
      if (myArray[index] > firstMax) {
        secondMax = firstMax;
        firstMax = myArray[index];
      }
      if (myArray[index] > secondMax && myArray[index] < firstMax) {
        secondMax = myArray[index];
      }
    }
    console.log(secondMax, "is the second largest value!");
  } else {
    throw Error(`I need atleast two elements to find the maximum value`);
  }
};

const checkIfArrayIsSorted = () => {
  if (myArray?.length > 1) {
    let isSorted = true;
    for (let index = 0; index < myArray.length; index++) {
      if (myArray[index] > myArray[index + 1]) {
        isSorted = false;
        break;
      }
    }
    if (isSorted) {
      console.log("Array is sorted!");
    } else {
      console.log("Array is not sorted!");
    }
  } else {
    throw Error(`I need atleast two elements to check if sorted or not.`);
  }
};

const printMeReverse = () => {
  if (myArray.length > 1) {
    let reverseArray = "[";
    for (let index = myArray.length - 1; index >= 0; index--) {
      reverseArray += ` ${myArray[index]} `;
    }
    reverseArray += "]";
    console.log("Reversed ==>", reverseArray);
  } else {
    throw Error("Add atleast 2 elements to reverse");
  }
};
const searchByIndex = (inputIndex) => {
  if (inputIndex >= 0 && inputIndex < myArray.length) {
    console.log("Value at", inputIndex, "index is", myArray[inputIndex]);
  } else {
    throw Error(`Array Out Of Bound!`);
  }
};

const searchByValue = (inputValue) => {
  if (myArray?.length > 1) {
    let recordIndex = null;
    for (let index = 0; index < myArray.length; index++) {
      if (myArray[index] === inputValue) {
        recordIndex = index;
        return;
      }
    }
    if (recordIndex) {
      console.log("Input value ", inputValue, "is at", recordIndex, "index.");
    } else {
      console.log("Your value is not here!");
    }
  } else {
    throw Error(`Empty Array. You can use pushElement function.`);
  }
};

myArray.pushElement = addElement;
myArray.popElement = deleteElement;
myArray.getMax = maximumElement;
myArray.getSecondLargestNumber = secondMaximumElement;
myArray.isSorted = checkIfArrayIsSorted;
myArray.searchByIndex = searchByIndex;
myArray.searchByValue = searchByValue;
myArray.printMeReverse = printMeReverse;

for (let index = 0; index < 7; index++) {
  const ranNum = Math.ceil(Math.random() * 100);
  myArray.pushElement(ranNum);
}

console.clear();
myArray.getMax();
myArray.searchByIndex(0);
myArray.searchByValue(0);
myArray.isSorted();
myArray.getSecondLargestNumber();
myArray.printMeReverse();
console.log("array => ", myArray);
