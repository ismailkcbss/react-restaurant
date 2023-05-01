import { TextField } from "@mui/material";
import alertify from "alertifyjs";
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { axiosInstance, setApiToken } from "../axios.util";
import * as storage from "../storage.helper"

function NewPassword() {
    const history = useHistory();


    const initialForm = {
        newPassword1: "",
        newPassword2: "",
    }

    const [form, setForm] = useState({ ...initialForm });

    const handleChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value
        });
    }


    const location = useLocation();

    useEffect(
        () => {
            setApiToken("");
            storage.setKeyWithValue("token", "");
            const token = location.search.split("=")[1];
            setApiToken(token);
            if (location.search.split("=")[1]) {
                return;
            }
            else {
                history.push("/");
            }
        }, []
    )
    


    const forgotPassword = async (event) => {
        event.preventDefault();

        if (form.newPassword1 === form.newPassword2) {
            try {
                await axiosInstance.post("/user/new-password", {
                    password: form.newPassword1,
                });

                alertify.success('Şifre Değiştirme Başarılı');
                history.push('/SignIn');
            } catch (error) {
                alertify.error(error.response.data.message);
            }

            setForm({ ...initialForm });
        }
        else {
            alertify.error("Girdiğiniz iki değer birbiri ile eşleşmiyor");
        }
    }



    return (
        <div className="NewPasswordDiv">
            <form className="NewPasswordForm">

                <h6>Yeni Bir Şifre Yazınız</h6>

                <TextField
                    autoFocus
                    id="password1"
                    autoComplete="current-password"
                    type="password"
                    label="Parola"
                    variant="outlined"
                    className="parolaSifirInput"
                    value={form.newPassword1}
                    onChange={(e) => handleChangeText(e.target.value, "newPassword1")}
                />
                <TextField
                    id="password2"
                    autoComplete="current-password"
                    type="password"
                    label="Parola Tekrar"
                    variant="outlined"
                    className="parolaSifirInput"
                    value={form.newPassword2}
                    onChange={(e) => handleChangeText(e.target.value, "newPassword2")}
                />

                <button onClick={forgotPassword} className="parolaSifirButton">Yeni Şifre Oluştur</button>

            </form>
        </div>
    );
}

export default NewPassword;
