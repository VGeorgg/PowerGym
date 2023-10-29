import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function PricesCards({children}) {
  return (
    <div className='cards'>
      <h1>{children}</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/pricesLogo.jpg'
              title='One Time - 8$'
              text='Access to POWER Gym.'
            />
            <CardItem
              src='images/pricesLogo.jpg'
              title='One Month - 60$'
              text='Access to POWER Gym.'
            />
            <CardItem
              src='images/pricesLogo.jpg'
              title='1 Month w/ Personal Instructor - 80$'
              text='Access to POWER gym with a personal 
              instructor who will create your workout and diet plans.'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='images/pricesLogo.jpg'
              title='3 Months - 160$'
              text='Access to POWER Gym.'
            />
            <CardItem
              src='images/pricesLogo.jpg'
              title='6 Months - 300$'
              text='Access to POWER Gym.'
            />
            <CardItem
              src='images/pricesLogo.jpg'
              title='1 Year - 550$'
              text='Access to POWER Gym.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricesCards;