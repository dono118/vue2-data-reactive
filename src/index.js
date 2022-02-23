import observe from '@/observe'

let obj = {
  a: {
    c: {
      d: 1
    }
  },
  b: 2
}

observe(obj)
obj.a.c.d = 3
