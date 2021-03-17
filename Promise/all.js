function isPromise(val) {
  return typeof val.then === "function"; // (123).then => undefined
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []; // 存放 promise执行后的结果
    let index = 0; // 计数器，用来累计promise的已执行次数
    const processData = (key, data) => {
      arr[key] = data; // 不能使用数组的长度来计算
      /*
          if (arr.length == promises.length) {
            resolve(arr);  // [null, null , 1, 2] 由于Promise异步比较慢，所以还未返回
          }
        */
      if (++index === promises.length) {
        // 必须保证数组里的每一个
        resolve(arr);
      }
    };
    // 遍历数组依次拿到执行结果
    for (let i = 0; i < promises.length; i++) {
      let result = promises[i];
      if (isPromise(result)) {
        // 让里面的promise执行，取得成功后的结果
        // data promise执行后的返回结果
        result.then((data) => {
          // 处理数据，按照原数组的顺序依次输出
          processData(i, data);
        }, reject); // reject本事就是个函数 所以简写了
      } else {
        // 1 , 2
        processData(i, result);
      }
    }
  });
};

function ispromise(val) {
  return typeof val.then === "function";
}

Promise.all1 = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0;
    const processData = (key, data) => {
      arr[key] = data;
      if (++index === promises.length) {
        resolve(arr);
      }
    };
    for (let i = 0; i < promises.length; i++) {
      let result = promises[i];
      if (isPromise(result)) {
        result.then((data) => {
          processData(i, data);
        }, reject);
      } else {
        processData(i, data);
      }
    }
  });
};
