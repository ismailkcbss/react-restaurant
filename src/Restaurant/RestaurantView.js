import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axios.util";
import alertify from "alertifyjs";
import Loading from "./Loading";
import RestaurantViewState from "./RestaurantViewState";
import RestaurantCard from '../img/RestaurantCard1.jpg'


function RestaurantView() {

    const RestaurantViewStatePost = [
        {
            id: 1,
            title: 'Şiş Kebap',
            description: 'Bol posiyon',
            image: RestaurantCard,
        },
        {
            id: 2,
            title: 'Adana Kebap',
            description: 'Bol posiyon',
            image: RestaurantCard,
        },
        {
            id: 3,
            title: 'Salata',
            description: 'Bol posiyon',
            image: RestaurantCard,
        },
        {
            id: 4,
            title: 'Macit',
            description: 'Bol posiyon',
            image: RestaurantCard,
        },
    ]


    const [Views, SetViews] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        RestaurantViewing();
    }, [])

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
                            <div className="RestaurantViewBodySol">
                                {Views[0].description}
                            </div>
                            <div className="RestaurantViewBodySag">
                                üreolrüeğltüeğrlewülwqü
                            </div>
                        </div>
                        <div className="RestaurantViewFooter">
                            {RestaurantViewStatePost.map((post) => (
                                <RestaurantViewState key={post.id} post={post}/>
                            ))}

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