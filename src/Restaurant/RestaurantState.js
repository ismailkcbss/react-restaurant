
import { useHistory } from 'react-router-dom';

function RestaurantState(props) {

    const { post } = props;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/RestaurantView/${post.id}`);
    }

    return (
        <div className="RestaurantStateDiv">
            <button className='RestaurantButton' onClick={handleClick}>
                <div className="RestaurantImg">
                    <img src={post.img} alt="Img" />
                </div>
                <div className="RestaurantTitle">
                    {post.name}
                </div>

            </button>
        </div >

    );
}

export default RestaurantState;