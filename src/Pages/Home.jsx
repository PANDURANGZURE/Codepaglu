import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
        <Header/>
        <div className=' '>
          <hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
            <div className='flex'>
              
              <div
  className="min-h-screen md:w-14 w-7 bg-black relative "
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
  }}
></div>


<div className='w-full'>
  <div className="w-full">
    
    <div className='mt-12'>
      
      <div className='flex p-2  leading-tight tracking-tighter text-balance' >
    <p className='mr-2  text-[#2e2d2d]' >text-8xl </p>
    <p className='mr-2  text-[#2e2d2d]' >text-white </p>
    <p className='mr-2  text-[#2e2d2d]' >tracking-t</p>
    <p className='mr-2  text-[#2e2d2d]' >text-balance</p>
    </div>
    <hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </div>
    <div className='text-white'>
      <p className='px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl'>
        CodePaglu for Python  Development and Documentation.
      </p>
      <hr className=" border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </div>
    <div>
      
    </div>

    <div className='mt-2'>
      <div className='flex p-2  leading-tight tracking-tighter text-balance' >
    <p className='mr-2  text-[#2e2d2d]' >text-8xl </p>
    <p className='mr-2  text-[#2e2d2d]' >text-white </p>
    <p className='mr-2  text-[#2e2d2d]' >tracking-t</p>
    </div>
    <hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </div>

    <div className=''>
      <div className='flex p-2  leading-tight tracking-tighter text-balance' >
    <p className='text-white md:text-xl text-sm'>
  A site <span className='text-cyan-200'>CodePaglu</span> packed with essentials like <span className='text-cyan-200'>Interpreter</span> and <span className='text-cyan-200'>Documentation</span> that can be composed to build any program and logic.
</p>
</div>
    <hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </div>
    <div>
      <hr className=" border-t mt-10" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </div>

    <div>
      <div>
        <Link to="/Docs"><button className='bg-white px-3 mx-6 py-2 rounded-3xl font-semibold cursor-pointer text-md'>Get Started</button></Link>
        <Link to="/Interpreter"><button className='bg-white px-3  py-2 rounded-3xl font-semibold cursor-pointer text-md'>Let's Code</button></Link>
      </div>
      <hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
      
    </div>

    <div
  className=" h-8 bg-black relative md:h-14"
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
  }}
></div>
<hr className=" border-t " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
<hr className=" border-t mt-10 " style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    {/* ///code */}

    <div className='p-4 '>
      <div className='border border-gray-600 p-1 rounded-2xl'>
        <div className='flex ml-1'>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
        </div>
        <div className='bg-[#ffffff09] p-2 rounded-2xl'>
        <p className="text-white text-lg leading-relaxed"> <span className="font-bold ">CodePaglu</span> is your all-in-one platform for system development, documentation, and logic building. Whether you're a beginner writing your first lines of code or an experienced developer crafting complex applications, CodePaglu empowers you with the right tools—like a built-in interpreter, a clean code editor, real-time documentation, and interactive learning modules—all under one roof. Instead of jumping between multiple apps, CodePaglu brings everything you need into a unified, responsive interface that’s fast, intuitive, and built for productivity. It’s not just a tool—it’s a coding experience designed to simplify development, enhance understanding, and help you bring your ideas to life, faster and smarter. </p>
      </div>
      </div>
    </div>
</div>
</div>
<div
  className="min-h-screen md:w-10 w-3 bg-black relative "
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
  }}
></div>
            </div>
        </div>
        
    
    </div>
    <Footer/>
    </>
  )
}

export default Home