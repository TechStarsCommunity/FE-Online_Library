import React from 'react'
import '../styles/editProfile.css'


const editProfile = () => {

  return (
    <React.Fragment>
    {/*<LeftSidebar />*/}
    <div className='profile-img--container'>
    <img
    src='/women.png'
    alt='profile image'
     />
    </div>
    <p>Edit your information </p>
    <div className='form-container'>
    <form>
<input
className='input--field' 
/>
<input
className='input--field' 
/>
<input
className='input--field' 
/>
<input
className='input--field' 
/>
<input
className='input--field' 
/>
    <input
    className='input--field' 
    />
    </form>
    </div>
    </React.Fragment>
  )
}

export default editProfile