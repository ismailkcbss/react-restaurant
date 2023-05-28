import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Avatar, TextField } from "@mui/material";
import { storage } from '../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs";
import { axiosInstance } from "../axios.util";



function RestaurantMenu() {

    const initialForm = {
        MenuTitle: "",
        MenuDesc: "",
    }

    const [form, setForm] = useState({ ...initialForm });
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const history = useHistory();

    const handleChangeText = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    
    const handleSubmit = async () => {

        try {
            const { data } = await axiosInstance.post('/restaurant/images', {
                BackendImage: url,
            })

            alertify.success("Restaurant Menu Kaydedildi");
        } catch (error) {
            alertify.error(error.response.data.message);
        }
        
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            }).catch(error => {
                alertify.error(error.response.data.message);
            });
            alertify.success("Restaurant Menu Kaydedildi");
            setImage(null);
        }).catch(error => {
            alertify.error(error.response.data.message);
        });

        //history.push('/MyRestaurant');
    };




    return (
        <div className="RestaurantMenuDiv">
            <Navbar />

            <img
                alt="SEZER"
                src={url}
                sx={{ width: 150, height: 150 }}
            />

            <div className="RestaurantMenuHeader">Restaurant Menu Bilgilerinizi Doldurunuz</div>
            <div className="RestaurantMenuBody">
                <TextField
                    autoFocus
                    id="title"
                    autoComplete="outlined"
                    label="Menu Adını Giriniz"
                    variant="outlined"
                    className="RestaurantMenuInput"
                    value={form.MenuTitle}
                    onChange={(e) => handleChangeText(e.target.value, "MenuTitle")}
                />
                <TextField
                    id="desc"
                    autoComplete="outlined"
                    multiline
                    rows={5}
                    label="Menu Açıklamanızı Giriniz Giriniz"
                    variant="outlined"
                    className="RestaurantMenuInput"
                    value={form.MenuDesc}
                    onChange={(e) => handleChangeText(e.target.value, "MenuDesc")}
                />

                <input className="RestaurantMenuFileButton" type="file" onChange={handleImageChange} />

                <button className="RestaurantMenuSubmitButton" type="submit" onClick={handleSubmit}>Kaydet</button>
            </div>
            <Footer />
        </div>
    );
}

export default RestaurantMenu;