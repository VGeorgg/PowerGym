import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TrainerCards({children}) {
  return (
    <div className='cards'>
      <h1>{children}</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/trainer1.jpg'
              title='John Doe'
              text="John Doe is a seasoned fitness professional with an impressive background in personal training and a genuine passion for helping others unlock their full potential. With over a decade of experience in the fitness industry, John's journey began as a competitive athlete before transitioning into the realm of coaching and mentoring."
            />
            <CardItem
              src='images/trainer2.jpg'
              title='Jane Doe'
              text="Meet Jane Doe, a dynamic and charismatic fitness instructor who brings an electrifying energy to every workout. As an integral part of the POWER Gym team, Jane is an embodiment of dedication, positivity, and expertise. With a background in multiple disciplines, she's a true force of inspiration for anyone looking to embark on a fitness journey."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrainerCards;