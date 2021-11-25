import { PropsWithChildren, useRef, useEffect } from 'react'
import { PropsTimeLine } from './interface'

function Circle({
  children,
  timeline,
  index,
  rotate
}: PropsWithChildren<PropsTimeLine>) {
  const el = useRef<HTMLDivElement>(null)
  // add 'right 100px, rotate 360deg' animation to timeline
  useEffect(() => {
    timeline.to(el.current, { rotate: rotate, x: 100 }, index * 0.1)
  }, [timeline, rotate, index])

  return (
    <div className='circle' ref={el}>
      {children}
    </div>
  )
}

export default Circle
