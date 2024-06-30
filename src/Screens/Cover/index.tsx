import React from 'react'
import './index.css';
import logo from '../../Assets/svgs/logoLight.svg';


const Cover : React.FC = () => {
  return (
    <div className='cover-container'>
        <img src={logo} className="cover-logo" alt="Logo" />
        <span className='cover-title'>Supercharge your creativity and<br />productivity <span className='cover-title-colored'>visually</span></span>
        <button className='cover-button'>
            Get Started
        </button>
    </div>
  )
}

export default Cover;