import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../Index.module.css'
const RefTimeLinePage = () => {
  const [reversed, setReversed] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()
  const qchilder = gsap.utils.selector(domRef)
  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(qchilder('.box'), { rotate: 360 })
      .to(qchilder('.box1'), { x: 100 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(reversed, tl.current)
    tl.current?.reversed(reversed)
  }, [reversed])
  return (
    <div className='reftimeline flex flex-col gap-y-5' ref={domRef}>
      <button
        className={
          'p-3 bg-gradient-to-r from-red-600 to-blue-500 rounded-3xl text-white'
        }
        onClick={() => setReversed(!reversed)}
      >
        切换
      </button>
      <div className={`${styles.box} box  rounded-3xl`}>BOX</div>
      <div className={`${styles.box} box1 rounded-full`}>circle</div>
    </div>
  )
}

export default RefTimeLinePage
