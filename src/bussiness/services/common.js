export const select = (index, data) => {
  if (data.length == 0) {
    return [index];
  } else {
    if (data.includes(index)) {
      const filter = data.filter(item => item != index);
      return filter;
    } else {
      return index;
    }
  }
};
