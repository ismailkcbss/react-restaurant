import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';




export default function MyRestaurant() {

  const userState = useSelector((state) => state.user);
  const restaurantState = useSelector((state) => state.restaurant);

  return (
    <div className='MyRestaurantDiv'>
      <Navbar />
      <div className='MyRestaurantBody'>

        <div className='MyRestaurantHeader'>
          {userState.user.role === 'restaurant' ? (
            <p>Restaurantına Hoş Geldin &emsp; {userState.user.fullName}</p>
          ) : (
            <p>Restaurant Sahibi Değilsiniz !!!</p>
          )
          }

        </div>
        <div className='MyRestaurantContainer'>
          {restaurantState.restaurant.description}
        </div>

      </div>
      <Footer />
    </div>
  )
}
