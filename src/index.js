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
obj.e.push(5)
console.log(obj.e)
