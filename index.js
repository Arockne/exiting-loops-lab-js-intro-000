const breakOut = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
};