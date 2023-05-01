import { Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosInstance, setApiToken } from "../axios.util";
import { userActions } from "../redux/slice/userSlice";
import* as storage from "../storage.helper"
import alertify from "alertifyjs";



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

  const register = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosInstance.post("/auth/register", {
        fullName: form.kayitYapAd + " " + form.kayitYapSoyad,
        email: form.kayitYapMail,
        phone: form.kayitYapTelefon,
        password: form.kayitYapParola,
        role: rol === 0 ? 'customer' : 'restaurant',
      });
      if (rol === 1) {
        // bilgileri doldur
        dispatch(userActions.login(data));
        setApiToken(data.token);
        storage.setKeyWithValue("token",data.token);
        history.push('/RestaurantRegistration');
      }
      else {
        alertify.success('Kayıt Başarılı');
        history.push('/SignIn');
      }
      setForm({ ...initialForm });
    } catch (error) {
      alertify.error(error.response.data.message);
    }
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

        <label className="kayitYapRolLabel"><Checkbox className="kayitYapRolCheck" type="checkbox" onClick={tiklama} />Restoran İşletmecisiyim</label>

        <button className="kayitYapButton" type="submit" onClick={register} >Kayıt Ol</button>

        <button className="kayitYapGirisYapDon" onClick={handleGirisYapDon} >Giriş Yap Sayfasına Geri Git</button>

      </form>
    </div>
  );
}

export default KullaniciSignUp;
