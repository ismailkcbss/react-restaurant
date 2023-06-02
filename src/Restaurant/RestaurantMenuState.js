
function RestaurantMenuState(props) {

    const { item } = props;

    return (
        <div className="RestaurantMenuStateDiv">
            <div className='RestaurantMenuStateImg'>
                <img src={item.img} alt="Img" />
            </div>
            <div className="RestaurantMenuStateTitle">
               <span style={{fontSize:"11px",fontWeight:"bold",color:"black",paddingRight:"10px"}}>Menu Adı:</span>{item.title}
            </div>
            <div className="RestaurantMenuStateFiyat">
            <span style={{fontSize:"11px",fontWeight:"bold",color:"black",paddingRight:"10px"}}>Menu Fiyat (TL):</span>{item.price}
            </div>
        </div>
    );
}

export default RestaurantMenuState;