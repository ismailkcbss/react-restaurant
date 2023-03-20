import { TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";




function RestaurantRegistration() {

    const initialForm = {
        RestaurantAd: "",
        RestaurantSehir: "",
        RestaurantTelefon: "",
        RestaurantParola: "",
        RestaurantMesaj: ""
    }

    const [form, setForm] = useState({ ...initialForm });

    const onChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const history = useHistory();
    const handleClick = (event) => {
        event.preventDefault();

        setForm({ ...initialForm });

        history.push('/');
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

                    id="RestaurantTelefon"
                    autoComplete="outlined"
                    label="Restaurant Telefon Giriniz"
                    variant="outlined"
                    placeholder='(300)-000-0000'
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantTelefon}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantTelefon")}
                />
                <TextField

                    id="RestaurantParola"
                    type="password"
                    autoComplete="current-password"
                    label="Restaurant Parolanızı Giriniz"
                    variant="outlined"
                    className="RestaurantkayitYapInput"
                    required
                    value={form.RestaurantParola}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantParola")}
                />
                <TextField
                    id="RestaurantMesaj"
                    type='text'
                    label="Restoranınızı Tanıtınız"
                    multiline
                    rows={2}
                    className="IletisimInput"
                    required
                    value={form.RestaurantMesaj}
                    onChange={(e) => onChangeText(e.target.value, "RestaurantMesaj")}

                />
                <p>Restoranı Temsil Eden Bir Fotoğraf Yükleyin</p>
                <input type="file" className="RestaurantkayitYapInput" />

                <button className="RestaurantkayitYapButton" onClick={handleClick} >Kayıt Ol</button>
                <button className="RestaurantkayitYapGirisYapDon" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Geri Git</button>
            </form>
        </div>
    );
}

export default RestaurantRegistration;