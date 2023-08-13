import React, { useState } from 'react';
import { iconData, iconData2 } from './roadmapicons';

const roadmap = () => {
  const [icons, setIcons] = useState(iconData);

  const toggleIcon2 = (id) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) => {
        if (icon.id === id) {
          return { ...icon, show: !icon.show };
        }
        return { ...icon, show: false };
      })
    );
  };

  return (
    <React.Fragment>
      <div className='bg-[#E9FCF4] w-full p-12'>
        <div className='left-0 top-0 text-sky-950 text-5xl font-bold leading-normal'>
          Roadmap
        </div>
        <div className='flex mt-20 overflow-x-auto overflow-y-hidden gap-20 lg:gap-40'>
          {icons.map(({ id, show }) => (
            <div key={id} className='flex-shrink-0 flex flex-col items-center ' onClick={() => toggleIcon2(id)}>
              {show ? (
                iconData2[id - 1].images.map((image, index) => (
                  <div key={index} className="text-center">
                    <a
                      href={image.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className="flex flex-col items-center justify-center">
                        <img src={image.src} alt={image.title} />
                        <p className="mt-1 text-sky-950 text-base font-semibold capitalize leading-normal">{image.title}</p>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <img src={iconData[id - 1].src} alt='' />
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default roadmap;
