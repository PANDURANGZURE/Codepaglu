import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Link} from "react-router-dom"
import canva from "../assets/canva.png"
import html from "../assets/html.png"
import react from "../assets/react.svg"
import tail from "../assets/tailwind.png"
import monaco from '../assets/monaco editor.svg'
import gsap from '../assets/gsap.png'
import py from "../assets/py.png"
import { Figma , Github } from 'lucide-react';
import { SiGithub, SiNetlify } from 'react-icons/si';

function About() {
  return (
    <>
    
        <Header/>
        <div className='w-screen text-white flex md:h-screen '>
          <div className="min-h-screen md:w-14 bg-black relative w-14"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>
          
        <div className='w-screen md:flex p-4'>
          
          <div className='md:w-1/2'>
          
            <div><div className='p-4  '>
      <div className='border border-gray-600 p-1 rounded-2xl'>
        <div className='flex ml-1'>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
        </div>
        <div className='bg-[#ffffff09] p-2 rounded-2xl'>
          <p className='text-2xl font-bold'>About This Project</p>
        <p className="text-white text-lg leading-relaxed"> <span className="font-bold text-cyan-200 "><Link>CodePaglu</Link></span> is a Python Interpreter that allows users to write and run Python code instantly in the browser—no setup or installation needed!
Whether you're learning Python, testing a quick snippet, or just exploring, CODEPAGLU makes coding simple and accessible from any device.</p>
      </div>
      </div>
    </div></div>

            <div>
              <div className='p-4 '>
      <div className='border border-gray-600 p-1 rounded-2xl'>
        <div className='flex ml-1'>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
        </div>
        <div className='bg-[#ffffff09] p-2 rounded-2xl'>
          <p className='text-2xl font-bold'>Why I Built <span className="font-bold text-cyan-200 "><Link>CodePaglu</Link></span></p>
        <p className="text-white text-lg leading-relaxed">CODEPAGLU was born out of this need — a browser-based Python interpreter that runs real Python (via Pyodide), with a clean UI and instant output. Whether you're a student learning Python, a developer testing logic, or a teacher demonstrating code, CODEPAGLU makes it simple — no setup, no installations, just code and run.</p>
      </div>
      </div>
    </div>
            </div>
          </div>


          <div className='md:w-1/2 md:mr-10'>
            <div><div className='p-4  '>
      <div className='border border-gray-600 p-1 rounded-2xl'>
        <div className='flex ml-1'>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
          <div className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
        </div>
        <div className='bg-[#ffffff09] p-2 rounded-2xl'>
          <p className='text-2xl font-bold p-1'>Tech Stack Used</p>

          <div className='p-1'>
            <div>
              <p className='text-xl p-2'>UI/UX</p>
              <div className='flex px-2 gap-2 h-12'>
                <img src={canva} alt="" />
              <Figma size={38}/>
              </div>
            </div>
            <div>
              <p className='text-xl p-2'>Frontend </p>
              <div className='flex px-2 gap-2 h-12'>
                <img src={html} alt="" />
                <img src={tail} alt="" />
                <img src={gsap} alt="" />
                <img src={react} alt="" />
                <img src={monaco} alt="" />
                
              </div>
            </div>
            <div>
              <p className='text-xl p-2'>Version Control & Hosting</p>
              <div className='flex px-2 gap-2 '>
                 <SiNetlify className=" h-10 w-12 " title="" />
                 <SiGithub  className=" h-10 w-12" title="" />
              </div>
            </div>
            <div>
              <p className='text-xl p-2'>Python Exwcution</p>
              <div className='flex px-2 gap-2 h-12'>
                <img src={py} alt="" />
              </div>
            </div>
          </div>



        </div>
      </div>
    </div></div>
          </div>
          

          


        </div>
        
        </div>
        
        
        <Footer/>
    
    </>
  )
}

export default About