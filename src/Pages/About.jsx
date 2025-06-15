import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Link} from "react-router-dom"
import canva from "../assets/canva.png"
import html from "../assets/html.png"
import react from "../assets/react.svg"
import tail from "../assets/tailwind.png"
import monaco from '../assets/monaco editor.svg'
import any from '../assets/any.png'
import gsap from '../assets/gsap.png'
import py from "../assets/py.png"
import vite from '../assets/vite.png'
import { Figma , Github,Linkedin, Instagram } from 'lucide-react';
import { SiGithub, SiNetlify } from 'react-icons/si';
import pfp1 from "../assets/manu.png"
import pfp2 from "../assets/saurav.png"

function About() {
  return (
    <>
    
        <Header/>
        <div className='flex w-full '>
          <div className="min-h-screen md:w-14 bg-black relative w-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
          }}
        ></div>
          <div className='w-full text-white   '>
          
          
        <div className=' md:flex p-4'>
          
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
          <p className='text-2xl font-bold p-1 mb-2'>Tech Stack Used</p>

          <div className='p-1'>
            <div className='md:flex mb-1'>
              <div className='md:w-1/2'>
              <p className='text-xl p-2'>UI/UX</p>
              <div className='flex px-2 gap-2 h-12'>
                <img  className='h-12' src={canva} alt="" />
              <Figma size={40}/>
              </div>
            </div>
            <div className='md:w-1/2 '>
              <p className='text-xl p-2'>Analytics </p>
              <div className="flex flex-wrap px-2 gap-2 h-auto">
  <img className='w-12 h-12'  src={any} alt="" />
</div>

            </div>
            </div>
            
            <div>
              <div className='md:flex mb-1'>
              <div className='md:w-1/2'>
                <p className='text-xl p-2'>Version Control & Hosting</p>
              <div className='flex px-2 gap-2 '>
                 
                 <SiGithub  className=" h-10 w-12" title="" />
                 <SiNetlify className=" h-10 w-12 " title="" />
              </div>
              </div>

              <div className='md:w-1/2'>
              <p className='text-xl p-2'>Python Execution</p>
              <div className='flex px-2 gap-2 h-12'>
                <img src={py} alt="" />
              </div>
            </div>
            </div>
            
            </div>
            <div className='mb-4'>
              <p className='text-xl  p-2'>Frontend</p>
              <div className='flex px-2 gap-2 h-12'>
                
                <img className="w-12" src={html} alt="HTML" />
  <img className="w-12" src={tail} alt="Tailwind" />
  <img className="w-12" src={gsap} alt="GSAP" />
  <img className="w-12" src={react} alt="React" />
  <img className="w-12" src={monaco} alt="Monaco Editor" />
  
              </div>
              <img className="w-12  m-2 " src={vite} alt="Vite" />
            </div>
          </div>



        </div>
      </div>
    </div>
    
    </div>

    
          </div>
          

          


        </div>
        {/* last */}
        <div className="border border-gray-600 rounded-2xl md:mr-16 md:ml-8 md:m-0 mx-7  ">
  {/* Top bar with 3 dots */}
  <div className="flex space-x-2 p-2">
    <div className="h-3 w-3 bg-amber-50 rounded-full"></div>
    <div className="h-3 w-3 bg-amber-50 rounded-full"></div>
    <div className="h-3 w-3 bg-amber-50 rounded-full"></div>
  </div>

  {/* Main card content */}
  <div className="bg-[#ffffff09] p-4 rounded-2xl flex md:flex-row gap-4">
    {/* Developer Info Left */}
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-4">Developer</h1>
      <div className="md:flex items-center justify-center gap-4">
        <div className="bg-black rounded-xl overflow-hidden flex items-center justify-center  ">
          <img className="h-40 w-40 object-cover" src={pfp2} alt="Profile" />
        </div>
        <div>
          <p className="text-2xl text-cyan-200 font-bold ">Pandurang Zure</p>
        <p>I'm a Web Developer based in Pune, Maharashtra, passionate about crafting responsive and visually appealing websites. <br/> I enjoy transforming complex problems into simple, elegant, and user-friendly web experiences. 


My goal is to build websites that are not only functional and efficient but also engaging and intuitive. <br/></p>
<div className="flex space-x-4 mt-2">
          <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Linkedin size={22} />
          </a>
          <a href="https://www.instagram.com/_anonymous_3112_/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Instagram size={22} />
          </a>
        </div>
        </div>
      </div>
    </div>

    
    
  </div>
</div>

      </div>
        </div>
        
        
        
        
        
        <Footer/>
    
    </>
  )
}

export default About