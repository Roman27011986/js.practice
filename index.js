function rotateAndRemove(arr) {
  const arrRes = [];
  
  function fn1(params) {
    console.log(params);
    const arrReduce = params.reduce((acc, el1, i) => {
      acc.push(arr[i].shift());
      return acc;
    }, []);
    arrRes.push(arrReduce);
    if (arr[0].length) {
      fn1(arr);
    }
  }
  fn1(arr);

  function fn2(params) {
    const arrReduce = params.reduce((acc, el) => {
      const arr = [...el];
      const sortArr = arr.sort((a, b) => a - b);
      el.splice(el.indexOf(sortArr[0]), 1);
      el.splice(el.indexOf(sortArr[sortArr.length - 1]), 1);

      acc.push(el);

      return acc;
    }, []);
   
    fn1(arrReduce);
  }
  console.log(arrRes);
  fn2(arrRes);
}

console.log(
  rotateAndRemove([
    [3, 5, 8, 4, 2],
    [1, 9, 2, 3, 8],
    [4, 6, 7, 2, 2],
    [7, 5, 5, 5, 5],
    [6, 5, 3, 8, 1],
  ])
);
