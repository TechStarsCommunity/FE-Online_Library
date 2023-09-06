import React from 'react'
import '../styles/profile.css'
import profileImg from '../../public/bgimage.png'
import SettingSvg from '../../public/settingSvg'
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='left-side'>left</div>
        <div className='right-side'>
          <div className='bg-container'>
            <img src={profileImg} alt='bgImage' className='bg-image' />
            
            <p className='text'>Edit your Infomatin</p>
          
            <form className='profile-form'>
            <div className='input-container'>
              <input placeholder='name' type='name' className='input' />
              <input placeholder='Email' type='gmail' className='input' />
              <input placeholder='Phone' type='phone' className='input' />
            </div>
            
            <div className='input-container contain'>
              <input placeholder='address' type='address' className='input' />
              <input placeholder='Email' className='input' />
              <input placeholder='Select level' className='input'  />
            </div>
          </form>
        </div>
        
        <div className='setting'>
          <SettingSvg />
        </div>
        </div>
    </div>
  )
}
