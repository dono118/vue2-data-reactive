import observe from '@/observe'
import Dep from '@/dep'

export default function defineReactive(data, key, val) {
  const dep = new Dep()
  if (arguments.length === 2) {
    val = data[key]
  }
  // 子元素要进行observe，至此形成了递归
  // 注意：这个递归不是函数自己调用自己，而是多个函数、类循环调用
  let childOb = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`您正在访问${key}属性`)
      // 如果现在处于依赖收集阶段
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
      }
      return val
    },
    set(newVal) {
      if (val === newVal) return
      val = newVal
      // 当设置了新值，这个新值也要被observe
      childOb = observe(newVal)
      console.log(`您正在将${key}属性的值设置为：${newVal}`)
      // 发布订阅模式，通知dep
      dep.notify()
    }
  })
}
