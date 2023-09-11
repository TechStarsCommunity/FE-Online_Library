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
              <div className='inputContainer'>
                <input placeholder='name' type='address' className='input' />
              </div>
              <div className='inputContainer'>
                <input placeholder='Email' className='input' />
              </div>
              <div className='inputContainer position'>
                <input placeholder='12345678' className='input number' />
                <div className='phone-drop'>+123</div>
              </div>
            </div>


            <div className='input-container-column'>
              <input placeholder='address' type='name' className='input' />
              <input placeholder='Email' type='gmail' className='input' />
              <input placeholder='12345678' type='phone' className='input' />
            </div>
            
            <div className='btn-container'>
              <Button variant='primary' type='submit'>DONE</Button>
            </div>
          </form>
        </div>
        
        <div className='setting'>
          <SettingSvg />
        </div>
      </section>
    </div>
  )
}
