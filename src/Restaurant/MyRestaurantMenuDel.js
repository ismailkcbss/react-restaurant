

function MyRestaurantMenuDel(props) {

    const { setVisible } = props;

    const handleClick = () => {
        setVisible(false);
    }

    const handleSubmit = () => {

    }
    return (
        <div className="MenuDelDiv">
            <div className="MenuDelHeader">
                <p>UYARI</p>
                <button className="MenuDelButton" onClick={handleClick}>X</button>
            </div>
            <div className="MenuDelFooter">
                <span style={{marginRight:"57px"}}>Seçmiş olduğunuz menü tamamen silinecektir</span><button onClick={handleSubmit} className="MenuDelFooterButton">Menüyü Sil</button>
            </div>
        </div>
    );
}

export default MyRestaurantMenuDel;