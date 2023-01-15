const obj = {
  a: 1,
  b: 2,
  c: 3
}

const a = function () {
  const sum = Object.create(obj)
  sum.d = 4;
  sum.f = 5;
  for (let key in sum) {
    if (sum.hasOwnProperty(key)){
      console.log(key)
    }
  }
}

a()