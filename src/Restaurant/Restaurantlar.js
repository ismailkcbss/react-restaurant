import Navbar from "../Navbar/Navbar";
import RestaurantState from './RestaurantState';
import { axiosInstance } from "../axios.util";
import alertify from "alertifyjs";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import RestaurantFiltreModal from "./RestaurantFiltreModal";



function Restaurantlar() {


  const [restaurantList, setRestaurantList] = useState([]);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({
    isWifi: false,
    type: -1,
  });
  const Restaurant = async () => {

    let wifiQueryUrl = "";
    let typeQueryUrl = "";
    debugger;
    if (filter.isWifi) {
      wifiQueryUrl = "wifi=yes";
    }
    if(filter.type !== -1){
      typeQueryUrl = `type=${filter.type}`;
    }
    try {
      const { data } = await axiosInstance.get(`/restaurant?limit=6&offset=${(page - 1) * 6}&${wifiQueryUrl}&${typeQueryUrl}`);
      setRestaurantList(data.rows);
      setCount(data.count);
      console.log(data.count);
    } catch (error) {
      alertify.error(error.response.data.message);
    }
  }

  useEffect(() => {
    Restaurant();
  }, [page]);


  const handlePageNum = (event, value) => {
    setPage(value);
  }

  const handleClickFiltre = () => {
    setVisible(true);
  }


  const handleFilter = async (isWifi, type) => {
    let wifiQueryUrl = "";
    let typeQueryUrl = "";
    debugger;
    if (isWifi) {
      wifiQueryUrl = "wifi=yes";
    }
    if(type !== -1){
      typeQueryUrl = `type=${type}`;
    }
    try {
      const { data } = await axiosInstance.get(`/restaurant?offset=0&limit=6&${wifiQueryUrl}&${typeQueryUrl}`);
      setFilter({isWifi,type});
      setRestaurantList(data.rows)
      setCount(data.count)
      setVisible(false)
    } catch (error) {
      alertify.error(error.response.data.message);
    }
  }

  return (
    <div className="RestaurantlarDiv">
      <Navbar />
      <div className="RestaurantlarHeader">
        <h1>RESTAURANTLAR</h1>
        <h5>Aşağıda istediğiniz restauranta ulaşabilirsiniz</h5>
        <button className="RestaurantFiltrelemeButton" onClick={handleClickFiltre}>Filtreleme Yap</button>
      </div>

      {visible ? (
        <div className="FiltrelemeModal">
          <div className="FiltrelemeModalPost">
            <RestaurantFiltreModal 
              handleFilter={handleFilter} 
              setVisible={setVisible}
              filter={filter}
            />
          </div>
        </div>
      ) : (
        null
      )

      }
      <div className="RestaurantlarBody">
        {restaurantList.map((post) => (
          <RestaurantState key={post.id} post={post} />
        ))}
      </div>
      <div>
        <Stack spacing={2}>
          <Pagination count={Math.ceil(count / 6)} value={page} onChange={handlePageNum} />
        </Stack>
      </div>
    </div>
  );
}

export default Restaurantlar;