import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import styles from '../Index.module.css'

const ReactingToChanges = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // 延迟执行
    const timer = setTimeout(() => {
      setDelayedCount(count)
    }, 1000)
    //情况计时器
    return () => clearTimeout(timer)
  }, [count])
  const [delayedCount, setDelayedCount] = useState(0)
  useEffect(() => {
    gsap.to(q('.box-2'), { rotate: '+=360' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayedCount])
  const domRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(domRef)
  useEffect(() => {
    gsap.to(q('.box-1'), { rotate: '+=360' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // 每次重新渲染都让 box-3执行一次
  useEffect(() => {
    gsap.to(q('.box-3'), { rotation: '+=360' })
  })
  return (
    <div
      className={'reacting-to-changes flex flex-col gap-5 items-center'}
      ref={domRef}
    >
      <div>
        <button
          className={
            'p-3 text-white rounded-3xl bg-gradient-to-bl from-red-600 to-yellow-400'
          }
          onClick={() => setCount(count + 1)}
        >
          Click to trigger a render
        </button>
      </div>
      <p>Renders: {count}</p>
      <p>Prop changes: {delayedCount}</p>
      <div className={`${styles.box} rounded-3xl box-1`}>first renderer</div>
      <div className={`${styles.box} rounded-3xl box-2`}>
        First render & prop change
      </div>
      <div className={`${styles.box} rounded-3xl box-3`}>Every render</div>
    </div>
  )
}

export default ReactingToChanges
