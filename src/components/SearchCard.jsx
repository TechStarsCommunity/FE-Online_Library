// import React from 'react'
import MyImage from "../assets/image_icon.png";

const SearchCard = () => {
    return (
        <div className='searchCard'>
            <div className='w-36 flex items-center justify-center myCollapse'>
                <div className="w-full ">
                    <img src={MyImage} alt="" className='w-full none md:flex' />
                </div>
            </div>
            <div className='grid gap-2'>
                <div className='flex justify-between flex-wrap gap-12'>
                    <div>
                        <h3 className='font-extrabold'>Start A Sucessful Career In Tech</h3>
                        <p>Oluwabeen Hakeem</p>
                    </div>
                    <div>
                        <p>42,467 Downloads</p>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9'>
                            <img src={MyImage} alt="" className='w-full h-full' />
                        </div>
                        <p>Frontend Development </p>
                    </div>
                    <div>
                        <p>92 pages | 525kb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard