import { useEffect, useLayoutEffect } from 'react'

export default function Mounter({ onMount, onUnMount }) {
  useEffect(() => {
    onMount()
    return onUnMount
  }, [])
  return null
}
