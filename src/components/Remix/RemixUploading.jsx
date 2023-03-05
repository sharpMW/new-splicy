import React, {useState} from 'react'
import {Audio} from "react-loader-spinner"

const RemixUploading = () => {
  const [uploadedOne, setUploadedOne] = useState(null)
  const [uploadedTwo, setUploadedTwo] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [result, setResutl] = useState(null)
  const [fileName, setFileName] = useState(null)
  const uploadHandlerOne = (e) =>{
    setUploadedOne(true)
    const file = e.target.files
    setFileName(file[0].name)
  }
  const uploadHandlerTwo = (e) =>{
    setUploadedTwo(true)
    const file = e.target.files
    setFileName(file[0].name)
  }
  const goHandler = ()=>{
    console.log("go")
    setIsLoading(true)
  }
  const resultHandler = ()=>{

  }
  return (
    <>
    <section className='min-h-fit max-w-2xl mx-auto mt-24 text-center flex-col space-y-8'>
    { !isLoading && ( 
      <div>
      <h2 className='text-lg text-center'>Drop any two tracks and make a mashup out of it</h2>
      <div className='border-dashed border-2 border-white flex-col items-center rounded-xl py-24'>
        <div className='flex space-x-4 justify-center relative'>
            <div className='p-8 space-y-2 relative overflow-hidden'>
                <h6>Song 1</h6>
                <input type="file" accept="audio/mp3" name='audio_file' onChange={(e)=>uploadHandlerOne(e)} className="opacity-0 z-20 absolute  max-w-sm cursor-pointer"/>
                {
                  !uploadedOne && (
                    <button className='bg-white rounded-md px-4 py-2 z-10'><span className='text-black'>Browse Music</span></button>
                  )
                }
                {
                  uploadedOne && (
                    <div>
                    <img src='/Music file.svg'/>
                    <p>{fileName}</p>
                    </div>
                  )
                }
            </div>
            <div className='p-8 space-y-2 relative overflow-hidden'>
                <h6>Song 2</h6>
                <input type="file" accept="audio/mp3" name='audio_file' onChange={(e)=>uploadHandlerTwo(e)} className="opacity-0 z-20 absolute  max-w-sm cursor-pointer"/>
                {
                  !uploadedTwo && (
                    <button className='bg-white rounded-md px-4 py-2 z-10'><span className='text-black'>Browse Music</span></button>
                  )
                }
                {
                  uploadedTwo && (
                    <div>
                    <img src='/Music file.svg'/>
                    <p>{fileName}</p>
                    </div>
                  )
                }
            </div>
        </div>
        
      </div>
      { uploadedOne && uploadedTwo ? <button className='bg-white min-w-[30vw] text-black rounded-md px-4 py-2' onClick={(e)=>goHandler(e)}>Go!</button>:<button className='bg-slate-600 min-w-[30vw] rounded-md px-4 py-2' >Go!</button>}
      </div>
    )}
    {isLoading && !result && (<div className='relative'>
            
      <Audio className=""/>
      

    </div>)}
    {!isLoading && result && (<div className=''>
            
      <div className='bg-white text-black'>Downlaod</div>
      <div className="text-white border border-white">Back to home</div>

    </div>)}
    </section>
        
    </>
  )
}

export default RemixUploading