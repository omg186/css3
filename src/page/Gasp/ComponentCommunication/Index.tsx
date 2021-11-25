import { gsap } from 'gsap'
import { useLayoutEffect, useState } from 'react'
import Box from '../Box'
import Circle from '../Circle'

/**
 * 组件通信
 * @returns
 */
function ComponentCommunication() {
  const [tl] = useState(gsap.timeline())

  const [reversed, setReversed] = useState(false)

  useLayoutEffect(() => {
    tl && tl.reversed(reversed)
  }, [reversed, tl])
  return (
    <div className='component-communication flex flex-col items-center w-64 gap-5'>
      <button
        className={
          'p-3 min-w-full bg-gradient-to-r from-red-600 to-blue-500 rounded-3xl text-white'
        }
        onClick={() => setReversed(!reversed)}
      >
        切换
      </button>
      <Box timeline={tl} index={0}>
        Box
      </Box>
      <Circle timeline={tl} rotation={360} index={1}>
        Circle
      </Circle>
    </div>
  )
}

export default ComponentCommunication
