import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RestaurantState from './RestaurantState';
import { axiosInstance } from "../axios.util";
import alertify from "alertifyjs";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



function Restaurantlar() {


  const [restaurantList, setRestaurantList] = useState([]);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");


  const Restaurant = async () => {
    try {
      const { data } = await axiosInstance.get(`/restaurant?limit=8&offset=${(page-1)*8}`);
      setRestaurantList(data.rows);
      setCount(data.count);
    } catch (error) {
      alertify.error(error.response.data.message);
    }

  }

  useEffect(() => {
    Restaurant();
  }, [page]);


  const handlePageNum = (event,value) => {
    setPage(value);
  }


  const history = useHistory();

  const handleClickFiltre = () => {
    
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
        {restaurantList.map((post) => (
          <RestaurantState key={post.id} post={post} />
        ))}
      </div>
      <div>
        <Stack spacing={2}>
          <Pagination count={Math.ceil(count / 8)} value={page} onChange={handlePageNum} />
        </Stack>
      </div>
    </div>
  );
}

export default Restaurantlar;