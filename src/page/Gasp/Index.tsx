import { gsap } from 'gsap'
// import GSDevTools from 'gsap/GSDevTools'
import { useLayoutEffect, useRef } from 'react'
import ComponentCommunication from './ComponentCommunication/Index'
import styles from './Index.module.css'
import MouseMoveTo from './MouseMoveTo/Index'
import ReactingToChanges from './ReactingToChanges/Index'

const GsapPage = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  // 获取节点下的所有子节点

  useLayoutEffect(() => {
    const q = gsap.utils.selector(boxRef)
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
  }, [])
  return (
    <div className='flex gap-5'>
      <div className='gasp gap-5 flex flex-col w-64' ref={boxRef}>
        <div className={`${styles.box} childer  rounded-3xl`}>BOX</div>
        <div className={`${styles.box} childer  rounded-3xl`}>HELLOW</div>
        <div className={`${styles.box} childer rounded-3xl`}>BOX</div>
      </div>
      <ComponentCommunication></ComponentCommunication>
      {/* <RefTimeLinePage></RefTimeLinePage> */}
      <ReactingToChanges />
      <MouseMoveTo></MouseMoveTo>
    </div>
  )
}

export default GsapPage
