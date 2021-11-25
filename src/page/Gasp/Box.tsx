import { PropsWithChildren, useEffect, useRef } from 'react'
import { PropsTimeLine } from './interface'

function Box({ children, timeline, index }: PropsWithChildren<PropsTimeLine>) {
  const el = useRef<HTMLDivElement>(null)
  // add 'left 100px' animation to timeline
  useEffect(() => {
    timeline.to(el.current, { x: -100 }, index * 0.1)
  }, [timeline, index])

  return (
    <div className='box' ref={el}>
      {children}
    </div>
  )
}

export default Box
