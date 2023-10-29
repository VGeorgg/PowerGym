import React from 'react'
import {Button} from './Button'
import '../App.css'
import './Hero.css'


function Hero() {
  return (
    <div className='hero-container'>
      <h1>JOIN POWER.</h1>
      <p>Take the first step.</p>
      <div className='hero-btn'>
        <Button>
          Check Us Out
        </Button>
      </div>
    </div>
    
  )
}

export default Hero