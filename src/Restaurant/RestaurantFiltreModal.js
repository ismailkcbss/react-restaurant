import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";


function RestaurantFiltreModal(props) {

    const { setVisible, handleFilter, filter, setFilter } = props;

    const [isWifi, setIsWifi] = useState(filter.isWifi);
    const [isType, setisType] = useState(filter.type);

    const handleClick = () => {
        setVisible(false);
    }

    const handleChangeType = (event) => {
        setisType(event.target.value);
    }

    return (
        <div className="FiltreModalDiv">
            <div className="FiltreModalHeader">
                <p>Aşağıda Filtreleme Yapabilirsiniz</p>
                <button className="FiltreModalButton" onClick={handleClick}>X</button>
            </div>
            <div className="FiltreModalContainer">
                <div>
                    <Checkbox checked={isWifi} onChange={(e) => setIsWifi(e.target.checked)} />Wifi Olsun
                </div>
                <div> <p>Restaurant Türünü Seçiniz</p>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={isType}
                            onChange={handleChangeType}
                        >
                            <FormControlLabel value="0" control={<Radio />} label="Steak" />
                            <FormControlLabel value="1" control={<Radio />} label="Cafe" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </div>
            <div className="FiltreModalFooter">
                <button onClick={() =>handleFilter(isWifi,isType)} className="FiltreModalFooterButton">Filtreleme Yap</button>
            </div>

        </div>

    );
}

export default RestaurantFiltreModal;