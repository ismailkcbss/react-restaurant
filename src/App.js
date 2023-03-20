import React from 'react';
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

function App() {

    // Procted Route

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Blog} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/PasswordReset' component={PasswordReset} />
                <Route exact path='/Iletisim' component={Iletisim} />
                <Route exact path='/Restoranlar' component={Restoranlar} />
                <Route exact path='/Hakkimizda' component={Hakkimizda} />
                <Route exact path='/RestaurantRegistration' component={RestaurantRegistration} />
            </Switch>
        </BrowserRouter>
    )
};
export default App;