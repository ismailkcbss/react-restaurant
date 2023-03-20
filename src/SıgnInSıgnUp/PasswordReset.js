import { TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/slice/userSlice";

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

    // veri okuma
   // const userState = useSelector((state) => state.user); // store.js reducer

    // veri değiştirme
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     const login = async() => {
    //         try {
    //             // axios la veri okudum
    //             const { data } = await axios.post("http://localhost:8000/auth/login", {
    //                 email: form.parolaSifirlamaMail,
    //               });

    //      {/*const*/} data = {
    //                 user: {
    //                     id: "",
    //                     email: "",
    //                 },
    //                 token: "",
    //             }
    //             dispatch(userActions.login(data));
    //         } catch (error) {
    //             // alertifyjs 
    //         }
    //     }
    //     login();
    //     if (userState.isAuth) {
    //         console.log("user : ", userState);
    //     }
    //     console.log("use Effect calisti");
    // }, [userState.id]);




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

                <button onClick={handleParolaClick} className="parolaSifirButton">Şifreyi Sıfırla</button>

                <button className="parolaSifirGirisyap" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Dön</button>

            </form>
        </div>
    );
}

export default KullaniciParolaSifirlama;
