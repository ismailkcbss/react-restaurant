import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SıgnInSıgnUp/SignIn';
import SignUp from './SıgnInSıgnUp/SignUp';
import Iletisim from './Navbar/Iletisim';
import Restoranlar from './Restoranlar/Restoranlar';
import PasswordReset from './SıgnInSıgnUp/PasswordReset';
import Blog from './Anasayfa/Blog';
import Hakkimizda from './Navbar/Hakkimizda';
import RestaurantRegistration from './SıgnInSıgnUp/RestaurantRegistration';
import * as storage from './storage.helper'
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance, setApiToken } from './axios.util';
import { userActions } from './redux/slice/userSlice';
import NewPassword from './SıgnInSıgnUp/NewPassword';
import MyRestaurant from './Restoranlar/MyRestaurant';
import ProtectedRoute from './SıgnInSıgnUp/ProtectedRoute';

function App() {

    const userState = useSelector((state) => state.user)

    const dispatch = useDispatch();
    // Procted Route

    const getCurrentUser = async () => {
        const token = storage.getValueByKey("token");
        if (token) {
            setApiToken(token);
            try {
                const { data } = await axiosInstance.get('/user/me');
                dispatch(userActions.login({ user: data, token }))
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        // sayfa refresh edilince kullanıcı var mı yok mu bilgisi gidicek o yüzden localdeki token ı alalım ve userı isteyelim
        if (!userState.isAuth) getCurrentUser();
    }, [userState.isAuth])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Blog} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/PasswordReset' component={PasswordReset} />
                <Route exact path='/NewPassword' component={NewPassword} />
                <Route exact path='/Iletisim' component={Iletisim} />
                <Route exact path='/Restoranlar' component={Restoranlar} />
                <Route exact path='/Hakkimizda' component={Hakkimizda} />
                <Route exact path='/RestaurantRegistration' component={RestaurantRegistration} />
                <ProtectedRoute exact path='/MyRestaurant' component={MyRestaurant} />

            </Switch>
        </BrowserRouter>
    )
};
export default App;