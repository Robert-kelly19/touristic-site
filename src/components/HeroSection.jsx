import React from 'react'

export default function HeroSection({text}) {
  return (
    <div className="heroSection">
          <h1 className='hero-header'>{text.page}</h1>
        <p className='hero-para'>
          Home
          <img
            src="https://cdn-icons-png.flaticon.com/512/1635/1635634.png"
            alt="left"
          />
              <span>{text.page}</span>
        </p>
      </div>
  )
}
