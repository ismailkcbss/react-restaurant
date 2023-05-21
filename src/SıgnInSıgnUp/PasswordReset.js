import { TextField } from "@mui/material";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../axios.util";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/slice/userSlice";
import alertify from "alertifyjs";

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


    const history = useHistory();
    
    const dispatch = useDispatch();

    const handleGirisYapDon = () => {
        history.push('/SignIn');
    }

    const PasswordReset = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosInstance.post("/user/forgot-password", {
                email: form.parolaSifirlamaMail,
            });
             dispatch(userActions.login(data));
            history.push('/PasswordResetDesc');
        } catch (error) {
            alertify.error(error.response.data.message);
        }


        setForm({ ...initialForm });
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

                <button onClick={PasswordReset} className="parolaSifirButton">E-Posta Gönder</button>

                <button className="parolaSifirGirisyap" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Dön</button>

            </form>
        </div>
    );
}

export default KullaniciParolaSifirlama;
