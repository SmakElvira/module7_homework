const arr = {
  a: 1,
  b: 2,
  c: 3
}

const a = function (str, obj) {
   if (obj.hasOwnProperty(str)){
      console.log(true)
    } else {
      console.log(false)
    }
}

a('c', arr)