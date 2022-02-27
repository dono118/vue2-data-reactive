import observe from '@/observe'
import Watcher from '@/watcher'

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
// obj.e.splice(1, 1, [5, 6])
new Watcher(obj, 'a.c.d', val => {
  console.log('*****', val)
})
obj.a.c.d = 5
console.log(obj)
