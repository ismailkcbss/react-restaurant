import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/slice/userSlice";

function KullaniciSignUp() {

  const initialForm = {
    kayitYapAd: "",
    kayitYapSoyad: "",
    kayitYapMail: "",
    kayitYapTelefon: "",
    kayitYapParola: "",
  }

  const [form, setForm] = useState({ ...initialForm });

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const onChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const history = useHistory();

  const [rol, setRol] = useState(0);

  const tiklama = () => {
    setCount(count + 1);

    if (count % 2 === 0) {
      //console.log("Restoran");
      return setRol(1);
    }
    else {
      //console.log("Müşteri");
      //console.log(count);
      return setRol(0);
    }
  }

  const handleKayitOlClick = async (event) => {
    event.preventDefault();
    if (rol === 1) {
      history.push('/RestaurantRegistration');
    }
    else {
      // try {
      //   const { data } = await axios.post("http://localhost:8000/auth/login", {
      //     fullName: form.kayitYapAd + " " + form.kayitYapSoyad,
      //     email: form.kayitYapMail,
      //     phone: form.kayitYapTelefon,
      //     password: form.kayitYapParola,
      //   });

      //   dispatch(userActions.login(data));
      // } catch (error) {
      //   // alertify
      // }

      history.push('/');
    }
    setForm({ ...initialForm });
  }


  //const history = useHistory();
  const handleGirisYapDon = () => {
    history.push('/SignIn');
  }



  return (

    <div className="kayitOlDiv">
      <form className="kayıtOlForm" >
        <h5>Kayıt Olmak Aşağıdaki Bilgileri Doldurunuz</h5>
        <TextField
          
          autoFocus
          id="Ad"
          autoComplete="outlined"
          label="Adınızı Giriniz"
          variant="outlined"
          className="kayitYapInput"
          value={form.kayitYapAd}
          onChange={(e) => onChangeText(e.target.value, "kayitYapAd")}
        />
        <TextField
          id="Soyad"
          autoComplete="outlined"
          label="Soyadınızı Giriniz"
          variant="outlined"
          className="kayitYapInput"
          value={form.kayitYapSoyad}
          onChange={(e) => onChangeText(e.target.value, "kayitYapSoyad")}
        />
        <TextField
          id="Email"
          autoComplete="email"
          label="E-posta Adresinizi Giriniz"
          variant="outlined"
          className="kayitYapInput"
          value={form.kayitYapMail}
          onChange={(e) => onChangeText(e.target.value, "kayitYapMail")}

        />
        <TextField
          id="Phone"
          autoComplete="phone"
          label="Telefon Numaranızı Giriniz"
          variant="outlined"
          placeholder='(500)-000-0000'
          className="kayitYapInput"
          value={form.kayitYapTelefon}
          onChange={(e) => onChangeText(e.target.value, "kayitYapTelefon")}
        />
        <TextField
          id="Password"
          type="password"
          autoComplete="current-password"
          label="Parolanızı Giriniz"
          variant="outlined"
          className="kayitYapInput"
          value={form.kayitYapParola}
          onChange={(e) => onChangeText(e.target.value, "kayitYapParola")}
        />

        <label className="kayitYapRolLabel"><input className="kayitYapRolCheck" type="checkbox" onClick={tiklama} />Restoran İşletmecisiyim</label>

        <button className="kayitYapButton" onClick={handleKayitOlClick} >Kayıt Ol</button>

        <button className="kayitYapGirisYapDon" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Geri Git</button>

      </form>
    </div>
  );
}

export default KullaniciSignUp;
