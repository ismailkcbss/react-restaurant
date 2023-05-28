import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RestaurantState from './RestaurantState';
import { axiosInstance } from "../axios.util";
import alertify from "alertifyjs";
import { useEffect } from "react";
import { useState } from "react";




function Restaurantlar() {


    const [restaurantList, setRestaurantList] = useState([]);


    const Restaurant = async () => {
        try {
          const { data } = await axiosInstance.get("/restaurant");
          setRestaurantList(data.rows);
        } catch (error) {
          alertify.error(error.response.data.message);
        }

      }
      useEffect(() => {
        Restaurant();

      }, []);

    const history = useHistory();


    const handleClickFiltre = () => {
        history.push('/');
    }


    return (
        <div className="RestaurantlarDiv">
            <Navbar />
            <div className="RestaurantlarHeader">
                <h1>RESTAURANTLAR</h1>
                <h5>Aşağıda istediğiniz restauranta ulaşabilirsiniz</h5>
                <button className="RestaurantFiltrelemeButton" onClick={handleClickFiltre}>Filtreleme Yap</button>
            </div>
            <div className="RestaurantlarBody">
                {restaurantList.map((post)=>(
                    <RestaurantState key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Restaurantlar;