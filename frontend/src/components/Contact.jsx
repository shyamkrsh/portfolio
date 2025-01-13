import React from 'react'

function Contact() {

  return (
    <div className='w-[100%] h-[100%] py-5 mt-20 contactForm'>
      <h1 className='text-4xl md:text-5xl text-center font-semibold mt-10'>𝗖𝗼𝗻𝘁𝗮𝗰𝘁 </h1>
      <div className='mt-10 px-5 md:px-20 w-[100%] flex items-center justify-center'>
        <div className='w-[100%] md:w-[70%]  md:py-5 md:px-20'>
          <form action="" className='flex flex-col mt-10 '>
            <div>
              <h2>Name : </h2>
              <br />
              <input type="text" placeholder='Enter your name' className='w-[100%] h-[3rem] outline-none px-2 text-slate-700 rounded-md' />
            </div>
            <br />
            <div>
              <h2>Email : </h2>
              <br />
              <input type="text" placeholder='Enter your email' className='w-[100%] h-[3rem] outline-none px-2 text-slate-700 rounded-md' />
            </div>
            <br />
            <div>
              <h2>Description : </h2>
              <br />
              <textarea type="text" placeholder='write description' className='w-[100%] outline-none px-2 text-slate-700 rounded-md' rows={"5"}></textarea>
            </div>

            <div className='flex items-center justify-center mt-5 w-[50%] self-center'>
              <button type='submit' className='text-white bg-blue-700 px-5 w-full text-xl py-2 rounded-md font-semibold'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact