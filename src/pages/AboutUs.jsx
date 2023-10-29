import React from 'react'
import '../App.css'
import TrainerCards from '../components/TrainerCards'

export default function AboutUs() {
return (
  <>
  <div className="heading">
    <h1>About Us</h1>
    <p>Established in 2012, POWER Gym has been a cornerstone of fitness and empowerment for over a decade. Founded by fitness enthusiasts and professionals with a passion for helping individuals reach their maximum potential, the gym started as a small facility dedicated to functional training and personalized coaching. Today, POWER Gym stands as a beacon of health and wellness, offering a comprehensive range of services tailored to individuals of all fitness levels with a commitment to deliver results and foster a supportive community.</p>
  </div>
  <TrainerCards>Instructors</TrainerCards>
  </>
)
}