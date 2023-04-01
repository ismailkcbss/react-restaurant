import { Checkbox, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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

    const [countWifi, setCountWifi] = useState(0);
    const [countTypeSteak, setCountTypeSteak] = useState(0);
    const [countTypeCafe, setCountTypeCafe] = useState(0);
    const [isTypeSteak, setisTypeSteak] = useState(0);
    const [isTypeCafe, setisTypeCafe] = useState(0);
    const [isWifi, setIsWifi] = useState(false);


    const wifi = () => {
        setCountWifi(countWifi + 1);
        if (countWifi % 2 === 0) {
           // console.log("wifi var");
            return setIsWifi(1);
        }
        else {
           // console.log("wifi yok");
            return setIsWifi(0);
        }

    }

    
    const steak = () => {
        setCountTypeSteak(countTypeSteak + 1);
        if (countTypeSteak % 2 === 0) {
            console.log(countTypeSteak);
            return setisTypeSteak(true);
        }
        else {
            return setisTypeSteak(false);
        }

    }
    const cafe = () => {
        setCountTypeCafe(countTypeCafe + 1);
        if (countTypeCafe % 2 === 0) {
            return setisTypeCafe(true);
        }
        else {
            return setisTypeCafe(false);
        }

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
                isWifi: isWifi === 1 ? true : false,
                type: isTypeSteak === true && isTypeCafe === false ? 1 : 0, // her ikiside false olabilir bu yuzden bir seçim yapmasını zorlamamız gerek bunu nasıl yapıcaz ?
            });
            dispatch(restaurantActions.add(data));
            history.push('/SignIn');
            setForm({ ...initialForm }); // kullanıcı çıkış yaptığı zaman restaurant bilgileri de sıfırlanıyor mu ona kayıt oldu mu 
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
                        {/* <label className="kayitYapWifiLabel"><input className="kayitYapRolCheck" type="checkbox" onClick={wifi} />Wifi var</label> */}
                        <Checkbox value={isWifi} onChange={(e)=> setIsWifi(e.target.checked) }  />
                    </div>
                    <div>
                        <label className="kayitYapRadioLabel" style={{ marginRight: "30px" }}><input className="kayitYapRolCheck" type="checkbox" onClick={steak} />Steak</label>
                        <label className="kayitYapRadioLabel"><input className="kayitYapRolCheck" type="checkbox" onClick={cafe} />Cafe</label>
                    </div>
                </div>
                <button type="submit" className="RestaurantkayitYapButton" onClick={register} >Kayıt Ol</button>
                <button className="RestaurantkayitYapGirisYapDon" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Geri Git</button>
            </form>
        </div>
    );
}

export default RestaurantRegistration;