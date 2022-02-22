import defineReactive from './defineReactive'

let obj = {}

defineReactive(obj, 'a', 1)

console.log(obj.a)
obj.a = 2
console.log(obj.a)
