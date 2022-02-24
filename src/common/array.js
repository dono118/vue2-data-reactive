/**
 * 改写数组的7个方法：push,pop,shift,unshift,splice,sort,reverse
 */
import {def} from '@/utils'
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建arrayMethods对象
const arrayMethods = Object.create(arrayPrototype)
console.log(arrayMethods)

// 要被改写的7个数组方法
const sevenMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

sevenMethods.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新的方法
  def(arrayMethods, methodName, function(this){
    // 方法体
  }, false)
})

export default arrayMethods