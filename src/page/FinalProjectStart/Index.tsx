import { ReactComponent as FinalSvg } from '../../svg/final.svg'
import { ReactComponent as FinalSvg10 } from '../../svg/10.svg'
import './Index.css'
function FinalProjectStart() {
  return (
    <div className='flex gap-20'>
      <div id='demo'>
        <div id='main'>
          <h1>Creative</h1>
          <h2>Process</h2>
          <p>Learn how to find inspiration in the things you love. </p>
          <button className='myButton'>READ MORE</button>
        </div>
        <div id='images'>
          {/* <img src={finalSvg10} alt='' /> */}
          <FinalSvg />
        </div>
      </div>
      <FinalSvg10 />
    </div>
  )
}

export default FinalProjectStart
