import React from 'react'
import '../App.css'
import SliderGallery from '../components/SliderGallery';

function Gallery() {

  const galleryImages = [
    {
      img: '/images/gallery1.jpg'
    },
    {
      img: '/images/gallery2.jpg'
    },
    {
      img: '/images/gallery3.jpg'
    },
    {
      img: '/images/gallery4.jpg'
    },
    {
      img: '/images/gallery5.jpg'
    },
    {
      img: '/images/gallery6.jpg'
    }
  ]

return (
  <>
  <div className='heading'>
    <h1>Gallery</h1>
  </div>
  <SliderGallery galleryImages={galleryImages}></SliderGallery>
  </>
)

}

export default Gallery;