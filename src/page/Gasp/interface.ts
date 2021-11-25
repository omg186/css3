import { CSSProperties } from 'react'

export interface PropsTimeLine extends CSSProperties {
  timeline: gsap.core.Timeline
  index: number
  rotation?: number
}
