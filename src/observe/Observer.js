/**
 * Observer: 数据监听器
 * 作用：将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
 */
import defineReactive from '@/common/defineReactive'
import arrayMethods from '@/common/array'
import { def } from '@/utils'
import observe from '@/observe'
import Dep from '@/dep'

export default class Observer {
  constructor(value) {
    // 每一个Observer的实例身上，都有一个Dep
    this.dep = new Dep()
    def(value, '__ob__', this, false)
    // console.log('我是Observer构造函数', value)
    // 检查它是数组还是对象
    if (Array.isArray(value)) {
      // 如果是数组，将这个数组的原型指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
      // 让这个数组变成可被侦测的
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  // 遍历value上的每一个属性，让每一个子属性都变成响应式的
  walk(value) {
    for (let k in value) {
      defineReactive(value, k)
    }
  }
  // 数组的特殊遍历
  observeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // 对每个元素进行observe
      observe(arr[i])
    }
  }
}
