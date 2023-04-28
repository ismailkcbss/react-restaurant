import { TextField } from "@mui/material";
import { useState } from 'react';
import { useHistory } from "react-router-dom";

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


    const handleParolaClick = (event) => {
        event.preventDefault();

        setForm({ ...initialForm });
        history.push('/SignIn');
    }


    return (
        <div className="NewPasswordDiv">
            <form className="NewPasswordForm">

                <h6>Yeni Bir Şifre Yazınız</h6>

                <TextField
                    autoFocus
                    id="password1"
                    autoComplete="current-password"
                    label="Parola"
                    variant="outlined"
                    className="parolaSifirInput"
                    value={form.newPassword1}
                    onChange={(e) => handleChangeText(e.target.value, "password1")}
                />
                <TextField
                    autoFocus
                    id="password2"
                    autoComplete="current-password"
                    label="Parola Tekrar"
                    variant="outlined"
                    className="parolaSifirInput"
                    value={form.newPassword2}
                    onChange={(e) => handleChangeText(e.target.value, "password2")}
                />

                <button onClick={handleParolaClick} className="parolaSifirButton">Yeni Şifre Oluştur</button>

            </form>
        </div>
    );
}

export default NewPassword;
