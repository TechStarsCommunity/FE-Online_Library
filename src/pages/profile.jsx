import React from 'react'
import '../styles/profile.css'
import profileImg from '../../public/bgimage.png'
import SettingSvg from '../../public/settingSvg'
import Button from '../components/button'

export default function Profile() {
  return (
    <div className='profile-container'>
        <section className='left-side'>left</section>
        <section className='right-side'>
          <div className='bg-container'>
            <img src={profileImg} alt='bgImage' className='bg-image' />
            
            <p className='text'>Edit your Infomatin</p>
          
            <form className='profile-form'>
            <div className='input-container-row'>
              <input placeholder='name' type='name' className='input' />
              <input placeholder='Email' type='gmail' className='input' />
              <input placeholder='Phone' type='phone' className='input' />
            </div>
            
            <div className='input-container-colomn'>
              <input placeholder='address' type='address' className='input' style={{height: '5rem'}} />
              <input placeholder='Email' className='input' />
              <input placeholder='Select level' className='input'  />
            </div>
          </form>

          <div className='btn-container'>
            <Button variant='primary'>DONE</Button>
          </div>
        </div>
        
        <div className='setting'>
          <SettingSvg />
        </div>
      </section>
    </div>
  )
}
