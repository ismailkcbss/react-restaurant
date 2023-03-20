import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";




function Restaurantlar() {

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
        </div>
    );
}

export default Restaurantlar;