import { FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/slice/userSlice";
import * as storage from "../storage.helper"
import { axiosInstance, setApiToken } from "../axios.util";
import { useState } from "react";
import alertify from "alertifyjs";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

function KullaniciSignIn() {

  const initialForm = {
    loginEmail: "",
    loginPassword: "",
  }

  const [form, setForm] = useState({ ...initialForm });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    })
  }


  const login = async (event) => {
    event.preventDefault();
    if (form.loginEmail.trim() === "" || form.loginPassword.trim() === "") {
      alertify.error("Bilgilerinizi Doldurunuz Lütfen");
      return;
    }
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email: form.loginEmail,
        password: form.loginPassword,
      });
      storage.setKeyWithValue("token", data.token);
      setApiToken(data.token);
      dispatch(userActions.login(data));
      history.push('/');
      alertify.success('Giriş Başarılı');
    } catch (error) {
      alertify.error(error.response.data.message);
    }

    setForm({ ...initialForm });

  }




  const history = useHistory();

  const handleKayitOlDon = () => {
    history.push('/SignUp');
  }
  const handlePunuttumDon = () => {
    history.push('/PasswordReset');
  }
  const handleAnasayfaDon = () => {
    history.push('/');
  }

  return (
    <div className="girisYapDiv">
      <form className="girisYapForm">
        <h5>Giriş Yapmak İçin Bilgilerinizi Giriniz</h5>

        <TextField
          autoFocus
          id="email"
          autoComplete="email"
          label="E-mail / Telefon Numarası"
          variant="outlined"
          className="girisYapInput"
          value={form.loginEmail}
          onChange={(e) => handleChangeText(e.target.value, "loginEmail")}
        />
        <FormControl sx={{ mt: 4, width: '52.5ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Parola</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={form.loginPassword}
            onChange={(e) => handleChangeText(e.target.value, "loginPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <button className="girisYapButton" onClick={login} >Giriş Yap</button>

        <button className="girisYapKayıtol" onClick={handleKayitOlDon} >Kayıt Ol</button>
        <button className="girisYapPunuttum" onClick={handlePunuttumDon} >Parolamı Unuttum</button>
        <button className="girisYapAnasayfa" onClick={handleAnasayfaDon} >Anasayfaya Sayfaya Dön</button>




      </form>
    </div>

  );
}

export default KullaniciSignIn;