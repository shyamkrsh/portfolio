import React from 'react'

function Contact() {

  return (
    <div className='w-[100%] h-[100%]'>
      <h1 className='text-2xl text-center font-bold mt-20'>─═✧✧═─ ℂ𝕠𝕟𝕥𝕒𝕔𝕥 ─═✧✧═─</h1>
      <div className='mt-20 px-5 md:px-20 w-[100%] flex items-center justify-center'>
        <div className='w-[100%] md:w-[70%] md:border md:py-5 md:px-20 '>
          <h1 className='text-2xl font-bold text-center'>Contact Form</h1>
          <form action="" className='flex flex-col mt-10'>
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