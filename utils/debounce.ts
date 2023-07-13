export default function debounce(limit, callback) {
    let timeoutId: number
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback, limit, args)
    }
  }
  