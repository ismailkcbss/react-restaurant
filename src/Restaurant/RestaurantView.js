import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axios.util";
import alertify from "alertifyjs";
import Loading from "./Loading";
import RestaurantMenuState from "./RestaurantMenuState";
import RestaurantTable from "./RestaurantTable";


function RestaurantView() {

    const [Views, SetViews] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [restaurantMenuList, setRestaurantMenuList] = useState([]);

    const { id } = useParams();

    const RestaurantViewing = async () => {
        try {
            const { data } = await axiosInstance.get(`/restaurant?id=${id}`);
            SetViews(data.rows);
            setIsLoading(true);
        } catch (error) {
            alertify.error(error.response.data.message);
        }
    }

    const RestaurantViewingMenu = async () => {
        try {
            const { data } = await axiosInstance.get(`/menu/restaurant/${id}`);
            setRestaurantMenuList(data.rows);
        } catch (error) {
            alertify.error(error.response.data.message);
        }
    }

    useEffect(() => {
        RestaurantViewing();
        RestaurantViewingMenu();
    }, [id])




    return (
        <div className="RestaurantViewDiv">
            <Navbar />
            {
                isLoading ? (
                    <div className="RestaurantViewContainer">
                        <div className="RestaurantViewHeader">
                            <p> {Views[0].name}</p>
                        </div>
                        <div className="RestaurantViewBody">
                            <RestaurantTable Views={Views} />
                        </div>
                        <p style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "cursive", paddingLeft: "10px", marginTop: "50px" }}>Restaurant Menu</p>

                        <div className="RestaurantViewMenuDiv">
                            <div className="RestaurantViewMenu">
                                {
                                    restaurantMenuList.map((item) => (
                                        <RestaurantMenuState key={item.id} item={item} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )
            }
            <Footer />
        </div>
    );
}

export default RestaurantView;