/**
 * 改写数组的7个方法：push,pop,shift,unshift,splice,sort,reverse
 */
import { def } from '@/utils'
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建arrayMethods对象
const arrayMethods = Object.create(arrayPrototype)

// 要被改写的7个数组方法
const sevenMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

sevenMethods.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新的方法
  def(
    arrayMethods,
    methodName,
    function () {
      // obj.g是数组，在第一次遍历obj的时候，已经给g属性数组添加了__ob__属性
      const ob = this.__ob__
      // push,unshift,splice这三个方法会插入新项，现在要把插入的新项也要被observe
      let insertedItems = []
      switch (methodName) {
        case 'push':
        case 'unshift':
          insertedItems = arguments
          break
        case 'splice':
          insertedItems = arguments.slice(2)
          break

        default:
          break
      }
      // 判断有新插入的项，如果有让其也变为响应式的
      if (insertedItems.length) {
        ob.observeArray(insertedItems)
      }
      // 恢复原来的功能
      // console.log('将要改写7个数组方法。。。')
      original.apply(this, arguments)
    },
    false
  )
})

export default arrayMethods
