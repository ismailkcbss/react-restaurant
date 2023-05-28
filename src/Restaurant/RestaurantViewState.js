


function RestaurantViewState(props) {

    const {post} = props;
    
    return (
        <div className="RestaurantViewStateDiv">
            <div className='RestaurantViewStateImg'>
                <img src={post.image} alt="resim1" />
            </div>
            <div className="RestaurantViewStateTitle">
                {post.title}
            </div>
        </div>
    );
}

export default RestaurantViewState;