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
    for (let index = 0; index < myArray.length; index++) {
      if (myArray[index] > maxValue) {
        maxValue = myArray[index];
      }
    }
    console.log(maxValue, "is the maximum value!");
  } else {
    throw Error(`I need atleast two elements to find the maximum value`);
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
    const recordIndex = null;
    for (let index = 0; index < myArray.length; index++) {
      if (myArray[index] === inputValue) {
        recordIndex = index;
        return;
      }
    }
    if (recordIndex) {
      console.log(
        "Your input value",
        inputValue,
        "is at",
        recordIndex,
        "index"
      );
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
myArray.searchByIndex = searchByIndex;
myArray.searchByValue = searchByValue;

for (let index = 0; index < 7; index++) {
  myArray.pushElement(Math.random() * 10);
}

console.clear();
myArray.getMax();
myArray.searchByIndex(0);
myArray.searchByValue(0);
console.log("array => ", myArray);
