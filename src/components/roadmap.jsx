import React, {useState} from 'react'
import frontendicon from "../assets/frontendicon.svg"
import backendicon from "../assets/backendicon.svg"
import designicon from "../assets/designicon.svg"
import writericon from "../assets/writericon.svg"
import dataanalysisicon from "../assets/dataanalysisicon.svg"
import frontendicon2 from "../assets/frontendicon2.svg"
import backendicon2 from "../assets/backendicon2.svg"
import designicon2 from "../assets/designicon2.svg"
import writericon2 from "../assets/writericon2.svg"
import dataanalysisicon2 from "../assets/dataanalysisicon2.svg"


const roadmap = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      src: frontendicon,
      show: false,
    },
    {
      id: 2,
      src: backendicon,
      show: false,
    },
    {
      id: 3,
      src: designicon,
      show: false,
    },
    {
      id: 4,
      src: writericon,
      show: false,
    },
    {
      id: 5,
      src: dataanalysisicon,
      show: false,
    }
  ]);
  const icons2 = [
    {
      id: 1,
      src: frontendicon2,
    },
    {
      id: 2,
      src: backendicon2,
    },
    {
      id: 3,
      src: designicon2,
    },
    {
      id: 4,
      src: writericon2,
    },
    {
      id: 5,
      src: dataanalysisicon2,
    }
  ]

  const toggleIcon2 = (id) => {
    setIcons((prevIcons) =>
    prevIcons.map((icon) => {
        if (icon.id === id) {
            return { ...icon, show: !icon.show};
        }
        return icon;
    })
    );
  };

  return (
      <React.Fragment>
          <div className='w-full bg-emerald-50 p-12'>
              <div className='left-0 top-0 text-sky-950 text-5xl font-bold leading-normal'>
                        Roadmap
              </div>
              <div className='flex mt-20 overflow-x-auto overflow-y-hidden gap-20 lg:gap-40'>
                        {icons.map (({id,src, show }) => (
                  <div key={id} className='flex-shrink-0' onClick={() => toggleIcon2(id)}>
                          {show ?(
                    <img src={icons2[id -1].src} alt="" />
                          ):(
                    <img src={src} alt="" />
                          )}
                  </div>
                    ))}    
              </div>
          </div>
      </React.Fragment>
  );
};

export default roadmap;