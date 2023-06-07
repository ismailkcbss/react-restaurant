import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyRestaurantMenuDel from "./MyRestaurantMenuDel";

function RestaurantMenuState(props) {

    const { item } = props;

    const userState = useSelector((state) => state.user);
    const history = useHistory();

    const [visible, setVisible] = useState(false);

    const handleClickPut = () => {
        history.push(`/RestaurantMenu/${item.id}`);
    }
    const handleClickDel = () => {
        setVisible(true);
        history.push(`/MyRestaurant`);
    }

    return (
        <div className="RestaurantMenuStateDiv">
            <div className='RestaurantMenuStateImg'>
                <img src={item.img} alt="Img" />
            </div>
            <div className="RestaurantMenuStateTitle">
                <span style={{ whiteSpace: "nowrap", fontSize: "15px", fontWeight: "bold", color: "black", paddingRight: "10px" }}>Menu Adı:</span>
                <span style={{ whiteSpace: "nowrap" }}>{item.title}</span>
            </div>
            <div className="RestaurantMenuStateFiyat">
                <span style={{ fontSize: "15px", fontWeight: "bold", color: "black", paddingRight: "10px" }}>Menu Fiyat (TL):</span>{item.price}
            </div>

            {
                userState.user.role === 'restaurant' ? (
                    <div className="RestaurantMenuStateButton">
                        <button className="MenuButtonPut" onClick={handleClickPut}>
                            Düzenle
                        </button>
                        <button className="MenuButtonDel" onClick={handleClickDel}>
                            Sil
                        </button>
                    </div>
                ) : (
                    ""
                )
            }
            {visible ? (
                <div className="MenuDelModal">
                    <div className="MenuDelModalPost">
                        <MyRestaurantMenuDel setVisible={setVisible} />
                    </div>
                </div>
            ) : (
                null
            )

            }


        </div>
    );
}

export default RestaurantMenuState;