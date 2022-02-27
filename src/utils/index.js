export const def = function (obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}

export const parsePath = function (str) {
  let segments = str.split('.')

  return obj => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      const attr = segments[i]
      obj = obj[attr]
    }
    return obj
  }
}
