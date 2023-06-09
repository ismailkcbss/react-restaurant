import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { storage } from '../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useHistory, useParams } from "react-router-dom";
import alertify from "alertifyjs";
import { axiosInstance } from "../axios.util";
import { useDispatch, useSelector } from "react-redux";
import { restaurantMenuActions } from "../redux/slice/restaurantMenuSlice";
import { v4 as uuidv4 } from 'uuid';



function RestaurantMenu() {

    const initialForm = {
        MenuTitle: "",
        MenuDesc: "",
        MenuPrice: "",
    }

    const [form, setForm] = useState({ ...initialForm });
    const [image, setImage] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [foto, setFoto] = useState(null);
    const restaurantState = useSelector((state) => state.restaurant);


    const restaurantId = restaurantState.restaurant.id;
    console.log(restaurantId);


    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams();

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

    const handleSaveClick = () => {
        if(id){
            RestaurantMenuPut();
        } else {
            handleSubmit();
        }
    }

    const handleSubmit = async () => {
        const imageRef = ref(storage, uuidv4());
        try {
            await uploadBytes(imageRef, image);
            const result = await getDownloadURL(imageRef);
            const { data } = await axiosInstance.post('/menu/create', {
                restaurantId: restaurantId,
                title: form.MenuTitle,
                description: form.MenuDesc,
                img: result,
                price: Number(form.MenuPrice),
            })
            setFoto(result)
            dispatch(restaurantMenuActions.set(data));
            alertify.success("Restaurant Menu Kaydedildi");
            history.push('/MyRestaurant');
        } catch (error) {
            alertify.error(error.response.data.message);
        }

    };

    const RestaurantMenuPut = async () => {
        try {
            let newFotoUrl = null;
            if (image) {
                const imageRef = ref(storage, uuidv4());
                await uploadBytes(imageRef, image);
                newFotoUrl = await getDownloadURL(imageRef);
                setFoto(newFotoUrl);
            }
            const { data } = await axiosInstance.put(`/menu/${id}`,{
                restaurantId: restaurantId,
                title: form.MenuTitle,
                description: form.MenuDesc,
                img: newFotoUrl || foto,
                price: Number(form.MenuPrice),
            })
            history.push('/MyRestaurant');
            dispatch(restaurantMenuActions.set(data));
        } catch (error) {
            alertify.error(error.response.data.message);
        }
    }

    const RestaurantMenuGet = async () => {
        if(id){
            try {
                const { data } = await axiosInstance.get(`/menu/${id}`)
                setForm(
                    {
                        MenuTitle: data.title,
                        MenuDesc: data.description,
                        MenuPrice: data.price
                    }
                )
                setFoto(data.img)
                dispatch(restaurantMenuActions.set(data));
            } catch (error) {
                alertify.error(error.response.data.message);
            }
    
        }
    }

    useEffect(() => {
        RestaurantMenuGet();
    }, [])


    return (
        <div className="RestaurantMenuDiv">
            <Navbar />
            {
                foto ? <img src={foto} alt="resim" /> : null
            }

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
                <TextField
                    id="MenuPrice"
                    autoComplete="outlined"
                    label="Menu Fiyatını Giriniz Giriniz"
                    variant="outlined"
                    className="RestaurantMenuInput"
                    value={form.MenuPrice}
                    onChange={(e) => handleChangeText(e.target.value, "MenuPrice")}
                />

                <input className="RestaurantMenuFileButton" type="file" onChange={handleImageChange} />

                <button className="RestaurantMenuSubmitButton" type="submit" onClick={handleSaveClick}>Kaydet</button>
            </div>
            <Footer />
        </div>
    );
}

export default RestaurantMenu;