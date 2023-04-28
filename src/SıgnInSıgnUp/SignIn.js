import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/slice/userSlice";
import * as storage from "../storage.helper"
import { axiosInstance, setApiToken } from "../axios.util";
import { useState } from "react";


function KullaniciSignIn() {

  const initialForm = {
    loginEmail: "",
    loginPassword: "",
  }

  const [form, setForm] = useState({ ...initialForm });

  const dispatch = useDispatch();
  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    })
  }


  const login = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email: form.loginEmail,
        password: form.loginPassword,
      });

      storage.setKeyWithValue("token", data.token);
      setApiToken(data.token);
      dispatch(userActions.login(data));
      history.push('/');
    } catch (error) {
      console.log(error.response.data.message);
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
        <TextField
          id="password"
          type="password"
          autoComplete="current-password"
          label="Parola"
          variant="outlined"
          className="girisYapInput"
          value={form.loginPassword}
          onChange={(e) => handleChangeText(e.target.value, "loginPassword")}
        />

        <button className="girisYapButton" onClick={login} >Giriş Yap</button>

        <button className="girisYapKayıtol" onClick={handleKayitOlDon} >Kayıt Ol</button>
        <button className="girisYapPunuttum" onClick={handlePunuttumDon} >Parolamı Unuttum</button>
        <button className="girisYapAnasayfa" onClick={handleAnasayfaDon} >Anasayfaya Sayfaya Dön</button>




      </form>
    </div>

  );
}

export default KullaniciSignIn;