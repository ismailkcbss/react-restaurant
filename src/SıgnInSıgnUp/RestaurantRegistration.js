import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../axios.util";
import { restaurantActions } from "../redux/slice/restaurantSlice";




function RestaurantRegistration() {

    const dispatch = useDispatch();

    const initialForm = {
        RestaurantAd: "",
        RestaurantSehir: "",
        RestaurantAdress: "",
        RestaurantEmail: "",
        RestaurantDesc: "",
    }

    const [form, setForm] = useState({ ...initialForm });


    const onChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const history = useHistory();

    const [isWifi, setIsWifi] = useState(false);
    const [isType, setisType] = useState("");


    const handleChangeType = (event) => {
        setisType(event.target.value);
    }



    const register = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosInstance.post("/restaurant", {
                name: form.RestaurantAd,
                city: form.RestaurantSehir,
                address: form.RestaurantAdress,
                email: form.RestaurantEmail,
                description: form.RestaurantDesc,
                isWifi: isWifi,
                type: Number(isType),
            });
            dispatch(restaurantActions.set(data));
            history.push('/SignIn');
            setForm({ ...initialForm });
        } catch (error) {
            console.log(error);
        }

    }


    const handleGirisYapDon = () => {
        history.push('/SignIn');
    }
    return (
        <div className="RestaurantkayitOlDiv" >
            <form className="RestaurantkayıtOlForm">
                <h5>Restaurant Bilgilerini Doldurunuz</h5>
                <TextField

                    autoFocus
                    id="RestaurantAd"
                    autoComplete="outlined"
                    label="Restaurant Adınını Giriniz"
                    variant="outlined"
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantAd}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantAd")}
                />
                <TextField

                    id="RestaurantSehir"
                    autoComplete="outlined"
                    label="Restaurant'ın Bulunduğu Şehiri Giriniz"
                    variant="outlined"
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantSehir}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantSehir")}
                />
                <TextField

                    id="RestaurantAdress"
                    autoComplete="outlined"
                    label="Restaurant Adresini Giriniz"
                    variant="outlined"
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantAdress}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantAdress")}
                />
                <TextField

                    id="RestaurantEmail"
                    type="email"
                    autoComplete="email"
                    label="Restaurant E-mail adresini Giriniz"
                    variant="outlined"
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantEmail}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantEmail")}
                />
                <TextField
                    id="RestaurantDesc"
                    type='text'
                    label="Restoranınızı Tanıtınız"
                    multiline
                    rows={2}
                    className="IletisimInput"
                    required
                    value={form.RestaurantDesc}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantDesc")}

                />
                <div className="kayitYapLabel">
                    <div>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Restaurant Türünü Seçiniz</FormLabel>
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
                    <div>
                        <Checkbox value={isWifi} onChange={(e) => setIsWifi(e.target.checked)} /> Wifi Var
                    </div>

                </div>
                <button type="submit" className="RestaurantkayitYapButton" onClick={register} >Kayıt Ol</button>
                <button className="RestaurantkayitYapGirisYapDon" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Geri Git</button>
            </form>
        </div>
    );
}

export default RestaurantRegistration;