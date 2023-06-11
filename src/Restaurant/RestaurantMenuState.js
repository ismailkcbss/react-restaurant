import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs";
import { axiosInstance } from "../axios.util";

function RestaurantMenuState(props) {

    const { item, setList } = props;

    const userState = useSelector((state) => state.user);
    const history = useHistory();

    const handleClickPut = () => {
        history.push(`/RestaurantMenu/${item.id}`);
    }

    const RestaurantMenuDelete = async () => {
        if (item.id) {
            try {
                const { data } = await axiosInstance.delete(`/menu/${item.id}`)
                setList((prev) => {
                    const newPrev = prev.filter((each) => each.id !== item.id);
                    return newPrev;
                })
                alertify.success("Seçili Menü Silindi");
            } catch (error) {
                alertify.error(error.response.data.message);
            }
        }
    }

    return (
        <div className="RestaurantMenuStateDiv">
            <div className='RestaurantMenuStateImg'>
                <img src={item.img} alt="Img" />
            </div>
            <div className="RestaurantMenuStateTitle">
                <p style={{ whiteSpace: "noWrap", fontSize: "17px", fontWeight: "bold", color: "black", fontFamily:"cursive",marginBottom:"0"}}>Menu Adı:</p>
                <p style={{ whiteSpace: "noWrap", fontFamily:"cursive"}}>{item.title}</p>
            </div>
            <div className="RestaurantMenuStateFiyat">
                <span style={{ fontFamily:"cursive", fontSize: "17px", fontWeight: "bold", color: "black", paddingRight: "10px" }}>Menu Fiyat :</span>₺ {item.price}
            </div>

            {
                userState.user.role === 'restaurant' ? (
                    <div className="RestaurantMenuStateButton">
                        <button className="MenuButtonPut" onClick={handleClickPut}>
                            Düzenle
                        </button>
                        <button className="MenuButtonDel" onClick={RestaurantMenuDelete}>
                            Sil
                        </button>
                    </div>
                ) : (
                    ""
                )
            }
        </div>
    );
}

export default RestaurantMenuState;