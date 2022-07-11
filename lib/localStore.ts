export function getStore <T> (
  key: string,
  initial: T[] = []
) {
  const storageValue = window.localStorage.getItem(key)

  if (storageValue == null) {
    window.localStorage.setItem(key, JSON.stringify(initial))

    return initial
  }

  return JSON.parse(storageValue)
}

export function setStore <T> (
  key: string,
  callback: (item: T[]) => T[]
) {
  const store = getStore<T>(key)
  const value = callback(store)

  window.localStorage.setItem(key, JSON.stringify(value))

  return value
}
