// import MAGICK_WASM from '~/utils/imagemagick-wasm/dist/magick.wasm'
import React, { useEffect, useState } from 'react'
import {
  initializeImageMagick,
  Magick,
} from './imagemagick/index.js'

let IS_READY = false

export default function useImageMagick() {
  const [isReady, setIsReady] = useState(IS_READY)

  // https://stackoverflow.com/questions/22384014/xmlhttprequest-and-a-progress-bar

  useEffect(() => {
    if (IS_READY) {
      return
    }

    initializeImageMagick(
      new URL((`${window.location.protocol}//${window.location.host}` + '/magick.wasm') as string),
    ).then(() => {
      IS_READY = true
      setIsReady(true)
    })
  }, [])

  return isReady
}
