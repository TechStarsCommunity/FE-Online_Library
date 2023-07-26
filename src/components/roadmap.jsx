import React from 'react'
import frontendicon from "../assets/frontendicon.png"
import backendicon from "../assets/backendicon.png"
import designicon from "../assets/designicon.png"
import writericon from "../assets/writericon.png"
import dataanalysisicon from "../assets/dataanalysisicon.png"


const roadmap = () => {
  const icons = [
    {
      id: 1,
      src: frontendicon,
      title: "Frontend",
    },
    {
      id: 2,
      src: backendicon,
      title: "Backend",
    },
    {
      id: 3,
      src: designicon,
      title: "Design",
    },
    {
      id: 4,
      src: writericon,
      title: "Writer",
    },
    {
      id: 5,
      src: dataanalysisicon,
      title: "Data Analysis",
    }
  ]
  return (
      <React.Fragment>
          <div className='w-full inline-block bg-emerald-50 p-12'>
            <div className='text-sky-950'>
              <div className='left-0 top-0 text-5xl font-bold leading-normal'>
                Roadmap
              </div>
              <div className='flex mt-20 overflow-x-auto overflow-y-hidden justify-start items-center gap-48'>
                {icons.map (({id,src,title }) => (
                  <div key={id}>
                    <img src={src} alt="" />
                    <p className='text-4xl text-center font-semibold leading-9'>{title}</p>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        
      </React.Fragment>
  )
}

export default roadmap