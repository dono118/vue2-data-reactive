const defineReactive = (data, key, val) => {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`您正在访问${key}属性`)
      return val
    },
    set(newVal) {
      if (val === newVal) return
      val = newVal
      console.log(`您正在将${key}属性的值设置为：${newVal}`)
    }
  })
}

export default defineReactive
