import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import alertify from "alertifyjs";
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { axiosInstance, setApiToken } from "../axios.util";
import * as storage from "../storage.helper"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

function NewPassword() {
    const history = useHistory();


    const initialForm = {
        newPassword1: "",
        newPassword2: "",
    }

    const [form, setForm] = useState({ ...initialForm });

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
            if (token) {
                setApiToken(token);
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

                <FormControl sx={{ mt: 4, width: '52.5ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Parola</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.newPassword1}
                        onChange={(e) => handleChangeText(e.target.value, "newPassword1")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ mt: 4, width: '52.5ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Parola</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.newPassword2}
                        onChange={(e) => handleChangeText(e.target.value, "newPassword2")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <button onClick={forgotPassword} className="parolaSifirButton">Yeni Şifre Oluştur</button>

            </form>
        </div>
    );
}

export default NewPassword;
