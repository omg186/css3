import {
  PropsWithChildren,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import { PropsTimeLine } from './interface'

import { gsap } from 'gsap'
import styles from './Index.module.css'
function Circle({
  children,
  timeline,
  index,
  rotation
}: PropsWithChildren<PropsTimeLine>) {
  const el = useRef<HTMLDivElement>(null)
  // add 'right 100px, rotate 360deg' animation to timeline
  useEffect(() => {
    timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1)
  }, [timeline, rotation, index])

  return (
    <div className={`${styles.box} circle rounded-full`} ref={el}>
      {children}
    </div>
  )
}

export default Circle

interface Props2 {
  delay: number
  size: 'sm' | 'md' | 'lg'
}
export const Circle2 = forwardRef(({ delay, size }: Props2, ref) => {
  const el = useRef<HTMLDivElement>(null)

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: number, y: number) {
          gsap.to(el.current, { x: x + 50, y: y + 10, delay })
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delay]
  )

  return (
    <div
      className={`${styles.box} ${styles.circle} ${styles[size]} rounded-full `}
      ref={el}
    ></div>
  )
})
