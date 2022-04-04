import React from 'react';
import logo from '../assets/logo.png';
import {ReactComponent as Search} from '../assets/search-icon.svg';
import {ReactComponent as HeaderIcon} from '../assets/header.svg';


function Header(props) {
  return (
    <div className={`header`}>
      <img src={logo} alt='logo' />
      <div className='search'>
        <Search className='search-icon'/>
        <input type='text' placeholder='Search for your favourite group in ATG' />
      </div>
        <button className='create-acc-btn' onClick={()=>props.setSignup(true)}>Create account.<span>It's free!</span></button>
        <button className='create-acc-btn mobile' onClick={()=>props.setSignup(true)}><HeaderIcon /></button>
    </div>
  )
}

export default Header;