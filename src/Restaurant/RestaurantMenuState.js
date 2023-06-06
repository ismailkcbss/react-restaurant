import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function RestaurantMenuState(props) {

    const { item } = props;

    const userState = useSelector((state) => state.user);
    const history = useHistory();

    const handleClick = () => {
        history.push(`/RestaurantMenu/${item.id}`);
    }

    return (
        <div className="RestaurantMenuStateDiv">
            <div className='RestaurantMenuStateImg'>
                <img src={item.img} alt="Img" />
            </div>
            <div className="RestaurantMenuStateTitle">
                <span style={{ whiteSpace:"nowrap" , fontSize: "18px", fontWeight: "bold", color: "black", paddingRight: "10px"}}>Menu Adı:</span>
                <span style={{ whiteSpace:"nowrap" }}>{item.title}</span>
            </div>
            <div className="RestaurantMenuStateFiyat">
                <span style={{ fontSize: "11px", fontWeight: "bold", color: "black", paddingRight: "10px" }}>Menu Fiyat (TL):</span>{item.price}
            </div>
            <div className="RestaurantMenuStatePut">
                {
                    userState.user.role === 'restaurant' ? (
                        <button className="MenuButton" onClick={handleClick}>
                            Menu Düzenle
                        </button>
                    ) : (
                        ""
                    )
                }
            </div>

        </div>
    );
}

export default RestaurantMenuState;