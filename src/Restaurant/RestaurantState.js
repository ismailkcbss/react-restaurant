
import { useHistory } from 'react-router-dom';
import RestaurantCard from '../img/RestaurantCard1.jpg'

function RestaurantState(props) {


    const { post } = props;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/RestaurantView/${post.id}`);
    }

    return (
        <div className="RestaurantStateDiv">
            <div className="RestaurantImg">
                <img src={RestaurantCard} alt="resim1" />
            </div>
            <div className="RestaurantTitle">
                {post.name}
            </div>
            <div className="RestaurantButton">
                <button onClick={handleClick}>
                    Restauranta git
                </button>
            </div>
        </div>
    );
}

export default RestaurantState;