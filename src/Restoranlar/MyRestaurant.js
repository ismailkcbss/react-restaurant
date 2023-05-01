import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { axiosInstance } from '../axios.util';
import alertify from "alertifyjs";
import { restaurantActions } from '../redux/slice/restaurantSlice';




export default function MyRestaurant() {

  const userState = useSelector((state) => state.user);

  const restaurantState = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();


  const RestaurantMe = async () => {
    try {
      const { data } = await axiosInstance.get("/restaurant/me");
      dispatch(restaurantActions.set(data));
    } catch (error) {
      alertify.error(error.response.data.message);
    }

  }
  useEffect(() => {
    RestaurantMe();
  }, []);

  return (
    <div className='MyRestaurantDiv'>
      <Navbar />
      <div className='MyRestaurantBody'>

        <div className='MyRestaurantHeader'>
          {userState.user.role === 'restaurant' ? (
            <p>Restaurantına Hoş Geldin &emsp; {userState.user.fullName.toUpperCase()}</p>
          ) : (
            <p>Restaurant Sahibi Değilsiniz !!!</p>
          )
          }

        </div>
        <div className='MyRestaurantContainer'>
          {
            restaurantState.restaurant.description
          }

        </div>

      </div>
      <Footer />
    </div>
  )
}