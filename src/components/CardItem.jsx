import React from 'react';

function CardItem({src, title, text}) {
  return (
    <>
      <li className='cards-item'>
        <span className='cards-item-box'>
          <figure className='cards-item-pic-wrap'>
            <img
              className='cards-item-img'
              alt='whatever'
              src={src}
            />
          </figure>
          <div className='cards-item-info'>
            <div className='cards-item-title'>
              <h2>{title}</h2>
            </div>
            <p className='cards-item-text'>{text}</p>
          </div>
        </span>
      </li>
    </>
  );
}

export default CardItem;