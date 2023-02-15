export let hmHotKeys = Object.create(null)

export const addHotKey = (
  hotKey,
  onKeyDown
) => hmHotKeys
  && (hmHotKeys[hotKey] = onKeyDown)

export const removeHotKey = (
  hotKey
) => hmHotKeys
  && (hmHotKeys[hotKey] = void 0)

export const clearHotKeys = () => {
  hmHotKeys = null
}
