function flatten(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
        result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
console.log(flatten(arr));
