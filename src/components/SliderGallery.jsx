import { useState } from 'react'

import './SliderGallery.css'

const SliderGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openGallery, setOpenGallery] = useState(false)

  const handleOpenGallery = (index) => {
    setSlideNumber(index)
    setOpenGallery(true)
  }

  const handleCloseGallery = () => {
    setOpenGallery(false)
  }

  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber((slideNumber) => slideNumber - 1 )
  }

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber((slideNumber) => slideNumber + 1)
  }

  return (
    <div>

      {openGallery && 
        <div className='slider-wrap'>
          <i className="fa-solid fa-xmark btn-close" onClick={handleCloseGallery}></i>
          <i className="fa-solid fa-chevron-left btn-prev" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right btn-next" onClick={nextSlide}></i>
          <div className='fullscreen-image'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='gallery-wrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenGallery(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SliderGallery;