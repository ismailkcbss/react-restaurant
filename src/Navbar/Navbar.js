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
        history.push('/Restoranlar');
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
        storage.setKeyWithValue("token","");
        history.push('/');
    }

    /*başlık Restoran hakkımızda iletişim searchbar girişyapButon */

    return (

        <div className="NavbarDiv" >
            <div className="NavbarHeader">
                <button onClick={handleClickAnasayfa} className="NavbarButtonHome" style={{ paddingTop: '5px' }}>
                    <FamilyRestroomIcon />
                    <h6>My Restoran</h6>
                </button>
            </div>

            <ul className="NavbarPages">
                <li>
                    <button className="NavbarButton" onClick={handleClickRestoran}>
                        Restoranlar
                    </button>
                </li >
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
                <SearchBar />
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