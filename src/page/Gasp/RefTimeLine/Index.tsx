import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../Index.module.css'
const RefTimeLinePage = () => {
  const [reversed, setReversed] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()
  const qchilder = gsap.utils.selector(domRef)
  // 只渲染第一次
  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(qchilder('.box'), { rotate: 360 })
      .to(qchilder('.box1'), { x: 100 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // reversed变化都会执行
  useEffect(() => {
    gsap.to(qchilder('.box2'), { rotation: '+=360', x: reversed ? 100 : 0 })
  }, [qchilder, reversed])
  useEffect(() => {
    tl.current?.reversed(reversed)
  }, [reversed])
  return (
    <div
      className='reftimeline flex flex-col gap-y-5  w-64 items-center'
      ref={domRef}
    >
      <button
        className={
          'p-3 min-w-full bg-gradient-to-r from-red-600 to-blue-500 rounded-3xl text-white'
        }
        onClick={() => setReversed(!reversed)}
      >
        切换
      </button>
      <div className={`${styles.box} box  rounded-3xl`}>BOX</div>
      <div className={`${styles.box} box1 rounded-full`}>circle</div>
      <div className={`${styles.box} box2 rounded-full`}>circle</div>
    </div>
  )
}

export default RefTimeLinePage
