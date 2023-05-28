import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/slice/userSlice";
import * as storage from '../storage.helper'



function Navbar() {

    const userState = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const history = useHistory();
    const handleClickAnasayfa = () => {
        history.push('/');
    }
    const handleClickRestoran = () => {
        history.push('/Restaurantlar');
    }
    const handleClickMyRestoran = () => {
        history.push('/MyRestaurant');
    }
    const handleClickHakkimizda = () => {
        history.push('/Hakkimizda');
    }
    const handleClickIletisim = () => {
        history.push('/Iletisim');
    }
    const handleClickGirisYap = () => {
        history.push('/SignIn');
    }

    const handleClickCikisYap = () => {
        dispatch(userActions.logout());
        storage.setKeyWithValue("token", "");
        history.push('/');
    }

    return (

        <div className="NavbarDiv" >
            <div className="NavbarHeader">
                <button onClick={handleClickAnasayfa} className="NavbarButtonHome" style={{ paddingTop: '5px' }}>
                    <FamilyRestroomIcon />
                    <h6>My Restaurant</h6>
                </button>
            </div>

            <ul className="NavbarPages">
                {
                    userState.user.role === 'restaurant' ? (
                        <li>
                            <button className="NavbarButton" onClick={handleClickMyRestoran}>
                                MyRestaurant
                            </button>
                        </li >
                    ) : (
                        <li>
                            <button className="NavbarButton" onClick={handleClickRestoran}>
                                Restaurant
                            </button>
                        </li >
                    )
                }

                <li>
                    <button className="NavbarButton" onClick={handleClickHakkimizda}>
                        Hakkımızda
                    </button>
                </li>
                <li>
                    <button className="NavbarButton" onClick={handleClickIletisim}>
                        İletişim
                    </button>
                </li>

            </ul>

            <div className="NavbarInput">
                {userState.user.role === 'customer' ? (
                    <SearchBar />
                ) : (
                    ''
                )}

                {
                    userState.isAuth ? (
                        <button className="NavbarButton" onClick={handleClickCikisYap}>
                            Çıkış Yap
                        </button>

                    ) : (
                        <button className="NavbarButton" onClick={handleClickGirisYap}>
                            Giriş Yap
                        </button>
                    )

                }

            </div>

        </div>
    );
}

export default Navbar;