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
import MyRestaurantTable from './MyRestaurantTable';
import { InstallDesktop } from '@mui/icons-material';




export default function MyRestaurant() {

  const userState = useSelector((state) => state.user);

  const [restaurantMenuList, setRestaurantMenuList] = useState([]);

  const [restaurant, setRestaurant] = useState("");



  const dispatch = useDispatch();
  const history = useHistory();

  const RestaurantMe = async () => {
    try {
      const { data } = await axiosInstance.get("/restaurant/me");
      setRestaurant(data);
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
      const { data } = await axiosInstance.get(`/menu/restaurant/${restaurant.id}`);
      setRestaurantMenuList(data.rows);
    } catch (error) {
      alertify.error(error.response.data.message);
    }
  }

  useEffect(() => {
    RestaurantMe();
  }, []);

  useEffect(() => {
    if (restaurant) {
      RestaurantMenuPost();
    }
  }, [restaurant])

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
          <MyRestaurantTable restaurant={restaurant} />
        </div>
        <br /><br /><br />
        <p className='MyRestaurantMenuTitle'>Menu</p>
        <div className='MyRestaurantMenuDiv'>
          <div className='MyRestaurantMenu'>
            {
              restaurantMenuList.map((item) => (
                <RestaurantMenuState setList={setRestaurantMenuList} key={item.id} item={item} />
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

