import Navbar from './Navbar';
import { TextField } from '@mui/material';
import { useState } from 'react';
import alertify from 'alertifyjs';
import { axiosInstance } from '../axios.util';


function Iletisim() {

    const initialForm = {
        iletisimAdSoyad: "",
        iletisimEmail: "",
        iletisimTelefon: "",
        iletisimKonu: "",
        iletisimMesaj: ""
    }

    const [form, setForm] = useState({ ...initialForm });



    const handleChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value,
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosInstance.post(`/user/contact`, {
                fullName: form.iletisimAdSoyad,
                email: form.iletisimEmail,
                phone: form.iletisimTelefon,
                subject: form.iletisimKonu,
                description: form.iletisimMesaj,
            })
            alertify.success('Mesaj Gönderildi...');
        } catch (error) {
            alertify.error(error.response.data.message);
        }
        setForm({ ...initialForm });
    }
    return (

        <div className="IletisimDiv">
            <Navbar />
            <div className="FormDiv">
                <h1 style={{ color: "rgba(44, 83, 122, 0.829)", fontSize: "70px" }}>Bize Ulaşın</h1>
                <p>Aşağıdaki Formu Doldurarak Bize Mesaj Gönderebilirsin</p>
                <form className="IletisimForm">
                    <TextField
                        autoFocus
                        id="AdSoyad"
                        autoComplete="outlined"
                        label="AD / SOYAD"
                        variant="outlined"
                        className="IletisimInput"
                        required
                        value={form.iletisimAdSoyad}
                        onChange={(e) => handleChangeText(e.target.value, "iletisimAdSoyad")}
                    />
                    <TextField
                        id="email"
                        autoComplete="email"
                        label="E-Mail"
                        variant="outlined"
                        className="IletisimInput"
                        maxlength="10"
                        required
                        value={form.iletisimEmail}
                        onChange={(e) => handleChangeText(e.target.value, "iletisimEmail")}
                    />
                    <TextField
                        id="telefon"
                        autoComplete="tel"
                        type='number'
                        label="Telefon Numarası"
                        placeholder='Başında Sıfır Olmadan Boşluksuz yazınız'
                        variant="outlined"
                        className="IletisimInput"
                        onInput = {(e) =>{
                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                        }}
                        value={form.iletisimTelefon}
                        onChange={(e) => handleChangeText(e.target.value, "iletisimTelefon")}
                    />
                    <TextField
                        id="outlined-name"
                        type='text'
                        label="Konu Yazınız "
                        placeholder='örn:Restoran Hakkında'
                        className="IletisimInput"
                        required
                        value={form.iletisimKonu}
                        onChange={(e) => handleChangeText(e.target.value, "iletisimKonu")}

                    />
                    <TextField
                        id="outlined-name"
                        type='text'
                        label="Mesaj Yazınız"
                        multiline
                        rows={5}
                        className="IletisimInput"
                        required
                        value={form.iletisimMesaj}
                        onChange={(e) => handleChangeText(e.target.value, "iletisimMesaj")}

                    />
                    <button className="IletisimButton" onClick={handleSubmit}  >Formu Gönder</button>

                </form>

            </div>
        </div>
    );
}

export default Iletisim;