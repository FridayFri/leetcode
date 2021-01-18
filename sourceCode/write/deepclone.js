function deepCopy(obj) {
  // 创建一个新对象
  let result = {};
  let keys = Object.keys(obj),
    key = null,
    temp = null;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    temp = obj[key];
    // 如果字段的值也是一个对象则递归操作
    if (temp && typeof temp === "object") {
      result[key] = deepCopy(temp);
    } else {
      // 否则直接赋值给新对象
      result[key] = temp;
    }
  }
  return result;
}

function deepClone(obj) {
  let result = {};
  let keys = Object.keys(obj),
    key = null;
  temp = null;
  for (let i = 0; i < keys.length; i++) {
    key = key[i];
    temp = obj[key];
    if (temp && typeof temp === "object") {
      result[key] = deepClone(temp);
    } else {
      result[key] = temp;
    }
  }
  return result
}
