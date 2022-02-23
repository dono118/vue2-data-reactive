/**
 * Observer: 数据监听器
 * 作用：将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
 */
import defineReactive from '@/common/defineReactive'
import { def } from '@/utils'

export default class Observer {
  constructor(value) {
    def(value, '__ob__', this, false)
    // console.log('我是Observer构造函数', value)
    this.walk(value)
  }
  // 遍历value上的每一个属性，让每一个子属性都变成响应式的
  walk(value) {
    for (let k in value) {
      defineReactive(value, k)
    }
  }
}
