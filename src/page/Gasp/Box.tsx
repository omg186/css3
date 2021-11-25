import { PropsWithChildren, useEffect, useRef } from 'react'
import { PropsTimeLine } from './interface'
import styles from './Index.module.css'
function Box({ children, timeline, index }: PropsWithChildren<PropsTimeLine>) {
  const el = useRef<HTMLDivElement>(null)
  // add 'left 100px' animation to timeline
  useEffect(() => {
    timeline.to(el.current, { x: -100 }, index * 0.1)
  }, [timeline, index])

  return (
    <div className={`${styles.box} box rounded-3xl`} ref={el}>
      {children}
    </div>
  )
}

export default Box
