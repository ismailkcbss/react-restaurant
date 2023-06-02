import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { axiosInstance } from '../axios.util';
import alertify from "alertifyjs";
import { restaurantActions } from '../redux/slice/restaurantSlice';
import { useHistory } from 'react-router-dom';
import RestaurantMenuState from './RestaurantMenuState';
import { restaurantMenuActions } from '../redux/slice/restaurantMenuSlice';




export default function MyRestaurant() {

  const userState = useSelector((state) => state.user);

  const restaurantState = useSelector((state) => state.restaurant);

  const [restaurantMenuList, setRestaurantMenuList] = useState([]);

  const [restaurantId, setRestaurantId] = useState("");



  const dispatch = useDispatch();
  const history = useHistory();

  const RestaurantMe = async () => {
    try {
      const { data } = await axiosInstance.get("/restaurant/me");
      setRestaurantId(data);
      dispatch(restaurantActions.set(data));
    } catch (error) {
      alertify.error(error.response.data.message);
    }

  }


  const handleClickMenu = () => {
    history.push('/RestaurantMenu');
  }

  const RestaurantMenuPost = async () => {
    try {
      const { data } = await axiosInstance.get(`/menu/restaurant/${restaurantId.id}`);
      setRestaurantMenuList(data.rows);
    } catch (error) {
      alertify.error(error.response.data.message);
    }
  }

  useEffect(() => {
    RestaurantMe();
  }, []);


  useEffect(() => {
    if (restaurantId) {
      RestaurantMenuPost();
    }
  }, [restaurantId])


  return (
    <div className='MyRestaurantDiv'>
      <Navbar />
      <div className='MyRestaurantBody'>

        <div className='MyRestaurantHeader'>
          {userState.user.role === 'restaurant' ? (
            <p>Hoş Geldiniz &emsp; {userState.user.fullName.toUpperCase()}</p>
          ) : (
            <p>Restaurant Sahibi Değilsiniz !!!</p>
          )
          }
          <button onClick={handleClickMenu} className='MyRestaurantHeaderButton'>Restaurant Menu Ekleme</button>
        </div>
        <div className='MyRestaurantContainer'>
          {
           <img src={restaurantState.restaurant.img}/> 
          }
        </div>
        <br /><br /><br />
        <p style={{fontSize:"20px",fontWeight:"bold",fontFamily:"cursive",paddingLeft:"10px"}}>Menu</p>
        <div className='MyRestaurantMenu'>
          {
            restaurantMenuList.map((item) => (
              <RestaurantMenuState key={item.id} item={item} />
            ))
          }
        </div>

      </div>
      <Footer />
    </div>
  )
}

