import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import  Overlay from "~features/Overlay"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex items-center justify-center">
      <Overlay />
    </div>
  )
}

export default PlasmoOverlay
