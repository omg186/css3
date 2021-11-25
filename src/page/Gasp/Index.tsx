import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import styles from './Index.module.css'
import RefTimeLinePage from './RefTimeLine/Index'
const GsapPage = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  // 获取节点下的所有子节点
  const q = gsap.utils.selector(boxRef)
  useLayoutEffect(() => {
    // gsap.to(boxRef.current, { rotate: "+=360" });
    gsap.to(q('.childer'), {
      //横移100
      x: 100,
      // 错开，每个子元素移动的间隔
      stagger: 0.33,
      // -1 等于无限重复
      repeat: -1,
      // 重复间隔时间
      repeatDelay: 1,
      yoyo: true
    })
  }, [q])
  return (
    <div className='flex'>
      <div className='gasp gap-y-5 flex flex-col w-64' ref={boxRef}>
        <div className={`${styles.box} childer  rounded-3xl`}>BOX</div>
        <div className={`${styles.box} childer  rounded-3xl`}>HELLOW</div>
        <div className={`${styles.box} childer rounded-3xl`}>BOX</div>
      </div>
      <RefTimeLinePage></RefTimeLinePage>
    </div>
  )
}

export default GsapPage
