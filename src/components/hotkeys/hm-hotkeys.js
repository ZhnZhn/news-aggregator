import { HAS_TOUCH_EVENTS } from '../has';

export const HAS_HOT_KEYS = !HAS_TOUCH_EVENTS
export const HOT_KEY_EVENT = 'keydown'

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
