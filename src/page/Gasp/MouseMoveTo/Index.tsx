import { useEffect, useRef } from 'react'
import { Circle2 } from '../Circle'
function MouseMoveTo() {
  const circleRefs = useRef<HTMLDivElement[]>([])
  // reset on re-renders
  circleRefs.current = []
  useEffect(() => {
    circleRefs.current.forEach(ref => {
      //@ts-expect-error
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    })

    const onMove = ({ clientX, clientY }: PointerEvent) => {
      circleRefs.current.forEach(ref => {
        //@ts-expect-error
        ref.moveTo(clientX, clientY)
      })
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  const addCircleRef = (ref: HTMLDivElement) => {
    if (ref) {
      circleRefs.current.push(ref)
    }
  }
  return (
    <div className='app'>
      {/* <p>Move your mouse around</p> */}
      <Circle2 size='sm' ref={addCircleRef} delay={0} />
      <Circle2 size='md' ref={addCircleRef} delay={0.1} />
      <Circle2 size='lg' ref={addCircleRef} delay={0.2} />
    </div>
  )
}

export default MouseMoveTo
