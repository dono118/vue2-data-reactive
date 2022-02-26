import observe from '@/observe'

let obj = {
  a: {
    c: {
      d: 1
    }
  },
  b: 2,
  e: [3, 4]
}

observe(obj)
// obj.e.push(5)
obj.e.splice(1, 1, [5, 6])
console.log(obj.e)
