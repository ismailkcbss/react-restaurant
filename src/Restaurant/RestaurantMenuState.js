function RestaurantMenuState(props) {

    const {MenuProps} = props;

    return ( 
            <div className="RestaurantMenuStateDiv">
            <div className='RestaurantMenuStateImg'>
                <img src={MenuProps.image} alt="resim1" />
            </div>
            <div className="RestaurantMenuStateTitle">
                {MenuProps.title}
            </div>
        </div>
     );
}

export default RestaurantMenuState;