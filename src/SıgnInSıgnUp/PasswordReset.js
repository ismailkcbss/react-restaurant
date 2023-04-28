import { TextField } from "@mui/material";
import { useState} from 'react';
import { useHistory } from "react-router-dom";

function KullaniciParolaSifirlama() {

    const initialForm = {
        parolaSifirlamaMail: "",
    }
    const [form, setForm] = useState({ ...initialForm });

    const handleChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value
        });
    }

    const handleParolaClick = (event) => {
        event.preventDefault();


        setForm({ ...initialForm });
        history.push('/');
    }



    const history = useHistory();

    const handleGirisYapDon = () => {
        history.push('/SignIn');
    }


    return (
        <div className="parolaSifirlaDiv">
            <form className="parolaSifirlaForm">

                <h6>Şifresini Sıfırlamak İstediğiniz Hesabın E-Mail Adresini Girin</h6>

                <TextField
                    autoFocus
                    id="email"
                    autoComplete="email"
                    label="E-mail / Telefon Numarası"
                    variant="outlined"
                    className="parolaSifirInput"
                    value={form.parolaSifirlamaMail}
                    onChange={(e) => handleChangeText(e.target.value, "parolaSifirlamaMail")}
                />

                <button onClick={handleParolaClick} className="parolaSifirButton">E-Posta Gönder</button>

                <button className="parolaSifirGirisyap" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Dön</button>

            </form>
        </div>
    );
}

export default KullaniciParolaSifirlama;
