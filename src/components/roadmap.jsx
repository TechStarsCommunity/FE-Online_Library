import React, {useState} from 'react'
import frontendIcon from "../assets/frontendicon.svg"
import backendIcon from "../assets/backendicon.svg"
import designIcon from "../assets/designicon.svg"
import writerIcon from "../assets/writericon.svg"
import dataanalysisIcon from "../assets/dataanalysisicon.svg"
import frontendIcon2 from "../assets/frontendicon2.svg"
import backendIcon2 from "../assets/backendicon2.svg"
import designIcon2 from "../assets/designicon2.svg"
import writerIcon2 from "../assets/writericon2.svg"
import dataanalysisIcon2 from "../assets/dataanalysisicon2.svg"


const Roadmap = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      src: frontendIcon,
      show: false,
    },
    {
      id: 2,
      src: backendIcon,
      show: false,
    },
    {
      id: 3,
      src: designIcon,
      show: false,
    },
    {
      id: 4,
      src: writerIcon,
      show: false,
    },
    {
      id: 5,
      src: dataanalysisIcon,
      show: false,
    }
  ]);
  const icons2 = [
    {
      id: 1,
      src: frontendIcon2,
    },
    {
      id: 2,
      src: backendIcon2,
    },
    {
      id: 3,
      src: designIcon2,
    },
    {
      id: 4,
      src: writerIcon2,
    },
    {
      id: 5,
      src: dataanalysisIcon2,
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

export default Roadmap;