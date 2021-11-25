import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import logo from "./logo.svg";
import './App.css'
import GsapPage from './page/Gasp/Index'
import HomePage from './page/Home/Index'
function App() {
  const [count, setCount] = useState(60)
  const [isSend, setIsSend] = useState(true) // 是否发送验证码
  // // Remember the latest callback.
  // function callback() {
  //   return
  // }
  // useEffect(() => {
  //   savedCallback.current = callback
  // }, [callback])
  useEffect(() => {
    let timer: any = 0
    if (isSend && count !== 0) {
      timer = setInterval(() => {
        // 这时候的num由于闭包的原因，一直是0，所以这里不能用setNum(num-1)
        setCount(n => {
          if (n === 1) {
            setIsSend(false)
            clearInterval(timer)
          }
          return n - 1
        })
      }, 1000)
    }
    return () => {
      console.log(count, timer)
      // 组件销毁时，清除定时器
      clearInterval(timer)
    }
  }, [isSend, count])
  // useEffect(() => {
  //   function tick() {
  //     // savedCallback?.current()
  //     console.log(1)
  //     setCount(count + 1)
  //   }
  //   return () => {
  //     let id = setInterval(tick, 1000)
  //     console.log(id, '----id')
  //     clearInterval(id)
  //   }
  // }, [])
  return (
    <div className='App'>
      <header className='App-header h-20 text-center'>
        {count}
        {/* <img src={logo} className="App-logo h-20 w-20 m-auto" alt="logo" /> */}
        {/* <div className=" py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <img src={logo} className="h-full w-full m-auto" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div> */}
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gasp' element={<GsapPage />} />
      </Routes>
    </div>
  )
}

export default App
