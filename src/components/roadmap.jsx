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

  const handleIconClick = (id) => {
    setIcons((prevIcons) =>
    prevIcons.map((icon) => {
        if (icon.id === id) {
            return { ...icon, show: !icon.show};
        }
        return {...icon, show: false };
    })
    );
  };
  const handleIcon2Click = (id) => {
    setIcons((prevIcons) =>
    prevIcons.map((icon) => {
        if (icon.id === id) {
            return { ...icon, show: !icon.show};
        }
        return {...icon, show: false };
    })
    );
  };

  return (
      <React.Fragment>
          <div className='w-full inline-block bg-emerald-50 p-12'>
                <div className='text-sky-950'>
                    <div className='left-0 top-0 text-5xl font-bold leading-normal'>
                        Roadmap
                    </div>
                    <div className='flex mt-20 overflow-x-auto overflow-y-hidden justify-start items-center gap-48'>
                        {icons.map (({id,src,title, show }) => (
                        <div key={id} onClick={() => handleIconClick(id)}>
                            <img src={src} alt="" />
                            <p className='text-4xl text-center font-semibold leading-9'>{title}</p>
                        </div>
                        ))}
                    </div>
                    <div className="flex mt-5 gap-48">
            {icons.map(({ id, show }) => (
                    <div>
                            {show && (
                                <img src={icons2[id -1].src} alt=""  onClick={() => handleIcon2Click(id)}/>
                            )}
                    </div>
                    ))}    
                </div>
            </div>
            </div>
      </React.Fragment>
  );
};

export default roadmap;