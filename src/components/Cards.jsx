import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({children}) {
  return (
    <div className='cards'>
      <h1>{children}</h1>
      <div className='cards-container'>
          <ul className='cards-items'>
            <CardItem
              src='images/gym3.jpg'
              title='High Quality Gym Equipment'
              text='We offer very high quality gym equipment and a high quality training zone
              where you will be able to do any workouts you require.'
            />
            <CardItem
              src='images/gym5.jpg'
              title='Supplements Bar'
              text='POWER offers you a supplements bar containing the highest quality of supplements on the market
              ranging from proteins, pre-workouts, BCAAs and others.'
            />
            <CardItem
              src='images/gym4.jpg'
              title='Best Staff Around'
              text='Our gym instructors are some of the best instructors out there and will be able to
              create  diet and workout plans specifically tailored for you so you can meet your training goals.'
            />
          </ul>
      </div>
    </div>
  );
}

export default Cards;