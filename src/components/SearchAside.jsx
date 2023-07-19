import React from 'react'
import MyImage from "../assets/image_icon.png";

const SearchAside = () => {
    return (
        <div className='flex gap-2 flex-wrap w-40 items-center'>
            <div className='w-1/3 '>
                <img src={MyImage} alt="" className='w-full h-full' />
            </div>
            <p>Editors Peak</p>
        </div>
    )
}

export default SearchAside