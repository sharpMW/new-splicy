import React from 'react'

const KaraokeMain = () => {
  return (
    <>
    <section className='min-h-fit max-w-2xl mx-auto mt-24 text-center flex-col space-y-8'>
      <h2 className='text-lg text-center'>Drop your track to get its Karaoke</h2>
      <div className='border-dashed border-2 border-white flex-col items-center rounded-xl py-24 '>
        <button className='bg-white rounded-md px-4 py-2'><span className='text-black '>Browse Music</span></button>
      </div>
      <button className='bg-slate-600 min-w-[30vw] rounded-md px-4 py-2' >Go!</button>
    </section>
        
    </>
  )
}

export default KaraokeMain