import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from '../axios.util';
import alertify from "alertifyjs";



function RestaurantFiltreModal(props) {

    const { setVisible } = props;
    const { setRestaurantList } = props;


    const [isWifi, setIsWifi] = useState(false);
    const [isType, setisType] = useState("");
    const [filtreState, setfiltreState] = useState([]);

    const handleClick = () => {
        setVisible(false);
    }

    const handleChangeType = (event) => {
        setisType(event.target.value);
    }

    const handleSubmit = async () => {
        let wifiQueryUrl = "";
        if (isWifi) {
            wifiQueryUrl = "wifi=yes&";
        }
        try {
            const { data } = await axiosInstance.get(`/restaurant?offset=0&limit=8&${wifiQueryUrl}type=${isType}`)
            setVisible(false)
            setRestaurantList(data.rows)
        } catch (error) {
            alertify.error(error.response.data.message);
        }
    }

    useEffect(() => {

    }, [])

    return (
        <div className="FiltreModalDiv">
            <div className="FiltreModalHeader">
                <p>Aşağıda Filtreleme Yapabilirsiniz</p>
                <button className="FiltreModalButton" onClick={handleClick}>X</button>
            </div>
            <div className="FiltreModalContainer">
                <div>
                    <Checkbox value={isWifi} onChange={(e) => setIsWifi(e.target.checked)} />Wifi Olsun
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
                <button onClick={handleSubmit} className="FiltreModalFooterButton">Filtreleme Yap</button>
            </div>

        </div>
    );
}

export default RestaurantFiltreModal;