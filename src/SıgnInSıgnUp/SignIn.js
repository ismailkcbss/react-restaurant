import { Alert, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userActions } from "../redux/slice/userSlice";

function KullaniciSignIn() {

  const initialForm = {
    girisYapEmail: "",
    girisYapSifre: "",
  }

  const [form, setForm] = useState({ ...initialForm });

  //const dispatch = useDispatch();
  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  // veri okuma
  //const userState = useSelector((state) => state.user); // store.js reducer

  // useEffect(() => {
  //   const login = async () => {
  //     try {
  //       const { data } = await axios.post("http://localhost:8000/auth/login", {
  //         email: form.girisYapEmail,
  //         password: form.girisYapSifre,
  //       });

  //       data = {
  //         user: {
  //           id: "",
  //           email: "",
  //         },
  //         token: "",
  //       }

  //       dispatch(userActions.login(data));
  //     } catch (error) {
  //       <Stack sx={{ width: '100%' }} spacing={2}>
  //         <Alert variant="filled" severity="error" autoHideDuration={6000}>
  //           E-Posta Adresiniz veya Parolanız Hatalı
  //         </Alert>
  //       </Stack>
  //     }
  //   }
  //   login();
  //   if (userState.isAuth) {
  //     console.log("user : ", userState);
  //   }
  //   console.log("use Effect calisti");
  // }, [userState.id]);



  const handleClick = (event) => {
    event.preventDefault();

    setForm({ ...initialForm });
    history.push('/');
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
        value={form.girisYapEmail} 
        onChange={(e) => handleChangeText(e.target.value, "girisYapEmail")} 
        />
        <TextField 
        id="password" 
        type="password" 
        autoComplete="current-password" 
        label="Parola" 
        variant="outlined" 
        className="girisYapInput" 
        value={form.girisYapSifre} 
        onChange={(e) => handleChangeText(e.target.value, "girisYapSifre")} 
        />

        <button className="girisYapButton" onClick={handleClick} >Giriş Yap</button>

        <button className="girisYapKayıtol" onClick={handleKayitOlDon} >Kayıt Ol</button>
        <button className="girisYapPunuttum" onClick={handlePunuttumDon} >Parolamı Unuttum</button>
        <button className="girisYapAnasayfa" onClick={handleAnasayfaDon} >Anasayfaya Sayfaya Dön</button>




      </form>
    </div>

  );
}

export default KullaniciSignIn;