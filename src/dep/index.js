let uid = 0
export default class Dep {
  constructor() {
    // console.log('我是Dep类的构造器')
    this.id = uid++
    // 定义一个数组，用于存储订阅者(Watcher)
    this.subs = []
  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }
  // 添加依赖
  depend() {
    // Dep.target就是一个自己指定的全局的位置
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  // 通知更新
  notify() {
    console.log('我是notify')
    // 浅克隆一份
    const subs = this.subs.slice()
    console.log('dep-notify-subs', subs)
    // 遍历
    for (let i = 0, len = subs.length; i < len; i++) {
      const ele = subs[i]
      ele.update()
    }
  }
}
