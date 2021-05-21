const breakout = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i += 1) {
    if (i === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
};